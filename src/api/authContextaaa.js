import React, { useState } from "react";
import { createContext, useContext } from "react";
import Login from "../userManager/Login";
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [authTokens, setAuthTokens] = useState(null);
  const setTokens = (data) => {
    if (data === "error") {
      console.log(data);
    }
    if (data === "logout") {
      setAuthTokens(null);
    }
    if (data !== null && data.username) {
      Login.postLogin(data);
      setAuthTokens(data);
      localStorage.setItem("tokens", JSON.stringify(data));
    }

    if (data !== null && data.user_nicename) {
      setAuthTokens(data);
      localStorage.setItem("tokens", JSON.stringify(data));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        setAuthTokens: setTokens,
      }}
    >
      {" "}
      {props.children}{" "}
    </AuthContext.Provider>
  );
}
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };

export function useAuth() {
  return useContext(AuthContext);
}
