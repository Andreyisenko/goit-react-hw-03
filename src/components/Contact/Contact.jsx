import { IoCall } from 'react-icons/io5';
import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div>
      <p>
        <FaUser size={12} /> {name}
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

// {contact.length !== 0 ? <ul className={css.list}>
// {contact.map(item => (
//   <li className={css.item} key={item.id}>
//     <p>
//       <FaUser size={12} /> {item.name}
//     </p>
//     <p>
//       <IoCall size={12} /> {item.number}
//     </p>
//     <button onClick={()=>onDelete(item.id)} className={css.btnContact}>Delete</button>
//   </li>
// ))}
// </ul> : <p className={css.texte}>No contacts found</p>}
