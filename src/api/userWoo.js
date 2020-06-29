import React, {Component} from "react";
import {createContext, useContext} from "react";
import axios from "axios";

const WooContext = React.createContext();

const wooConfig = require("./wooConfig");
const WooCommerceAPI = require("woocommerce-api");

const test = () => {
  const userWoo = "afterTest";
  return userWoo;
};

const orderModel = {
  payment_method: "bacs",
  payment_method_title: "Direct Bank Transfer",
  set_paid: "true",
  billing: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US",
    email: "john.doe@example.com",
    phone: "(555) 555-5555",
  },
  shipping: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US",
  },
  line_items: [
    {
      product_id: "93",
      quantity: "2",
    },
    {
      product_id: "22",
      variation_id: "23",
      quantity: "1",
    },
  ],
  shipping_lines: [
    {
      method_id: "flat_rate",
      method_title: "Flat Rate",
      total: "10",
    },
  ],
};

var userShared = {
  name: null,
  lastname: null,
  email: null,
  address: null,
  city: null,
  state: null,
  cp: null,
  country: null,
  phone: null,
};

var userCart = {
  cart: [
    {
      product_id: null,
      quantity: null,
    },
  ],
  cartSubTotal: null,
  cartTax: null,
  cartTotal: null,
};

var cartItem = {
  product_id: null,
  quantity: null,
};

var userOrder = {};

var ready = null;

const WooCommerce = new WooCommerceAPI({
  url: "https://grassrootemarket.com",
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  wpAPI: true,
  version: "wc/v3",
});

class WooProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userId: null,
      order: null,
      name: null,
      company: null,
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
    };
    this.getCustomerId = this.getCustomerId.bind(this);
    this.fillCustomer = this.fillCustomer.bind(this);
  }

  fillOrder = () => {
    const {
      name,
      lastName,
      email,
      address,
      address2,
      city,
      state,
      cp,
      country,
      phone,
      cart,
      total,
    } = this.state;

    const myCart = JSON.stringify(cart);

    if (
      name &&
      lastName &&
      email &&
      address &&
      city &&
      state &&
      cp &&
      country &&
      phone &&
      myCart &&
      total
    ) {
      userOrder = {
        payment_method: "bacs",
        payment_method_title: "Credit Card Payment",
        set_paid: "true",
        billing: {
          first_name: `${name}`,
          last_name: `${lastName}`,
          address_1: `${address}`,
          address_2: `${address2}`,
          city: `${city}`,
          state: ` ${state}`,
          postcode: `${cp}`,
          country: `${country}`,
          email: `${email}`,
          phone: `${phone}`,
        },
        shipping: {
          first_name: `${name}`,
          last_name: `${lastName}`,
          address_1: `${address}`,
          address_2: `${address2}`,
          city: `${city}`,
          state: `${state}`,
          postcode: `${cp}`,
          country: `${country}`,
          email: `${email}`,
        },
        line_items: cart,
        shipping_lines: [
          {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: `${total}`,
          },
        ],
      };
      ready = true;
    }
  };

  componentDidMount() {
    const cart = [
      {
        product_id: "93",
        quantity: "2",
      },
      {
        product_id: "22",
        variation_id: "23",
        quantity: "1",
      },
    ];

    var myJSON = JSON.stringify(cart);
  }

  createCustomer = (newCustomer) => {
    if (!this.state.email) {
      const data = {
        user_display_name: newCustomer.username,
        user_email: newCustomer.email,
      };
      this.receiveLogin(data);
    }
    this.getCustomerId(newCustomer);
  };

  async updateAccount(id, updatedUser, updatedShipping) {
    // First will check if user values must be modified : name /mail
    // Check

    if (updatedUser) {
      await axios
        .post(`https://grassrootemarket.com/wp-json/wp/v2/users/${id}`, {
          username: updatedUser.userName,
          mail: updatedUser.email,
        })
        .then((result) => {
          if (result.status === 200) {
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
        })
        .catch((error) => {});
    }
  }

  async updateCustomer(id, newCustomer) {
    await WooCommerce.putAsync(`customers/${id}`, newCustomer)
      .then((response) => {
        const customer = JSON.parse(response.body);
      })
      .catch((error) => {});
  }

  getCustomerId = async (newCustomer) => {
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

  createOrder = async () => {
    this.fillOrder();
    if (ready) {
      await WooCommerce.postAsync("orders", userOrder)
        .then((response) => {})
        .catch((error) => {});
    }
  };

  fillCustomer = async (email) => {
    await WooCommerce.getAsync(`customers?email=${email}`)
      .then((response) => {
        if (response) {
          if (response.body) {
            const res = JSON.parse(response.body);
            const user = res[0];
            this.setState(() => {
              return {
                ...{
                  userId: user.id,
                  company: user.billing.company,
                  name: user.billing.first_name,
                  lastName: user.billing.last_name,
                  address: user.billing.address_1,
                  address2: user.billing.address_2,
                  city: user.billing.city,
                  state: user.billing.state,
                  cp: user.billing.postcode,
                  country: user.billing.country,
                  phone: user.billing.phone,
                },
              };
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  receiveLogin = (data) => {
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

  receiveLogout = (data) => {
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

  receiveSignup = (data) => {
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

  receiveForm = (data) => {};

  receiveReceipt = (data) => {
    this.setState(() => {
      return {
        ...{
          receipt: data,
        },
      };
    });
    this.createOrder();
  };

  receiveCart = (data) => {
    var receivedCart = [];
    var total = null;
    if (data.cart) {
      if (!data.cart[0]) {
        //If I empty the cart should clean the state
        this.setState(() => {
          return {
            ...{
              cart: null,
              total: null,
            },
          };
        });
      } else {
        data.cart.map((i) => {
          var totalItem = i.price * i.count;
          total = total + totalItem;
          var receivedItem = {
            product_id: i.id,
            quantity: i.count,
          };
          receivedCart.push(receivedItem);
          this.setState(() => {
            return {
              ...{
                cart: receivedCart,
                total: total,
              },
            };
          });
        });
      }
    }
  };

  render() {
    return (
      <WooContext.Provider
        value={{
          ...this.state,
          userData: this.state,
          receiveLogin: this.receiveLogin,
          receiveLogout: this.receiveLogout,
          receiveSignup: this.receiveSignup,
          updateCustomer: this.updateCustomer,
          createCustomer: this.createCustomer,
          receiveForm: this.receiveForm,
          createOrder: this.createOrder,
          receiveCart: this.receiveCart,
          receiveReceipt: this.receiveReceipt,
        }}
      >
        {" "}
        {this.props.children}{" "}
      </WooContext.Provider>
    );
  }
}

const WooConsumer = WooContext.Consumer;
export {WooProvider, WooConsumer};

export function useWoo() {
  return useContext(WooContext);
}

export default WooContext;