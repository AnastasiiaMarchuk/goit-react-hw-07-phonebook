import React from 'react';
import AddingForm from '../AddingForm/AddingForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { RiContactsBookLine } from 'react-icons/ri';
import {
  ContactsSection,
  Container,
  SearchSection,
  Section,
  TitleWrapper,
} from './App.styled';

export const App = () => {
  return (
    <Section>
      <TitleWrapper>
        <h1>Phonebook</h1> <RiContactsBookLine size={40} color="#fff" />
      </TitleWrapper>
      <SearchSection>
        <Container>
          <Filter />
          <AddingForm />/
        </Container>
        <ContactsSection>
          <h2>Contacts</h2>
          <ContactList />
        </ContactsSection>
      </SearchSection>
    </Section>
  );
};
