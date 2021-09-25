import React from "react";

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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
              alt="user"
              className="nav__user"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
