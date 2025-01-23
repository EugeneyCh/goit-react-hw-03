import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList({ contacts, handleDelete }) {
  return (
    <div className={s.container}>
      {contacts.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          phone={item.number}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ContactList;
