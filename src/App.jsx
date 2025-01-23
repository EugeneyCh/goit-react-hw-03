import s from "./App.module.css";

import { useEffect, useState } from "react";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem("saved-contacts")) ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
  );
  const [inputValue, setInputValue] = useState("");

  const handleDelete = (id) => {
    const newData = contacts.filter((item) => item.id !== id);
    setContacts(newData);
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.flexContainer}>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={visibleContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
