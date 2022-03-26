import React from 'react'

function About(props) {
  return (
      <div id='about'>
          <div className='about-image'>
              <img src={props.image } alt=''/>
          </div>
          <div className='about-text'>
              <h2>{props.title }</h2>
              <p>Here we will explain about the company.... for example we do what we do and with confidence.... etc......
                  We do the things with at most focus to reduce the chances of committing mistakes
              </p>
              <button>{ props.button}</button>
          </div>
    </div>
  )
}

export default About;