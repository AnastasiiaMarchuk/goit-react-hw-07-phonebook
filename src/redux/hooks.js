import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from './selectors';
import * as actions from './ContactsSlice';
import { findContact } from './FilterSlice';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addContact = contact => dispatch(actions.addContact(contact));
  const removeContact = contactId => dispatch(actions.removeContact(contactId));

  return { contacts, addContact, removeContact };
};

export const useFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const searchContact = searchName => dispatch(findContact(searchName));

  return { filter, searchContact };
};
