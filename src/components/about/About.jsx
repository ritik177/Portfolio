import React from 'react'
import "./about.css";
import ME from '../../assets/me-about.jpg';
import {FaAward}  from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <h2>Get To Know</h2>

      <div className="container about_container">
        <div className ="about_me">
         <img src={ME} alt="About_Image"/>
        </div>

        <div className="about_content">
          <div className="about_cards">

          <a href="#experience"><article>
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article></a>
            

            <a href="#certificate"><article>
              <FiUsers  className="about_icon"/>
              <h5>Certificate</h5>
              {/* <small>5+</small> */}
            </article></a>
            
            <a href="#portfolio"><article>
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article></a>
            
          </div>

          <p>Hi! My name is Ritik Patel. I'm a very dedicated and hardworking person who always thrives working on end-to-end products. With my experience and knowledge, I learn many skills and make many successful projects. I enjoyed every step of creation, learning, development, and collaboration.
          </p>

   <div className="about_btn">
    <a href="#educations" className="btn btn-primary">About Me</a> 
    <a href="#contact" className="btn btn-primary">Hire Me</a></div>
    
    </div>
        </div>
      
    </section>
  )
}

export default About