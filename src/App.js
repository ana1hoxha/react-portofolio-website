import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portofolio from './components/portofolio/Portofolio'
import Testimonials from './components/testimonials/Testimonials'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
  {/* keto jane seksionet qe dua te perfshi ne website */}
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portofolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App