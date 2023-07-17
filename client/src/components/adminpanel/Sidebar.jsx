import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/admin/panel">
            <i className="mdi mdi-home menu-icon"></i>
            <span className="menu-title">Dashboard</span>        
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/panel/bus">
            <i className="mdi mdi-map-search menu-icon"></i>
            <span className="menu-title">Bus</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/panel/user">
            <i className="mdi mdi-ticket menu-icon"></i>
            <span className="menu-title">Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/panel/tickets">
            <i className="mdi mdi-ticket-account menu-icon"></i>
            <span className="menu-title">Tickets</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/panel/update">
            <i className="mdi mdi-update menu-icon"></i>
            <span className="menu-title">Update Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/panel/feadback">
            <i className="mdi mdi-forum menu-icon"></i>
            <span className="menu-title">Feadback</span>
          </Link>
        </li>
      </ul>
    </nav>
    
  )
}

export default Sidebar