import { createSlice} from "@reduxjs/toolkit";
import { addContactsThunk, deletContactsThunk, getContactsThunk } from "./contactsThunk";

const handlePending = state => {
    state.isLoading = true;
}

const handleReject = (state, {payload}) => {
    state.error = payload;
}

const sliceContact = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            {
                "name": "Ms. Tony Schinner",
                "phone": "653.542.8020 x91508",
                "id": "1"
               },
        ],
        isLoading : false,
        error: null,
    },


    extraReducers: builder => {
        builder 
        .addCase(getContactsThunk.pending, handlePending)
        .addCase(getContactsThunk.rejected, handleReject)
        .addCase(getContactsThunk.fulfilled, (state, {payload}) => {
            state.items = payload;
        })
        
        .addCase(addContactsThunk.pending, handlePending)
        .addCase(addContactsThunk.rejected, handleReject)
        .addCase(addContactsThunk.fulfilled, (state, {payload})=> {
            state.items = [payload, ...state.items];
        })

        .addCase(deletContactsThunk.pending, handlePending)
        .addCase(deletContactsThunk.rejected, handleReject)
        .addCase(deletContactsThunk.fulfilled, (state, {payload})=> {
            state.items = state.items.filter(item => item.id !== payload.id)
        });
    },
});

export const {addContactsActions, deletContactActions} = sliceContact.actions;
export const contactsReducer = sliceContact.reducer;



