import React, { useState, useEffect } from 'react';
import './App.css';
import { Form, Field } from 'formik'
import FormikUserForm from './form'


export default function App() {

  const UserForm = ({ errors, touched, values, status }) => {
    const [ user, setUser ] = useState([])
  
    useEffect(() => {
      status && setUser(users => [...users, status])
    }, [status])

    return (
      <div className="App">
      
        <h1>User Onboarding</h1>
        <Form>
          <Field
            type = 'text'
            name = 'name'
            placeholder = 'name'
            value = {values.name}
          />
          {touched.name && errors.name && <p>{errors.name}</p>}

          <Field
            type = 'email'
            name = 'email'
            placeholder = 'email'
            value = {values.email}
          />
          {touched.email && errors.email && <p>{errors.email}</p>}

          <Field
            type = 'password'
            name = 'password'
            placeholder = 'password'
            value = {values.password}
          />
          {touched.password && errors.password && <p>{errors.password}</p>}

          <label>
            I have read the Terms of Service.
          <Field
            type = 'checkbox'
            name = 'haveRead'
            value = {values.haveRead}
          />
          </label>
          

          <button type = 'submit'>Submit</button>
        </Form>

        {user.map(animal => (
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
          </ul>
        ))}

      </div>
    );
  }
}

<FormikUserForm />
