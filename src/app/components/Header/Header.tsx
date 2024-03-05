"use client";
import "./Header.scss";
import { useState } from "react";
export default function Header() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function handleClick() {
    setHamburgerActive((hamburgerActive) => !hamburgerActive);
  }
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img
            src="/images/logo.jpg"
            className="company-logo"
            width="96"
            height="72"
          />
        </div>
        <div className={`navigation ${hamburgerActive ? "active" : ""}`}>
          <div
            className="nav-list"
            onClick={handleClick}
          >
            <a href="#">Crypto Taxes</a>
            <a href="#">Free Tools</a>
            <a href="#">Resource Center</a>
          </div>
          <button>Get Started</button>
        </div>
        <div
          className={`hamburger ${hamburgerActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}
