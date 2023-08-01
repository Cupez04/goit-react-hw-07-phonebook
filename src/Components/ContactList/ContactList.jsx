import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { deletContactsThunk } from "../../redux/contactsThunk";

export const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();
  return listContact.map((cont) => {
    return (
      <p key={cont.id} className={s.listItem}>
        <span className={s.phone}>
          {cont.name}: {cont.phone}
        </span>
        <button
          className={s.btn}
          type="button"
          onClick={() => {
            dispatch(deletContactsThunk(cont.id));
          }}
        >
          Delete
        </button>
      </p>
    );
  });
};

ContactList.propTypes = {
    listContact: PropTypes.array.isRequired,
}