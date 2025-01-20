import s from "./Contact.module.css";
import { FaUserLarge, FaPhone } from "react-icons/fa6";

function Contact({ name, phone, id, handleDelete }) {
  return (
    <div className={s.contact}>
      <div>
        <p>
          <FaUserLarge className={s.icon} size="20" /> {name}
        </p>
        <p>
          <FaPhone className={s.icon} size="20" /> {phone}
        </p>
      </div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default Contact;
