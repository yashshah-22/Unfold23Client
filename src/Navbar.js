import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <div className="container">
        <Link to="/wallet" className="navbar-brand text-white fs-3" href="/">
          My Wallet
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ml-auto">
              <a className="nav-link text-white" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link text-white" href="/kyc">
                KYC Registration
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link text-white" href="/">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
