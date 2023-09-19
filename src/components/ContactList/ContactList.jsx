import { FiTrash } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import { List, Message, TitlesWrapper, Wrapper } from './ContactList.styled';
import { useContacts, useFilter } from 'redux/hooks';

export const ContactList = () => {
  const { removeContact, contacts } = useContacts();
  const { filter } = useFilter();

  const onRemoveContact = contactId => {
    removeContact(contactId);
  };

  const newList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const noContactsMessage = filter
    ? 'No contact with this name'
    : "There are no entries in your phone book yet. It's time to add your first contact";

  return (
    <>
      <Wrapper />
      <TitlesWrapper>
        <p>Name</p>
        <p>Number</p>
      </TitlesWrapper>
      <Wrapper />
      {newList.length > 0 && (
        <List>
          {newList.map(contact => {
            return (
              <li key={contact.id}>
                <BsPersonCircle size={21} color="#fff" />
                <p>{contact.name}</p>
                <span>{contact.number}</span>
                <button onClick={() => onRemoveContact(contact.id)}>
                  <FiTrash size={21} />
                </button>
              </li>
            );
          })}
        </List>
      )}
      {!newList.length && <Message>{noContactsMessage}</Message>}
    </>
  );
};
