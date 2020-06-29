const wooConfig = require("./wooConfig");
const WooCommerceAPI = require("woocommerce-api");

const WooCommerce = new WooCommerceAPI({
  url: wooConfig.siteUrl,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  wpAPI: true,
  version: "wc/v3",
});

const fillOrder = (user) => {
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
  } = user;

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
    const userOrder = {
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
    var ready = true;
  }
};

const test = () => {
  return WooCommerce.getAsync(
    `products/categories?hide_empty=false&per_page=100`
  ).then((res) => {
    var data = res.toJSON().body;
    Object.json1 = JSON.parse(data);
    var items = Object.json1;
    return items;
  });
};

const createOrder = async (ready, userOrder) => {
  this.fillOrder();
  if (ready) {
    await WooCommerce.postAsync("orders", userOrder)
      .then((response) => {})
      .catch((error) => {});
  }
};

const fillCustomer = async (email) => {
  await WooCommerce.getAsync(`customers?email=${email}`)
    .then((response) => {
      if (response) {
        if (response.body) {
          const res = JSON.parse(response.body);
          const user = res[0];
          console.log(user);
          const theUser = {
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
          };
          return theUser;
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const receiveReceipt = (data) => {
  this.setState(() => {
    return {
      ...{
        receipt: data,
      },
    };
  });
  this.createOrder();
};

const receiveCart = (data) => {
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

export default {
  test,
};
