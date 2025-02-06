import { Field, Form, Formik } from 'formik';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useId } from 'react';
const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const telFieldId = useId();
  // console.log(nanoid());

  const initialValues = {
    id: nanoid(),
    number: '',
    name: '',
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    addContact(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.forma}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field name="name" id={nameFieldId} />
          <label htmlFor={telFieldId}>Number</label>
          <Field name="number" type="number" id={telFieldId} />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
