import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
  return (
    <nav>
        <Link to="/mercury">mercury</Link>
        <Link to="/earth">earth</Link>
        <Link to="/venus">venus</Link>
    </nav>
  )
}
