import s from "./ContactForm.module.css";

import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  phoneNumber: "",
};

const ContactForm = () => {
  const usernameFieldId = nanoid();
  const phoneNumberFieldId = nanoid();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label htmlFor={usernameFieldId}>Username</label>
        <Field
          className={s.field}
          type="text"
          name="username"
          id={usernameFieldId}
        />
        <label htmlFor={phoneNumberFieldId}>Email</label>
        <Field
          className={s.field}
          type="phone"
          name="phoneNumber"
          id={phoneNumberFieldId}
        />
        <button className={s.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
