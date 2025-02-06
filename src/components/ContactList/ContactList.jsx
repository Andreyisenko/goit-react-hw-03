
import Contact from '../Contact/Contact'
import css from './ContactList.module.css' 
const ContactList = ({contact, onDelete}) => {
  // console.log(contact);
  
  return (
    <div className={css.wraperContact}>
        <Contact onDelete={onDelete} contact={contact}/>
    </div>
  )
}

export default ContactList