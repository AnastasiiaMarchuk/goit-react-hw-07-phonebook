import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from './selectors';
import { findContact } from './FilterSlice';
import { fetchContacts, addContact, deleteContact } from './operations';
import { useCallback } from 'react';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const getContacts = useCallback(() => dispatch(fetchContacts()), [dispatch]);
  const addNewContact = contact => dispatch(addContact(contact));
  const removeContact = contactId => dispatch(deleteContact(contactId));

  return {
    contacts,
    addNewContact,
    removeContact,
    dispatch,
    getContacts,
    isLoading,
    error,
  };
};

export const useFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const searchContact = searchName => dispatch(findContact(searchName));

  return { filter, searchContact };
};
