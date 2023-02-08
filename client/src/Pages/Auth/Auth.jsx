import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
import { useState } from 'react'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, email, password })
    if (!email && !password) {
      alert("Enter email and password")
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name")
      }
      dispatch(signup({ name, email, password }, navigate))
    }
    else {
      dispatch(login({ email, password }, navigate))
    }
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type="text" name="name" id="name" onChange={(e) => { setName(e.target.value) }} />
              </label>
            )
          }
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label htmlFor='password'>
            <div>
              <h4>Password</h4>

            </div>
            <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
            {!isSignup && <p><span>Forgot Password?</span></p>}
            {isSignup && <p>Password must contain at least eight<br /> characters, include at least one letter<br /> and one number</p>}
          </label>
          <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Log In'}</button>
          {isSignup && (
            <p>
              By clicking "Sign Up", you agree to our<br /><span>terms and condtion policy</span>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}<button className='switch-btn' onClick={handleSwitch}>{isSignup ? 'Log In' : 'Sign Up'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth