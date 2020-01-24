import React, { useState, useEffect } from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'



const UserForm = ({ errors, touched, values, status }) => {
    const [ user, setUser ] = useState([])
  
    useEffect(() => {
      status && setUser(users => [...users, status])
    }, [status])

    return (
        <div>
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

        {user.map(user => (
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
          </ul>
        ))}
        </div>
        )}

const FormikUserForm = withFormik({
    mapPropsToValues({ name }) {
        return {
            name: name || '',
            email: '',
            password: '',
            haveRead: false,
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("It's dangerous to go without a name, place yours here."),
        email: Yup.string().required("What's in an email address? A form without one would smell incomplete."),
        password: Yup.string().required("What's the secret password?"),
        haveRead: Yup.bool()
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        console.log('Submitting form:', values)

        axios
            .post('https://reqres.in/api/users/', values)
            .then(res => {
                console.log('Success:', res)
                setStatus(res.data)
                resetForm()
            })
            .catch(err => {
                console.log('Error: ', err.res)
            })
    }

})(UserForm)

export default FormikUserForm