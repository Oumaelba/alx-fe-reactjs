import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  email: Yup.string().email("Invalid email format").required("Email is required."),
  password: Yup.string().min(6, "Password must be at least 6 characters long").required("Password is required."),
});

// Initial values for the form
const initialValues = {
  username: '',
  email: '',
  password: '',
};

// Handle form submission
const handleSubmit = (values) => {
  console.log("Form submitted:", values);
  alert("Form submitted successfully!");
};

const FormikForm = () => {
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Formik User Registration'),
    React.createElement(Formik, {
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: handleSubmit,
    }, React.createElement(Form, null,
      React.createElement('div', null,
        React.createElement('label', { htmlFor: 'username' }, 'Username:'),
        React.createElement(Field, {
          type: 'text',
          id: 'username',
          name: 'username',
          placeholder: 'Enter username',
        }),
        React.createElement(ErrorMessage, { name: 'username', component: 'p', className: 'error' })
      ),
      React.createElement('div', null,
        React.createElement('label', { htmlFor: 'email' }, 'Email:'),
        React.createElement(Field, {
          type: 'email',
          id: 'email',
          name: 'email',
          placeholder: 'Enter email',
        }),
        React.createElement(ErrorMessage, { name: 'email', component: 'p', className: 'error' })
      ),
      React.createElement('div', null,
        React.createElement('label', { htmlFor: 'password' }, 'Password:'),
        React.createElement(Field, {
          type: 'password',
          id: 'password',
          name: 'password',
          placeholder: 'Enter password',
        }),
        React.createElement(ErrorMessage, { name: 'password', component: 'p', className: 'error' })
      ),
      React.createElement('button', { type: 'submit' }, 'Register')
    ))
  );
};

export default FormikForm;