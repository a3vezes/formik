import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './Login.scss'
import Spinner from '../../layout/Spinner'

const validation = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'E-mail is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Please enter a valid e-mail address'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to have more than 6 characters'
  }
  return errors
}

const Login = () => {
  return (
    <div className='form-container'>
      <div className='form'>
        <h1>Logo</h1>
        <p>Log in to your account to continue</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validation}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type='email'
                name='email'
                placeholder='example@gmail.com'
              />
              <ErrorMessage
                name='email'
                component='div'
                className='error-message'
              />
              <Field type='password' name='password' placeholder='password' />
              <ErrorMessage
                name='password'
                component='div'
                className='error-message'
              />
              <button
                type='submit'
                className='btn btn-block btn-primary'
                disabled={isSubmitting}
              >
                LOG IN
              </button>
              {isSubmitting && <Spinner />}
            </Form>
          )}
        </Formik>
        <p>
          Don't have an account?
          <Link to='/register' className='link'>
            {' '}
            Register
          </Link>
        </p>
      </div>
      <div className='form-img'></div>
    </div>
  )
}

export default Login
