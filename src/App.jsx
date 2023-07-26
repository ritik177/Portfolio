import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Certificate from "./components/certificates/Certificate";
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Education from './components/educations/Education';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';




const App  = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About />
    <Experience/>
    <Certificate/>
    <Services/>
    <Portfolio/>
    {/* <Testimonials/> */}
    <Education/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App 