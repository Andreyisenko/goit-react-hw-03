import { IoCall } from 'react-icons/io5';
import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
const Contact = ({ contact, onDelete }) => {
  
  return (
    <div>
      {contact.length !== 0 ? <ul className={css.list}>
        {contact.map(item => (
          <li className={css.item} key={item.id}>
            <p>
              <FaUser size={12} /> {item.name}
            </p>
            <p>
              <IoCall size={12} /> {item.number}
            </p>
            <button onClick={()=>onDelete(item.id)} className={css.btnContact}>Delete</button>
          </li>
        ))}
      </ul> : <p className={css.texte}>No contacts found</p>}
    </div>
  );
};

export default Contact;
