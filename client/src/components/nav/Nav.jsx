import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__inner">
          <div className="nav__left">
            <a href="#" className="nav__logo">
              Blogger
            </a>
          </div>
          <div className="nav__center">
            <ul className="nav__menu">
              <li className="nav__menu-item">Home</li>
              <li className="nav__menu-item">About</li>
              <li className="nav__menu-item">Contact</li>
              <li className="nav__menu-item">Write</li>
              <li className="nav__menu-item">Logout</li>
            </ul>
          </div>
          <div className="nav__right">
            <AccountCircleIcon className="nav__user" style={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
