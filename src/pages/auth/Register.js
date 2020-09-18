import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import toast from "izitoast";
import { register } from "../../service/kelimeApiService";

const Register = () => {
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = values;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      toast.warning({
        title: "HATA",
        message: "Zorunlu Alan",
        position: "topRight",
      });
    } else if (password !== confirmPassword) {
      toast.warning({
        title: "HATA",
        message: "Şifre Eşleşmiyor",
        position: "topRight",
      });
    }
    register(name, email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token.jwt);
        history.push("/");
      })
      .catch((err) => console.log("api", err));
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">Kayıt Ol</h3>
            </div>
            <div className="card-body">
              <form
                className="form"
                noValidate
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="form-group">
                  <label className="small mb-1">Kullanıcı Adı</label>
                  <input
                    className="form-control py-4"
                    type="name"
                    placeholder="Kullanıcı Adınız."
                    value={name}
                    name="name"
                    onChange={(e) => handleChangeInput(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1">Mail Adresi</label>
                  <input
                    className="form-control py-4"
                    type="email"
                    placeholder="E-mail Adresiniz."
                    value={email}
                    name="email"
                    onChange={(e) => handleChangeInput(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1">Şifre</label>
                  <input
                    className="form-control py-4"
                    type="password"
                    placeholder="Şifreniz."
                    value={password}
                    name="password"
                    onChange={(e) => handleChangeInput(e)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="small mb-1">Şifreyi Giriniz</label>
                  <input
                    className="form-control py-4"
                    type="password"
                    placeholder="Şifreniz."
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={(e) => handleChangeInput(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary">Kayıt Ol</button>
                </div>
                <div className="form-group">
                  Hesabınız Var Mı?
                  <Link to="/login"> Giriş Yapın</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
