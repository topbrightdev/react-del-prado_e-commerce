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

/**
 * Signup Flow
 *  1-Create user : Creates an authenticated Wordpress Account with password
 *  2-Create user in woocommerce -> createCustomer(newcustomer)
 *  3-receiveLogin(data{user,email}) -> fillCustomer(mail)
 *  4-getCustomerId(newCustomer) -> updateCustomer(userId, newCustomer)
 */

const login = async (user) => {
  var username = user.username; //this is the nice_name
  var password = user.password;
  var token,
    displayName,
    niceName,
    email = null;
  return await axios
    // .post("https://grassrootemarket.com/wp-json/jwt-auth/v1/token", {
    .post(process.env.REACT_APP_WORDPRESS + process.env.REACT_APP_JWT, {
      username: username,
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
              username: displayName,
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
      alert(e.response.data.message);
    });
};

//var data = [user, shipping];

const signup = async (userData) => {
  const {
    username,
    email,
    password,
    address_1,
    city,
    country,
    first_name,
    last_name,
    phone,
    postcode,
    state,
  } = userData;

  var user = {
    username: username,
    email: email,
    password: password,
  };

  const newCustomer = {
    email: email,
    first_name: first_name,
    last_name: last_name,
    username: username,
    billing: {
      first_name: first_name,
      last_name: last_name,
      company: "company",
      address_1: address_1,
      address_2: "",
      city: city,
      state: state,
      postcode: postcode,
      country: "Spain",
      email: email,
      phone: phone,
    },
    shipping: {
      first_name: first_name,
      last_name: last_name,
      company: "",
      address: address_1,
      address2: "",
      city: city,
      state: state,
      cp: postcode,
      country: country,
    },
  };
  const body = JSON.stringify({
    username: username,
    email: email,
    password: password,
  });

  var created = false;

  // After filling the vlaue fields,the function will proceed to create
  // first the wordpress user.
  //return await fetch(targetUrl + urlRegister, {

  return await fetch(process.env.REACT_APP_WORDPRESS + process.env.REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
    .catch((error) => {
      console.log(error.response.body);
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(res) {
      if (res.message) {
        alert(res.message);
        if (res.code === 200) {
          return createCustomer(newCustomer, email).then((res) => {
            created = true;
            return userData;
          });
        } else return null;
      }
    });
};

const createCustomer = (newCustomer, email) => {
  if (!email) {
    const data = {
      user_display_name: newCustomer.username,
      user_email: newCustomer.email,
    };
    receiveLogin(data).then((res) => {
      return res;
    });
  }
  return getCustomerId(newCustomer);
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
            last_name: user.billing.last_name,
            address_1: user.billing.address_1,
            address_2: user.billing.address_2,
            city: user.billing.city,
            state: user.billing.state,
            postcode: user.billing.postcode,
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

const updateAccount = async (userData, userOldData) => {
  // First will check if user values must be modified : name /mail
  // Check
  const {
    id,
    username,
    email,
    password,
    address_1,
    city,
    country,
    first_name,
    last_name,
    phone,
    postcode,
    state,
  } = userData;

  var user = null;
  if (username !== userOldData.username || email !== userOldData.email) {
    user = {
      username: username,
      email: email,
    };
  } else {
    var customer = null;
    if (userOldData) {
      customer = {
        email: email,
        first_name: first_name,
        last_name: last_name,
        username: username,
        billing: {
          first_name: first_name,
          last_name: last_name,
          company: "company",
          address_1: address_1,
          address_2: "",
          city: city,
          state: state,
          postcode: postcode,
          country: "Spain",
          email: email,
          phone: phone,
        },
        shipping: {
          first_name: first_name,
          last_name: last_name,
          company: "",
          address: address_1,
          address2: "",
          city: city,
          state: state,
          cp: postcode,
          country: country,
        },
      };
    }
  }

  const body = JSON.stringify({
    username: username,
    email: email,
    password: password,
  });

  if (user) {
    return await axios
      .post(process.env.REACT_APP_WORDPRESS`/wp/v2/users/${id}`, {
        username: user.username,
        mail: user.email,
      })
      .then((result) => {
        if (result.status === 200) {
          var thisUser = {
            userId: user.id,
            username: user.username,
            mail: user.email,
            company: userOldData.company,
            first_name: userOldData.first_name,
            last_name: userOldData.last_name,
            address_1: userOldData.address_1,
            address_2: userOldData.address_2,
            city: userOldData.city,
            state: userOldData.state,
            postcode: userOldData.postcode,
            country: userOldData.country,
            phone: userOldData.phone,
          };

          return thisUser;
        } else {
          alert("error");
        }
      })
      .catch((e) => {
        console.log(e.response.body.message);
        alert(e.response.body.message);
      });
  }

  if (customer) {
    return await WooCommerce.putAsync(`customers/${id}`, customer)
      .then((response) => {
        if (response.body) {
          const res = JSON.parse(response.body);

          var thisUser = {
            username: userOldData.username,
            email: userOldData.email,
            userId: res.id,
            company: res.billing.company,
            first_name: res.billing.first_name,
            last_name: res.billing.last_name,
            address_1: res.billing.address_1,
            address_2: res.billing.address_2,
            city: res.billing.city,
            state: res.billing.state,
            postcode: res.billing.postcode,
            country: res.billing.country,
            phone: res.billing.phone,
          };
          return thisUser;
        }
      })
      .catch((error) => {});
  }
};

const updateCustomer = async (id, newCustomer) => {
  return await WooCommerce.putAsync(`customers/${id}`, newCustomer)
    .then((response) => {
      const customer = JSON.parse(response.body);
      return customer;
    })
    .catch((error) => {});
};

const getCustomerId = async (newCustomer) => {
  return await WooCommerce.getAsync(`customers?email=${newCustomer.email}`)
    .then((response) => {
      if (response) {
        if (response.body) {
          const user = JSON.parse(response.body);
          const userId = user[0].id;
          return updateCustomer(userId, newCustomer);
        }
      }
    })
    .catch((error) => {
      return null;
    });
};

const order = async (orderData) => {
  const orderReady = fillOrder(orderData);
  if (orderReady) {
    return await WooCommerce.postAsync("orders", orderReady).then((res) => {
      if (res.body) {
        const r = JSON.parse(res.body);
        return r;
      }
    });
  }
};

const fillOrder = (orderData) => {
  var ready = false;
  var orderReady = {};
  const {
    email,
    address_1,
    city,
    country,
    first_name,
    last_name,
    phone,
    postcode,
    state,
    cart,
    total,
  } = orderData;
  var theCart = [];
  cart.map((i) => {
    const product = {
      product_id: i.id,
      quantity: i.qty,
    };
    theCart.push(product);
  });

  if (
    last_name &&
    first_name &&
    email &&
    address_1 &&
    city &&
    state &&
    postcode &&
    country &&
    phone &&
    cart &&
    total
  ) {
    orderReady = {
      payment_method: "bacs",
      payment_method_title: "Credit Card Payment",
      set_paid: "true",
      billing: {
        first_name: `${first_name}`,
        last_name: `${last_name}`,
        address_1: `${address_1}`,
        address_2: ``,
        city: `${city}`,
        state: ` ${state}`,
        postcode: `${postcode}`,
        country: `${country}`,
        email: `${email}`,
        phone: `${phone}`,
      },
      shipping: {
        first_name: `${first_name}`,
        last_name: `${last_name}`,
        address_1: `${address_1}`,
        address_2: ``,
        city: `${city}`,
        state: `${state}`,
        postcode: `${postcode}`,
        country: `${country}`,
        email: `${email}`,
      },
      line_items: theCart,
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: `${total}`,
        },
      ],
    };
  }
  return orderReady;
};

const receiveLogin = (data) => {
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

const logout = (data) => {
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

export default { login, signup, updateAccount, order };
