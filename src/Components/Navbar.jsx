import React, { useState} from 'react'
import logo from '../images/logo.png'

function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackgroud = () => {
        if (window.scrollY > 50) {
            setNav(true);
        } else { 
            setNav(false);
        }
    };
    window.addEventListener('scroll', changeBackgroud);
  return (
      <nav className={ nav? 'nav active': 'nav'}>
          <a href='#' className='logo'>
            <img src={logo} alt=''/>
          </a>
          <input type='checkbox' className='menu-btn' id='menu-btn'></input>
          <label className='menu-icon' htmlFor='menu-btn'>
            <span className='nav-icon'></span>
          </label>
          <ul className='menu'>
              <li><a href='#'>Home</a></li>
              <li><a href='features'>Products</a></li>
              <li><a href='about'>About</a></li>
              <li><a href='presentation'>UI SS</a></li>
              <li><a href='contact'>Contact</a></li>
          </ul>
    </nav>
  )
}
;
export default Navbar;