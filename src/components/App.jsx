// import { useState } from "react";
import './App.css';
import { IoCall } from 'react-icons/io5';
import ContactList from './ContactList/ContactList';
import inContact from '../contact.json';
import SearchBox from './SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
function App() {
  const [contact, setContact] = useState(() => {
    const dataContakt = localStorage.getItem('contacts');
    if (dataContakt) {
      return JSON.parse(dataContakt);
    }
    return inContact;
  });

  const [inputValue, setInputValue] = useState('');

  const addContact = newContact => {
    setContact(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = contactId => {
    setContact(prevContact => {
      return prevContact.filter(cont => cont.id !== contactId);
    });
  };

  const visibleContact = contact.filter(cont =>
    cont.name.toLowerCase().includes(inputValue.toLowerCase().trim())
  );
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }, [contact]);

  return (
    <div>
      <p>goit-react-hw-03</p>
      <IoCall size={30} /> <h1 className="title"> Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onSearch={setInputValue} inputValue={inputValue} />
      <ContactList onDelete={deleteContact} contact={visibleContact} />
    </div>
  );
}

export default App;
