import React from "react"
import {Link } from "react-router-dom"
import "./../../components/react-sound/index.css"

const NavBar = props => (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link users" to="/">Users <span className="sr-only">(current)</span></Link>
      </li>
     
      
    </ul>
  </div>
</nav>


);

export default NavBar;