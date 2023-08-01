import { useState, useEffect } from "react";
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addContactsThunk, getContactsThunk } from "../../redux/contactsThunk";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    dispatch(getContactsThunk());
  },[dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "name" ? setName(value) : setNumber(value);
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  const contacts = useSelector(state => state.contacts.items);
  return (
    <form
    className={s.form}
      onSubmit={(e) => {
        const notifly = () => toast(`${name} is alredy in contacts`);
        const contact = {
          name: name,
          phone: number,
        };
        e.preventDefault();
        if (
          contacts.some(
            value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
          )
        ) {
          notifly();
        } else {
          dispatch(addContactsThunk(contact));
          reset();
        }
      }
    }
    >
      <div className={s.container}>
        <label className={s.label}>
          <span>Name</span>
        </label>
        <input
            className={s.input}
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z]*)?[a-zA-Z]*)*$"
          required
        />

        <label>
          <span>Number</span>
        </label>
        <input
        className={s.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z]*)?[a-zA-Z]*)*$"
          required
        />
        <ToastContainer
         position="top-center"
         autoClose={3000}
         hideProgressBar={false}
         pauseOnHover
         theme="dark"
        />
        <button className={s.btn} type="submit">Add contact</button>
      </div>
    </form>
  );
};
