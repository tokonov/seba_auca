import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/images/LOGO.svg'

const Header = () => {

  return (
    <header>
      <Link to='/'><img src={logo} alt="logo" /></Link>
      <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li className='dropdown' >
              <Link to='/partner'>Educational programs</Link>
                <ul className='dropdown-menu'>
                  <li><Link to='news/category'>category</Link></li>
                </ul>
            </li>            
            <li className='dropdown' >
              <Link to='news'>People</Link>
                <ul className='dropdown-menu'>
                  <li><Link to='education/partner'>partner</Link></li>
                </ul>
            </li>
            <li><Link>Research</Link></li>
            <li><Link>Admissions Committee</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
