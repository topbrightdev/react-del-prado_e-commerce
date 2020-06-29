import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {Card, Form, Input, Error} from "../components/AuthForm";
import Button from "@material-ui/core/Button";
import {useAuth} from "../context/authContext";
import {WooConsumer, useWoo} from "../context/wooContext";

import "../style.css";

const url = "https://grassrootemarket.com/wp-json/";
const urlRegister = "wp/v2/users/register";

function Signup(props) {
  const [isCreated, setCreated] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [password, setUserPassword] = useState("");
  const [password2, setUserPassword2] = useState("");

  const [phone, setPhone] = useState("");
  const [realname, setRealname] = useState("");
  const [surname, setSurname] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [street2, setStreet2] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const {setAuthTokens} = useAuth();
  const {createCustomer} = useWoo();

  var referer = "/";
  if (props.location.state) {
    if (props.location.state.referer) {
      referer = props.location.state.referer;
    } else {
      referer = "/";
    }
  } else {
    referer = "/";
  }

  var user = {
    username: userName,
    email: userMail,
    password: password,
  };

  const newCustomer = {
    email: userMail,
    first_name: realname,
    last_name: surname,
    username: userName,
    billing: {
      first_name: realname,
      last_name: surname,
      company: company,
      address_1: street,
      address_2: street2,
      city: city,
      state: province,
      postcode: postal,
      country: "Spain",
      email: userMail,
      phone: phone,
    },
    shipping: {
      first_name: realname,
      last_name: surname,
      company: company,
      address: street,
      address2: street2,
      city: city,
      state: province,
      cp: postal,
      country: "Spain",
    },
  };

  //var data = [user, shipping];

  async function createUser() {
    const user = JSON.stringify({
      username: userName,
      email: userMail,
      password: password,
    });

    await fetch(url + urlRegister, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    })
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      })
      .then(function(res) {
        if (res) {
          if (res.status) {
            if (res.status == "200") {
              setCreated(true);
            } else {
              alert("error");
              setIsError(true);
              setAuthTokens("error");
            }
          }
        }
        return res.json();
      })
      .then(function(res) {
        setAuthTokens(user);
        createCustomer(newCustomer);
        return user.token;
      });
  }

  if (isCreated) {
    return <Redirect to={referer} />;
  }

  return (
    <div className="signup-canvas ">
      <WooConsumer>
        {(value) => {
          return (
            <Card className="card-signup">
              <Form className="Form">
                <h6 className="signup-header">User Account Fields</h6>
                <Input
                  className="Input signup-account"
                  type="name"
                  placeholder="user name"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                <Input
                  className="Input signup-account"
                  type="email"
                  placeholder="email"
                  onChange={(e) => {
                    setUserMail(e.target.value);
                  }}
                />
                <Input
                  className="Input signup-account"
                  type="password"
                  placeholder="password"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
                <Input
                  className="Input signup-account"
                  type="password"
                  placeholder="password again"
                  onChange={(e) => {
                    setUserPassword2(e.target.value);
                  }}
                />

                <div className="signup-shipping">
                  <h6 className="signup-header">Shipping Fields</h6>

                  <div className="row-signup">
                    <Input
                      className="Input signup-element"
                      type="text"
                      placeholder="name"
                      onChange={(e) => {
                        setRealname(e.target.value);
                      }}
                    />
                    <Input
                      className="Input signup-element"
                      type="text"
                      placeholder="surname"
                      onChange={(e) => {
                        setSurname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row-signup">
                    <Input
                      className="Input signup-element"
                      type="text"
                      placeholder="company"
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    />

                    <Input
                      className="Input signup-element"
                      type="text"
                      placeholder="postal code"
                      onChange={(e) => {
                        setPostal(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row-signup">
                    <Input
                      className="Input signup-element"
                      type="text"
                      placeholder="street"
                      onChange={(e) => {
                        setStreet(e.target.value);
                      }}
                    />
                    <Input
                      className="Input signup-element"
                      type="text"
                      placeholder="street2"
                      onChange={(e) => {
                        setStreet2(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row-signup">
                    <Input
                      className="Input signup-element"
                      type="text"
                      placeholder="city"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                    <Input
                      className="Input signup-element"
                      type="text"
                      placeholder="province"
                      onChange={(e) => {
                        setProvince(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row-signup-phone">
                    <Input
                      className="Input signup-element"
                      type="text"
                      placeholder="phone number"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <Button
                  className="button-signup"
                  onClick={() => {
                    createUser();
                  }}
                >
                  Sign Up
                </Button>
              </Form>
              <Link className="links" to="/login">
                Already have an account?
              </Link>
            </Card>
          );
        }}
      </WooConsumer>
    </div>
  );
}

export default Signup;
