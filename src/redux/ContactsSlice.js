import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const actions = [fetchContacts, addContact, deleteContact];
const activeAction = status => actions.map(action => action[status]);

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addMatcher(isAnyOf(...activeAction('pending')), handlePending)
      .addMatcher(isAnyOf(...activeAction('rejected')), handleRejected)
      .addMatcher(isAnyOf(...activeAction('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});
