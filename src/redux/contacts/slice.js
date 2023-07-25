import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  isErrorContacts: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchContacts.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(addContact.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(deleteContact.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      }),
});
