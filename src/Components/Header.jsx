import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
      <div id='main'>
          <Navbar />
          <div className='name'>
              <h1><span>Launch Your App</span> with Confidence And Creativity</h1>
              <p className='details'>Here you can describe about you main goal of this site</p>
              <a href='#' className='cv-btn'>Download</a>
          </div>
    </div>
  )
}
;
export default Header;