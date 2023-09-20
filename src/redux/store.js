import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './ContactsSlice';
import { filterSlice } from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
