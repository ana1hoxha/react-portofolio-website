import React from 'react';
import './nav.css'
import {AiOutlineHome, AiOutlineUser,AiOutlineBook, AiOutlineContacts,AiOutlineCustomerService} from 'react-icons/ai'
const Nav = () => {
    return (
    <nav>
      <a href='/'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><AiOutlineBook/></a>
      <a href="#services"><AiOutlineCustomerService/></a>
      <a href="#contact"><AiOutlineContacts/></a>
    </nav>
    
        )
}

export default Nav