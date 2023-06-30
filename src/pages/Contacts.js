// import ContactForm from '../components/contactForm/ContactForm';
// import Filter from '../components/filter/Filter';
// import ContactList from '../components/contactList/ContactList';

// export const Contacts = () => {
//   return (
//     <div>
//       <ContactForm />

//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/ContactsOperations';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
