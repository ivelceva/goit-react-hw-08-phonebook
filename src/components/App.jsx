import React from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import css from './App.module.css';

const App = () => {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;


