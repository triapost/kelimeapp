import React, { useState } from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Kelime Savaşı</div>
        <div className="card-body text-center">
          <form>
            <div className="form-group">
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Giriniz"
                name="email"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
