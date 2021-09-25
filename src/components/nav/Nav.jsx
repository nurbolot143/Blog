import React from "react";

function Nav() {
  return (
    <div className="nav">
      <a href="#" className="logo">
        Blogger
      </a>
      <ul className="nav__list">
        <li className="nav__item">Home</li>
        <li className="nav__item">About</li>
        <li className="nav__item">Contact</li>
        <li className="nav__item">Write</li>
        <li className="nav__item">Logout</li>
      </ul>
      <a href="#">
        <img src="" alt="" />
      </a>
    </div>
  );
}

export default Nav;
