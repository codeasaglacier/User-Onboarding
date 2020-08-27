import React from 'react';
import './App.css';
import FormikUserForm from './Form'


const App = () => {

    return (
      <div className="App">
    <FormikUserForm />
      </div>
    );
}



export default App

// const FormikUserForm = withFormik({
//   mapPropsToValues({ name }) {
//       return {
//           name: name || '',
//           email: '',
//           password: '',
//           haveRead: false,
//       }
//   },

//   validationSchema: Yup.object().shape({
//       name: Yup.string().required("It's dangerous to go without a name, place yours here."),
//       email: Yup.string().required("What's in an email address? A form without one would smell incomplete."),
//       password: Yup.string().required("What's the secret password?"),
//       haveRead: Yup.bool()
//   }),

//   handleSubmit(values, { setStatus, resetForm }) {
//       console.log('Submitting form:', values)

//       axios
//           .post('https://reqres.in/api/users/', values)
//           .then(res => {
//               console.log('Success:', res)
//               setStatus(res.data)
//               resetForm()
//           })
//           .catch(err => {
//               console.log('Error: ', err.res)
//           })
//   }

// })(UserForm)

// export default FormikUserForm
