import React from "react";

function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="register__wrapper">
          <h2 className="register__title">Register</h2>
          <form action="" className="register__form">
            <label className="register__form-label">
              Email
              <input
                type="email"
                name="email"
                className="register__form-input"
                placeholder="Your email"
                required
              />
            </label>
            <label className="register__form-label">
              Username
              <input
                type="name"
                name="name"
                className="register__form-input"
                placeholder="Your username"
                required
              />
            </label>
            <label className="register__form-label">
              Password
              <input
                type="password"
                name="password"
                className="register__form-input"
                placeholder="Your password"
                required
              />
            </label>

            <button className="register__form-btn">Register</button>
          </form>
          <button className="register__form-btn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
