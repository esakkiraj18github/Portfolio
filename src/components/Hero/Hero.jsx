import React from 'react'
import  './Hero.css'

const Hero = () => {
  return (    
    <section className='hero-container' id='hero'>
      <div className='hero-content'>
        <h2>Building Digital Experience That Inspire.</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions.
        </p>
        <div className='about-me'>
          <h4>About Me</h4>
          <div className='details'>
            <ul className='list-one'>
              <li>Name</li>
              <li>Date of Birth</li>
              <li>Qualification</li>
              <li>Email</li>
              <li>Mobile</li>
              <li>Loaction</li>
            </ul>
            <ul className='list-two'>
              <li>S. Esakkiraj</li>
              <li>10-06-2001</li>
              <li>B.Sc (Computer Science)</li>
              <li>esakkiraj783@gmail.com</li>
              <li>+91 8428864022</li>
              <li>Alagapappuram, Tenkasi</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='hero-img'>
        <div>
          <div className='top'>
          <div div className="tech-icon">
            <img src="./assets/react-img.png"  alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/nodejs-img.png"  alt="" />
          </div>
          </div>
          <img src="./assets/Me.jpg" className='me' alt="" />
          </div>
      

      <div>
        <div className='tech-icon'>
          <img src="./assets/html-img.png" alt="" />
        </div>
        <div className='tech-icon'>
          <img src="./assets/css-img.png" alt="" />
        </div>
        <div className='tech-icon'>
          <img src="./assets/js-img.png" alt="" />
        </div>
        
      </div>
      </div>

    </section>
  )
}

export default Hero