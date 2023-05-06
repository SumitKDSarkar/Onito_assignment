import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul className="list">
          <li className="items"><Link to="/" >Registration Form</Link></li>
          <li className="items"><Link to="/table" >User Data</Link></li>
         
        </ul>
      <button className="btn">BTN</button>
    </nav>
  )
}