import React, { useState, useEffect } from 'react'
import './Login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import * as yup from 'yup'

function Login() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        setError('Error retrieving data')
        console.log(error)
      })
  }, [])

  const EmailArray = posts.map((post) => post.email)

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={yup.object({
        email: yup.string().required('Required').oneOf(EmailArray, `Email doesn't exist`),
        password: yup.string().required('Required'),
      })}
    >
      <div className="parent-l">
        <div className="box-l">
          <h1 className="heading-l">Login to your account</h1>
          <Form>
            <div className="input-l">
              <ErrorMessage name="email">
                {(error) => {
                  return <div className="error">{error}</div>
                }}
              </ErrorMessage>
              <Field
                type="email"
                className="inputfield-l"
                name="email"
                required
              />
              <label>Email ID</label>
            </div>
            <div className="input-l">
              <ErrorMessage name="password">
                {(error) => {
                  return <div className="error">{error}</div>
                }}
              </ErrorMessage>
              <Field
                type="password"
                className="inputfield-l"
                name="password"
                required
              />
              <label>Password</label>
            </div>
            <div className="button-l">
              <button type="submit" className="submit-l">Login</button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  )
}

export default Login
