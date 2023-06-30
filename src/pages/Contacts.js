import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/ContactsOperations';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import css from './PagesStyle.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2 className={css.formTitle}>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
