// import { useState } from "react";
import './App.css';
import { IoCall } from 'react-icons/io5';
import ContactList from './ContactList/ContactList';
import inContact from '../contact.json';
import SearchBox from './SearchBox/SearchBox';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
function App() {
  const [contact, setContact] = useState(inContact);
  const [inputValue, setInputValue] = useState('');
  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const addContact = newContact => {
    setContact(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = contactId => {
    setContact(prevContact => {
      console.log(contactId);

      return prevContact.filter(cont => cont.id !== contactId);
    });
  };





  const visibleContact = contact.filter(cont =>
    cont.name.toLowerCase().includes(inputValue.toLowerCase().trim())
  );

  return (
    <div>
      <IoCall size={30} /> <h1 className="title" > Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleChange={handleChange}  onSearch={setInputValue} inputValue={inputValue} />
      <ContactList onDelete={deleteContact} contact={visibleContact} />
    </div>
  );
}

export default App;
