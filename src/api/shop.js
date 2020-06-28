import React, {Component} from "react";
import {useContext} from "react";
import _products from "./data.json";
import {getAllCategories} from "../actions/indexO";

const wooConfig = require("./wooConfig");
const WooCommerceAPI = require("woocommerce-api");

const APP_API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_LIVE_STORE_URL
    : process.env.REACT_APP_LOCAL_STORE_URL;

const WooCommerce = new WooCommerceAPI({
  url: wooConfig.siteUrl,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  wpAPI: true,
  version: "wc/v3",
});

const ProductContext = React.createContext();
// Wordpress API
export const WP = `${APP_API_URL}/wp-json/wp/v2`;
// WooCommerce API
export const WC = `${APP_API_URL}/wp-json/wc/v3`;
// JWT API
export const AUTH = `${APP_API_URL}/wp-json/jwt-auth/v1`;
/* category: "vegetable"
description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
discount: 10
id: 49
name: "Cabbage"
new: false
pictures: Array(4)
0: "/assets/images/vegetables/pro/2.jpg"
1: "/assets/images/vegetables/pro/4.jpg"
2: "/assets/images/vegetables/pro/1.jpg"
3: "/assets/images/vegetables/pro/4.jpg"
length: 4
__proto__: Array(0)
price: 120
sale: false
salePrice: 240
shortDetails: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,"
stock: 2 */

const TIMEOUT = 9000;
var __products = null;

var pos = 1;
var isTreeLoaded = false;
var done = false;

var tree = {
  id: 19,
  name: "products",
  parent: "none",
  children: [],
};

var addresses = [
  {
    id: 19,
    level: 0,
    position: 0,
    name: "Product Categories",
  },
];

const getProducts = () => {
  return WooCommerce.getAsync(`products?per_page=30`)
    .then((res) => {
      return res.toJSON().body;
    })
    .then((json) => {
      var data = json;
      Object.json1 = JSON.parse(data);
      var items = Object.json1;
      var products = [];
      items.map(
        ({
          id,
          name,
          images,
          price,
          categories,
          description,
          stock_quantity,
          short_description,
          sale_price,
          on_sale,
          tags,
        }) => {
          var img;
          var newImages = [];
          images.map((data) => {
            img = data.src;
            newImages.push(img);
          });

          const newItem = {
            categories: categories,
            category: "vegetable",
            description: description,
            discount: "10",
            id: id,
            name: name,
            new: false,
            pictures: newImages,
            length: images.length,
            price: price,
            sale: on_sale,
            salePrice: sale_price,
            shortDetails: short_description,
            stock: stock_quantity,
            brand: tags,
            colors: ["yellow", "gray", "green"],
            size: ["M", "L", "XL"],
            tags: ["nike", "caprese"],
            rating: 4,
            variants: null,
          };

          products.push(newItem); // Push the object
        }
      );
      return products;
    })
    .catch((error) => {
      return error;
    });
};

const getCategoryTree = async () => {
  var root = `&parent=19`;
  const Str = `&parent=`;
  var level = 1;

  return await getTheCategories(root, level).then((res) => {
    return res;
  });
};

const getTheCategories = (parent, level) => {
  return WooCommerce.getAsync(
    `products/categories?hide_empty=false&per_page=100`
  ).then((res) => {
    var data = res.toJSON().body;
    Object.json1 = JSON.parse(data);
    var items = Object.json1;
    return items;
  });
};

export default {
  getProducts,
  getCategoryTree,
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};
