import React, {useState} from "react";
import {createContext, useContext} from "react";
import axios from "axios";

const wooConfig = require("./wooConfig");
const WooCommerceAPI = require("woocommerce-api");

const WooCommerce = new WooCommerceAPI({
  url: wooConfig.siteUrl,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  wpAPI: true,
  version: "wc/v3",
});

const targetUrl = "https://grassrootemarket.com/wp-json/";
const urlRegister = "wp/v2/users/register";
const urlJWT = "jwt-auth/v1/token";
const userURI = targetUrl + "wp/v2/users/me";

const login = async (user) => {
  var userName = user.name; //this is the nice_name
  var password = user.password;
  var token,
    displayName,
    niceName,
    email = null;

  return await axios
    .post("https://grassrootemarket.com/wp-json/jwt-auth/v1/token", {
      username: userName,
      password: password,
    })
    .then((result) => {
      if (result.status === 200) {
        token = result.data.token;
        displayName = result.data.user_display_name;
        niceName = result.data.user_nicename;
        email = result.data.user_email;
        var filledFields = null;
        return fillCustomer(email).then((res) => {
          if (res) {
            filledFields = {
              ...res,
              name: displayName,
              email: email,
              token: token,
            };
          }
          return filledFields;
        });
      } else {
        alert("error");
      }
    })
    .catch((e) => {
      alert("error");
    });
};

const fillCustomer = async (email) => {
  return await WooCommerce.getAsync(`customers?email=${email}`)
    .then((response) => {
      if (response) {
        if (response.body) {
          const res = JSON.parse(response.body);
          const user = res[0];
          var thisUser = {
            userId: user.id,
            company: user.billing.company,
            first_name: user.billing.first_name,
            lastName: user.billing.last_name,
            address: user.billing.address_1,
            address2: user.billing.address_2,
            city: user.billing.city,
            state: user.billing.state,
            cp: user.billing.postcode,
            country: user.billing.country,
            phone: user.billing.phone,
          };
          return thisUser;
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const createCustomer = (newCustomer) => {
  if (!this.state.email) {
    const data = {
      user_display_name: newCustomer.username,
      user_email: newCustomer.email,
    };
    this.receiveLogin(data);
  }
  this.getCustomerId(newCustomer);
};

async function updateAccount(id, updatedUser, updatedShipping) {
  // First will check if user values must be modified : name /mail
  // Check
  console.log(id);
  console.log(updatedUser);
  console.log(updatedShipping);

  if (updatedUser) {
    await axios
      .post(`https://grassrootemarket.com/wp-json/wp/v2/users/${id}`, {
        username: updatedUser.userName,
        mail: updatedUser.email,
      })
      .then((result) => {
        if (result.status === 200) {
          console.log(result);
        } else {
          alert("error");
        }
      })
      .catch((e) => {
        //  setIsError(true);
      });
  }

  if (updatedShipping) {
    await WooCommerce.putAsync(`customers/${id}`, updatedShipping)
      .then((response) => {
        const customer = JSON.parse(response.body);
        console.log(customer);
      })
      .catch((error) => {});
  }
}

async function updateCustomer(id, newCustomer) {
  console.log(id);
  console.log(newCustomer);
  await WooCommerce.putAsync(`customers/${id}`, newCustomer)
    .then((response) => {
      const customer = JSON.parse(response.body);
      console.log(customer);
    })
    .catch((error) => {});
}

const getCustomerId = async (newCustomer) => {
  await WooCommerce.getAsync(`customers?email=${newCustomer.email}`)
    .then((response) => {
      if (response) {
        if (response.body) {
          const user = JSON.parse(response.body);
          const userId = user[0].id;
          this.setState(() => {
            return {
              ...{
                userId: userId,
              },
            };
          });
          this.updateCustomer(userId, newCustomer);
        }
      }
    })
    .catch((error) => {});
};

const createOrder = async (ready, userOrder) => {
  this.fillOrder();
  if (ready) {
    await WooCommerce.postAsync("orders", userOrder)
      .then((response) => {})
      .catch((error) => {});
  }
};

const receiveLogin = (data) => {
  console.log(data);
  this.setState(() => {
    return {
      ...{
        user: data.user_display_name,
        email: data.user_email,
      },
    };
  });
  this.fillCustomer(data.user_email);
  // Also must to retrieve from wooApi the rest of information
  // about the logged user and populate its state
};

const receiveLogout = (data) => {
  this.setState(() => {
    return {
      ...{
        user: null,
        order: null,
        name: null,
        lastName: null,
        email: null,
        address: null,
        address2: null,
        city: null,
        state: null,
        cp: null,
        country: null,
        phone: null,
        cart: null,
        cartSubTotal: null,
        cartTax: null,
        total: null,
      },
    };
  });
  // Also must to retrieve from wooApi the rest of information
  // about the logged user and populate its state
};

const receiveSignup = (data) => {
  const user = data.user;
  const ship = data.shipping;
  this.setState(() => {
    return {
      ...{
        name: user.user_display_name,
        email: user.user_email,
        phone: ship.phone,
        address: ship.street,
        address2: ship.address2,
        city: ship.city,
        state: ship.province,
        cp: ship.postal,
        country: ship.country,
      },
    };
  });
};

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

    await fetch(targetUrl + urlRegister, {
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
              //setAuthTokens("error");
            }
          }
        }
        return res.json();
      })
      .then(function(res) {
        // setAuthTokens(user);
        createCustomer(newCustomer);
        return user.token;
      });
  }
}

export default {login};
