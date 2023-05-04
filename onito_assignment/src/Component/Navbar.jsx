import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul className="list">
          <li className="items"><Link to="/" >Form</Link></li>
          <li className="items"><Link to="/table" >Table</Link></li>
         
        </ul>
      <button className="btn">BTN</button>
    </nav>
  )
}