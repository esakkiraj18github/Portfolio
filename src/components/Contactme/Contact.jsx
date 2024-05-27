import React from 'react'
import './Contact.css'
import ContactInfoCard from './Contactinfocard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <section className="contact-container" id='contact'>
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div div style={{flex:1}}>
              <a href="mailto:esakkiraj783@gmail.com">  
              <ContactInfoCard
                    iconUrl="./assets/email-icon.png"
                    text="esakkiraj783@gmail.com" 
                />
               </a> 
                <a href="https://github.com/esakkiraj18github">
                <ContactInfoCard
                    iconUrl="./assets/github-icon.png"
                    text="https://github.com/esakkiraj18github" 
                />
                </a>
            </div>
            <div style={{flex:1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default Contact 