import React from 'react'
import './footer.css';
import {BsFacebook, BsTelegram} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Designed and Developed by Ritik Patel</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#educations">Educations</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#certificate">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/ritik-patel-3931b5258/"><BsLinkedin/></a>
        <a href="https://github.com/ritik177"><FaGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100057104791299"><BsFacebook/></a>
        <a href="https://instagram.com/ritikpatel881?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram/></a>
        <a href="https://web.telegram.org/k/"><BsTelegram/></a>
      </div>
 
     <div className="footer_copyright">
      <small>
        &copy;2023Copy rights. All rights reserved.</small>
     </div>
    </footer>
  )
}

export default Footer