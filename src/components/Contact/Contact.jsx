import { IoCall } from 'react-icons/io5';
import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div>
      <p className={css.name}>
        <FaUser size={18} /> {name}
      </p>
      <p>
        <IoCall size={12} /> {number}
      </p>
      <button onClick={() => onDelete(id)} className={css.btnContact}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
