import s from "./ContactForm.module.css";

import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
import { useId } from "react";

const initialValues = {
  username: "",
  phoneNumber: "",
};

const ContactForm = ({ setContacts }) => {
  const usernameFieldId = useId();
  const phoneNumberFieldId = useId();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.phoneNumber,
    };

    setContacts((prev) => [...prev, newContact]);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label htmlFor={usernameFieldId}>Name</label>
        <Field
          className={s.field}
          type="text"
          name="username"
          id={usernameFieldId}
        />
        <label htmlFor={phoneNumberFieldId}>Number</label>
        <Field
          className={s.field}
          type="phone"
          name="phoneNumber"
          //  регулярнй вираз для валідації
          id={phoneNumberFieldId}
        />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
