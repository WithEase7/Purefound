import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const initialState = {
  posts: [],
  error: '',
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch_api':
      return { posts: action.payload, error: '' }
    case 'failed_to_fetch':
      return { posts: [], error: 'Error retrieving data' }
  }
}

const initialValues = {
  name: '',
  email: '',
  phone: '',
  pass1: '',
  pass2: '',
}

function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        dispatch({ type: 'fetch_api', payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: 'failed_to_fetch' })
        console.log(error)
      })
  }, [])

  const EmailArray = state.posts.map((post) => post.email)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yup.object({
        name: yup.string().required('Required'),
        email: yup
          .string()
          .required('Required')
          .email('Enter valid email')
          .notOneOf(EmailArray, 'Email already taken'),
        phone: yup.string().required('Required'),
        pass1: yup.string().required('Required').min(8),
        pass2: yup.string().required('Required'),
      })}
    >
      <div className="main-div">
        <div className="box">
          <h1>Create a new account</h1>
          <Form>
            <div className="FieldBox">
              <ErrorMessage name="name">
                {(error) => {
                  return <div className="error">{error}</div>
                }}
              </ErrorMessage>
              <Field
                type="text"
                id="name"
                name="name"
                className="Field-s"
                required
              />

              <label htmlFor="name">Full Name</label>
            </div>
            <div className="FieldBox">
              <ErrorMessage name="email">
                {(error) => {
                  return <div className="error">{error}</div>
                }}
              </ErrorMessage>
              <Field
                type="email"
                id="email"
                name="email"
                className="Field-s"
                required
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="FieldBox">
              <ErrorMessage name="phone">
                {(error) => {
                  return <div className="error">{error}</div>
                }}
              </ErrorMessage>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="Field-s"
                required
              />
              <label htmlFor="phone">Phone No.</label>
            </div>
            <div className="FieldBox">
              <ErrorMessage name="pass1">
                {(error) => {
                  return <div className="error">{error}</div>
                }}
              </ErrorMessage>
              <Field
                type="password"
                id="pass1"
                name="pass1"
                className="Field-s"
                required
              />
              <label htmlFor="pass1">Password</label>
            </div>
            <div className="FieldBox">
              <ErrorMessage name="pass2">
                {(error) => {
                  return <div className="error">{error}</div>
                }}
              </ErrorMessage>
              <Field
                type="password"
                id="pass2"
                name="pass2"
                className="Field-s"
                required
              />
              <label htmlFor="pass2">Confirm Password</label>
            </div>
            <div className="button-s">
              <button type="submit" className="submit-s">
                Sign Up
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  )
}

export default SignUp
