import React, { useState } from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Kelime Savaşı</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Giriniz"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Şifre</label>
              <input
                type="email"
                className="form-control"
                placeholder="Şifrenii Giriniz"
                name="email"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
