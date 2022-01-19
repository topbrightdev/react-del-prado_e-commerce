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

const removeString = (res) => {
  var newParraf = null;
  if (res !== "") {
    newParraf = res.replace(`<p>`, " ");
    newParraf = newParraf.split(`</p>`, 2);
    newParraf = newParraf[0];
  }

  return newParraf;
};

const getProducts = () => {
  return WooCommerce.getAsync(`products?per_page=30&category=53`)
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
          rating_count,
          average_rating,
        }) => {
          var img;
          var newImages = [];
          images.map((data) => {
            img = data.src;
            return newImages.push(img);
          });

          var stringDescription = removeString(description);
          var stringShortDescription = removeString(short_description);

          const newItem = {
            categories: categories,
            category: "vegetable",
            description: stringDescription,
            discount: sale_price,
            id: id,
            name: name,
            new: false,
            pictures: newImages,
            length: images.length,
            price: price,
            sale: on_sale,
            salePrice: sale_price,
            shortDetails: stringShortDescription,
            stock: stock_quantity,
            brand: tags,
            colors: ["yellow", "gray", "green"],
            size: ["M", "L", "XL"],
            tags: ["nike", "caprese"],
            rating_count: rating_count,
            average_rating: average_rating,
            variants: null,
          };

          return products.push(newItem); // Push the object
        }
      );
      return products;
    })
    .catch((error) => {
      return error;
    });
};

const getExtras = () => {
  return WooCommerce.getAsync(`products?per_page=5&category=62&category=63`)
    .then((res) => {
      return res.toJSON().body;
    })
    .then((json) => {
      var data = json;
      Object.json1 = JSON.parse(data);
      var items = Object.json1;
      var extras = [];

      items.map(({ id, name, images, description }) => {
        var img;
        var newImages = [];
        images.map((data) => {
          img = data.src;
          return newImages.push(img);
        });

        var stringDescription = removeString(description);
        const items = {
          description: stringDescription,
          id: id,
          name: name,
          pictures: newImages,
        };

        return extras.push(items);
      });

      return extras;
    })
    .catch((error) => {
      return error;
    });
};

const getCategoryTree = async () => {
  var root = `&parent=19`;
  var level = 1;
  return await getTheCategories(root, level).then((res) => {
    console.log(res);
    return res;
  });
};

const getTheCategories = (parent, level) => {
  getExtras();

  return WooCommerce.getAsync(
    `products/categories?hide_empty=false&per_page=100`
  ).then((res) => {
    var data = res.toJSON().body;
    Object.json1 = JSON.parse(data);
    var items = Object.json1;
    console.log(items);
    return items;
  });
};

const postReview = (data) => {
  return WooCommerce.postAsync("products/reviews", data)
    .then((response) => { })
    .catch((error) => {
      console.log(error.response.data);
    });
};

const getReview = (id) => {
  return WooCommerce.getAsync(`products/reviews?product=${id}`)
    .then((res) => {
      var data = res.toJSON().body;
      Object.json1 = JSON.parse(data);
      var reviews = Object.json1;
      return reviews;
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

export default {
  getProducts,
  getCategoryTree,
  postReview,
  getReview,
  getExtras,
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};
