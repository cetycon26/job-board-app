import React from "react";
import "./NavBar.css";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <main>
        <NavBar />
        {children}
      </main>
    </>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Clarity
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/jobs/">Jobs</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        {/* <a href="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </a> */}
        <a href="/account" className="user-icon">
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  );
}
