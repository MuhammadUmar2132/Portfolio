import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
// import ProjectForm from './components/ProjectForm'
import Contact from './components/Contact'
import Signup from './Signup/page'
import Login from './Login/page'
// import AuthModal from './components/AuthModal'

function page() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Services/>
   <Projects/>
   {/* <ProjectForm/> */}
   <Contact/>
   {/* <AuthModal/> */}
    {/* <Signup/>
    <Login/> */}

   </>
  )
}

export default page