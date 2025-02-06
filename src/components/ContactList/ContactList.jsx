import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
const ContactList = ({ contact, onDelete }) => {
  return (
    <>
      {contact.length !== 0 ? (
        <ul className={css.wraperContact}>
          {contact.map(item => (
            <li className={css.item} key={item.id}>
              <Contact onDelete={onDelete} contact={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.texte}>No contacts found</p>
      )}{' '}
    </>
  );
};

export default ContactList;
