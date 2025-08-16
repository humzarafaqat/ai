import React from 'react'
import { Link  } from 'react-router-dom';

const Header = () => {
  return (
     <div className="container-fluid sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <Link  to="https://humzarafaqat.github.io/ai/" className="navbar-brand">
                    <h1 className="text-white">AI<span className="text-dark">.</span>Tech</h1>
                </Link>
                <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link  to="/" className="nav-item nav-link active">Home</Link>
                        <Link  to="/About" className="nav-item nav-link">About</Link>
                        <Link  to="/Services" className="nav-item nav-link">Services</Link>
                        <Link  to="/Project" className="nav-item nav-link">Projects</Link>
                        <Link  to="/Team" className="nav-item nav-link">Our Team</Link>
                        <Link  to="/Faq" className="nav-item nav-link">Faqs</Link>
                        <Link  to="/Contact" className="nav-item nav-link">Contact Us</Link>
              

                    </div>
                   
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header
