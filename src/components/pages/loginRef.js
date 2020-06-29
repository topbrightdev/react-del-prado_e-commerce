import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import {animateScroll} from "react-scroll";
import {Card, Logo, Form, Input, Error} from "../components/AuthForm";
import Button from "@material-ui/core/Button";

import {useAuth} from "../context/authContext";
import {useWoo} from "../context/wooContext";

import "../style.css";

const targetUrl = "https://grassrootemarket.com/wp-json/";
const urlRegister = "wp/v2/users/register";
const urlJWT = "jwt-auth/v1/token";
const userURI = targetUrl + "wp/v2/users/me";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {setAuthTokens} = useAuth();
  const {receiveLogin} = useWoo();
  var referer = null;
  var user = {
    name: userName,
    password: password,
  };

  if (props.location.state) {
    if (props.location.state.referer) {
      referer = props.location.state.referer;
    } else {
      referer = "/";
    }
  } else {
    referer = "/";
  }

  animateScroll.scrollToBottom({
    containerId: "ContainerElementID",
  });

  async function postLogin() {
    console.log(userName);
    await axios
      .post("https://grassrootemarket.com/wp-json/jwt-auth/v1/token", {
        username: userName,
        password: password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          receiveLogin(result.data);
          console.log(result.data);
          setLoggedIn(true);
        } else {
          alert("error");
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-canvas ">
      <div className=""> </div>{" "}
      <Card className="card-login farm-19-login">
        <Form className="Form">
          <Input
            className="Input"
            type="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="username"
          />
          <Input
            className="Input"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <Button
            className="Button"
            onClick={() => {
              postLogin();
            }}
          >
            Sign In{" "}
          </Button>{" "}
        </Form>{" "}
        <Link className="links" to="/signup">
          Don 't have an account?{" "}
        </Link>{" "}
        {isError && (
          <Error className="Error">
            The username or password provided were incorrect!
          </Error>
        )}{" "}
      </Card>{" "}
    </div>
  );
}

export default Login;
