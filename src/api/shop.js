const wooConfig = require("./wooConfig");
const WooCommerceAPI = require("woocommerce-api");

const WooCommerce = new WooCommerceAPI({
  url: wooConfig.siteUrl,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  wpAPI: true,
  version: "wc/v3",
});

const TIMEOUT = 9000;

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
