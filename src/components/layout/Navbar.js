import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> DevNet
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/profiles'>
            <i className='fas fa-code'></i> Developers
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <i className='fas fa-code'></i> Register
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <i className='fas fa-code'></i> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
