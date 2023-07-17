import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse p-2 mx-3" id="navbarLeftAlignExample">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#contact-form">Contact</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/register">Register</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar