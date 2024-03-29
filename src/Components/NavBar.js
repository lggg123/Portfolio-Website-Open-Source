import React from 'react';
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';

function NavBar() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="https://opensea.io/georgealugo">NFTs</a>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" exact activeClassName="active">
              Learn to Code
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>

        <footer className="footer">
          <p>@ {currentYear} Copyright</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
