import UserContact from '../userContact/UserContact';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from '../../redux/contactSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const contactSearch = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
  });
 
  return (
    <ul className={css.list}>
      {contactSearch.map(({ name, number, id }) => (
        <li className={css.user} key={id}>
          <UserContact name={name} number={number} />
          <button
            className={css.btn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


