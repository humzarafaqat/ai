import React from 'react'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Subscribe from './Components/Subscribe'
import Home from './Pages/Home'
import About from './Pages/About'
import Faq from './Pages/Faq'
import Services from './Pages/Services'
import Project from './Pages/Project'
import Team from './Pages/Team'
import Contact from './Pages/Contact'


import { HashRouter, Routes, Route , Link  } from 'react-router-dom';


const App = () => {
  return (


    <div>
     
    <HashRouter>
     <Header />
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/About" element={<About />} />
              <Route path="/Faq" element={<Faq />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Project" element={<Project />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Team" element={<Team />} />
          </Routes>
       <Subscribe />
      <Footer />
    </HashRouter>

    </div>
  )
}

export default App

