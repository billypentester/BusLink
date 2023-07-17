import React from 'react'
// import { Link } from "react-router-dom";

function Sidebar() {
  return (
    
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/user/panel">
            <i className="mdi mdi-home menu-icon"></i>
            <span className="menu-title">Dashboard</span>        
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/panel/finder">
            <i className="mdi mdi-map-search menu-icon"></i>
            <span className="menu-title">Bus Finder</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/panel/reserve">
            <i className="mdi mdi-ticket menu-icon"></i>
            <span className="menu-title">Book a Ticket</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/panel/tickets">
            <i className="mdi mdi-ticket-account menu-icon"></i>
            <span className="menu-title">Your Tickets</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/panel/update">
            <i className="mdi mdi-update menu-icon"></i>
            <span className="menu-title">Update Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/panel/delete">
            <i className="mdi mdi-close menu-icon"></i>
            <span className="menu-title">Delete Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/panel/feadback">
            <i className="mdi mdi-forum menu-icon"></i>
            <span className="menu-title">Send Feadback</span>
          </a>
        </li>
      </ul>
    </nav>
    
  )
}

export default Sidebar