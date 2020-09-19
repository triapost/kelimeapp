import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../service/kelimeApiService";
const AuthRoute = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const { rest, component: Component } = props;

  useEffect(() => {
    checkToken()
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setIsAuth(true);
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (!loading) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuth ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    );
  } else {
    return <p>loading</p>;
  }
};

export default AuthRoute;
