import React, { useState } from 'react';
import './Navbar.css';
import { TbGridDots } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { Mobilenav } from '../MobileNav/Mobilenav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const redirectToResume = () => {
    window.open('https://drive.google.com/file/d/1lY1Tj6xJnuUTTKr9388xCpgHGaT52lAO/view?usp=drivesdk');
  };

  
  return (
    <>
      <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <h1 className='logo' style={{color: "white"}}> ESAKKIRAJ S</h1>

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

            <button className='contact-btn'  onClick={redirectToResume}>
             My Cv
            </button>
          </ul>

          <button className='menu-btn' onClick={toggleMenu}>
            {openMenu ? <IoMdClose style={{ fontSize: "1.8rem" }} /> : <TbGridDots style={{ fontSize: "1.8rem" }} />}
          </button>

        </div>
      </nav>
    </>

  );
};

export default Navbar;
