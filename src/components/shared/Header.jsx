import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/styles/header.css'

const Header = () => {

  


  return (
    <header className='header__nav'>
        <h1><Link to='/'>E-commerce</Link></h1>
        <nav className='nav__menu'>
            <ul>
                <li><Link to='/login'><i className='bx bxs-user-circle'></i></Link></li>
                <li><Link to='/Register'>Register</Link></li>
                <li><Link to='/purchases'>Purchases</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header