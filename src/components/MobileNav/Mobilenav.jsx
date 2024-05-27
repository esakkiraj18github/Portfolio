import React from 'react'
import './Mobilenav.css'

export const Mobilenav = ({isOpen, toggleMenu}) => {

    const redirectToResume = () => {
        window.open('https://drive.google.com/file/d/1lY1Tj6xJnuUTTKr9388xCpgHGaT52lAO/view?usp=drivesdk');
      };

  return (
    <>
    <div className={`mobile-menu  ${isOpen ? "active":""}`}  onClick={toggleMenu}>

        <div className='mobile-menu-container'>
            <h1 className='logo' style={{color:"white"}}> ESAKKIRAJ S</h1>

            <ul>
                <li>
                    <a className='menu-item' href='#hero'>Home</a>
                </li>

                <li>
                    <a className='menu-item' href='#skills'>Skills</a>
                </li>

                <li>
                    <a className='menu-item' href='#projects'>Projects</a>
                </li>

                <li>
                    <a className='menu-item' href='#contact'>Contact Me</a>
                </li>

                <button className='contact-btn' onClick={redirectToResume}>
                    My Cv
                </button> 

            </ul>
        </div>
    </div>
    </>
  )
}
