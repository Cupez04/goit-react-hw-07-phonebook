import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, deletContacts, getContacts } from "../services/apiContacts";


export const getContactsThunk = createAsyncThunk(
    'contacts/allContacts',
    async(_, {reject}) => {
        try{
            const data = getContacts();
            return data;
        }
        catch(error){
            return reject(error.message);
        }
    }
);

export const addContactsThunk = createAsyncThunk(
    'contacts/addContact',
    async (contact, {reject}) => {
        try {
            const data = addContacts(contact);
            return data;
        } catch (error) {
            return reject(error.message);            
        }
    }
);


export const deletContactsThunk = createAsyncThunk (
    'contacts/deletContact',
    async(id, {reject}) => {
        try {
            const data = deletContacts(id);
            return data;
        } catch (error) {
            return reject(error.message);
        }
    }
)

