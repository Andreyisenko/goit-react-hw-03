import { Field, Form, Formik } from 'formik';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const telFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const initialValues = {
    id: '',
    number: '',
    name: '',
  };
  const handleSubmit = (values, actions) => {
    addContact({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.forma}>
          <label className={css.userN} htmlFor={nameFieldId}>
            Username
          </label>
          <Field className={css.user} name="name" id={nameFieldId} />
          <ErrorMessage className={css.spn} name="name" component="span" />
          <label className={css.numB} htmlFor={telFieldId}>
            Number
          </label>
          <Field
            className={css.num}
            name="number"
            type="number"
            id={telFieldId}
          />
          <ErrorMessage className={css.spn} name="number" component="span" />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
