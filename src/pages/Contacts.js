import ContactForm from '../components/contactForm/ContactForm';
import Filter from '../components/filter/Filter';
import ContactList from '../components/contactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default Contacts;
