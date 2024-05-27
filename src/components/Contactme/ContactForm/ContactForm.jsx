import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-me'>
          <div className='about'>
            <ul className='list-one'>
              <li>Name</li>
              <li>Email</li>
              <li>Phone</li>
              <li>Address</li>
            </ul>
            <ul className='list-two'>
              <li>Esakkiraj S</li>
              <li>esakkiraj783@gmail.com</li>
              <li>+91 8428864022</li>
              <li>12/43 school Street, Alagapappuram 627805, Tenkasi, Tamil Nadu, India</li>
            </ul>
            <div className='icon-list'>
            <ul className='social-icon'>
              <li><a href="https://wa.me/918428864022"><img src="./assets/whatsapp-icon.png" alt="WhatsApp" /></a></li>
              <li><a href="https://www.linkedin.com/in/esakkiraj-s-a784b9247"><img src="./assets/linkedin-icon.png"  /></a></li>
              <li><a href="https://www.instagram.com/virat_raja1873/"><img src="./assets/instagram-icon.png"  /></a></li>
              
            </ul>
            </div>
          </div>
          
          
        </div>
  )
}

export default ContactForm