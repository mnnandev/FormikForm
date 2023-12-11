import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
const LoginForm = () => {

  const defaultValue = {
    name: "",
    email: "",
    password: ""
  }
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter your name')
      .min(2, 'Name should be at least 2 characters')
      .max(50, 'Name should not exceed 50 characters'),

    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required')
      .max(100, 'Email should not exceed 100 characters'),

    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Password should be at least 6 characters')
      .max(20, 'Password should not exceed 20 characters'),
  });

  const handlesubmite = (values) => {
    console.log("valuesss", values)
  }

  return (
    <>


      <Formik className="max-w-md mx-auto" initialValues={defaultValue} validationSchema={validationSchema} onSubmit={handlesubmite}>
        <Form>
          <div className='max-w-[1240px] mx-auto md:px-[200px] px-2'>
            <div className="relative z-0 w-full mb-5 group">
              <Field
                type="email"
                name="email" // Update to use 'name' instead of 'email'
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label htmlFor="floating_email" className=" mb-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              <p className='text-[red]'>
                <ErrorMessage name='email' />
              </p>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <Field type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              <p className='text-[red]'>
                <ErrorMessage name='password' />
              </p>
            </div>

            <div className="grid md:grid-cols-1 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="text"
                  name="name"
                  id="floating_first_name"
                  className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
                <p className='text-[red]'>
                  <ErrorMessage name='name' />
                </p>
              </div>
            </div>


            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
        </Form>
      </Formik>

    </>
  )
}

export default LoginForm;