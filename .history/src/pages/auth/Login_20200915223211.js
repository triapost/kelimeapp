import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const 
  return (
    <div className="container">
      <div className="card mt-5 ">
        <div className="card-header text-center">Kelime Savaşı</div>
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
                type="password"
                className="form-control"
                placeholder="Şifrenizi Giriniz"
                name="password"
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success">Giriş</button>
            </div>{" "}
            <div className="form-group">
              Henüz Üye Değilmisiniz?
              <Link to="/register">Üye olmak için TIKLAYIN.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
