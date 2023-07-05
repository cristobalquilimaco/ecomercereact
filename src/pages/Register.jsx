import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/UseAuthentication'
import defaultRegisterValues from '../utils/defaultRegisterValues'
import '../pages/styles/register.css'

const Register = () => {

  const {register, handleSubmit, reset} = useForm()

const { createNewUser } = useAuthentication()

  const submit = data => {
    createNewUser(data)
    reset(defaultRegisterValues)
  }

  return (
    <article className='principalregister'>
          <div className='register'>
    <form onSubmit={handleSubmit(submit)}>
<h2 className='titlelogin'>Create new User</h2>
<div className='registerclass'>

            <label htmlFor="firstName">First name</label>
        <input {...register('firstName')} type="text" id='firstName' />
        
        
            <label htmlFor="LastName">last name</label>
        <input {...register('lastName')} type="text" id='lastName' />
        
        
            <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id='email' />
        
        
            <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id='password' />
        
        
            <label htmlFor="phone">Phone</label>
        <input {...register('phone')} type="tel" id='phone' />
        
        <button className='bottonlogin'>Register</button>
</div>
       
    </form>
  
    </div>
    </article>

  )
}

export default Register