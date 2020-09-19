import axios from "axios";

const BaseUrl = "http://127.0.0.1:8000/api";

export const login = (email, password) => {
  return axios.post(BaseUrl + "/auth/login", {
    email,
    password,
  });
};

export const register = (name, email, password) => {
  return axios.post(BaseUrl + "/auth/register", { name, email, password });
};

export const checkToken = () => {
  const token = localStorage.token;
  

  return axios.post(
    BaseUrl + "/auth/me",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
