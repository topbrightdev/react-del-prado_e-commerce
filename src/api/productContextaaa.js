import React, { Component } from "react";
import { useContext } from "react";
import Loader from "../Loader";
import { storeProducts, detailProduct } from "../data";
import { tree } from "../categoryContext";
import WooContext from "./wooContext";

const wooConfig = require("../components/wooConfig");
const WooCommerceAPI = require("woocommerce-api");

const WooCommerce = new WooCommerceAPI({
  url: wooConfig.siteUrl,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  wpAPI: true,
  version: "wc/v3",
});

const ProductContext = React.createContext();

export const setStuff = (tree) => {
  if (tree) {
    // console.log(tree);
  }
};

var pos = 1;

var addresses = [{ id: 19, level: 0, position: 0, name: "Product Categories" }];
var cart = [];
var length = null;

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sales: [],
      tree: [],
      tree2: [],
      imageClicked: null,
      categoryClicked: null,
      detailProduct: detailProduct,
      cart: [],
      // preCart: [],
      modalOpen: false,
      modalProduct: detailProduct,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
      isListLoaded: false,
      isTreeLoaded: false,
      isMenuLoaded: false,
    };
    this.imageClick = this.imageClick.bind(this);
    this.categoryClick = this.categoryClick.bind(this);
  }
  static contextType = WooContext;

  wooPipe() {
    const wooFunctions = this.context;
    wooFunctions.receiveCart(this.state);
  }

  oldProducts = false;

  componentWillMount() {
    this.createTree();
    this.getSales();
  }

  componentDidMount() {
    this.getList();
  }


  getItem = (id) => {
    var product = null;

    if (this.state.products === undefined || !this.state.products[0]) {
      if (this.state.detailProduct.id === id) {
        product = this.state.detailProduct;
      }
      if (this.state.modalProduct.id === id) {
        product = this.state.modalProduct;
      }
    } else {
      product = this.state.products.find((item) => item.id === id);
    }
   
    return product;
  };


  handleDetail = (id) => {
    // If the function receives a whole product parse it directly to the state
    if(id.id){  
      const newItem = {
        id: id.id,
        title: id.name,
        img: id.img,
        price: parseInt(id.sale_price),
        company: "nurumia",
        info: id.description,
        inCart: false,
        count: 1,
        total: 1,
        categories:id.categories,
        stock: id.stock_quantity
      };

      this.setState(() => {        
        return { detailProduct: newItem };
      });

    } else {
      var product = this.getItem(id);
    //  console.log(this.state);
      this.setState(() => {
      return { detailProduct: product };
    });
    }    
  };



  addToCart = (data) => {
    var id = null;
    var product = null;
    var repeated = false;
    length++;
    var tempProducts = [...this.state.products];
    //console.log(data)
    if (data.id) {
      id = data.id;
    }

    if (data.preCart) {
      if (data.preCart[0]) {
        // console.log(data.preCart[0]);
        if (data.preCart[0].id) {
          if (data.preCart[0].id === id) {
            product = data.preCart[0];
          } else {
            tempProducts.map((item) => {
              if (item.id === id) {
                product = item;
              }
            });
          }
        }
      } else {
        this.state.products.map((item) => {
          if (item.id === id) {
            product = item;
          }
        });
      }
    } else {
      if(this.state.products[0]){
          this.state.products.map((item) => {
        if (item.id === id) {
          product = item;
        }
      }); 
      } else {
      if(this.state.detailProduct.id === data.id){
        product = this.state.detailProduct
        product.count = 1;
}
      }   
    }

    if (product) {
      product.inCart = true;
      const price = product.price;
      product.total = price;

      if (cart) {
        cart.map((item) => {
          if (item.id === product.id) {  
                 
            var totalCount = item.count + product.count;
            if(product.stock > totalCount){
               product.count = totalCount;
            cart.pop(item);
            cart = [...cart, product];
            }
                       repeated = true;

          }
        });
      }
      if (!repeated) {
        cart = [...this.state.cart, product];
      }

      this.parseIt(cart);

      this.setState(
        () => {
          return {
            //  products: tempProducts,
            cart: cart,
            preCart: [],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  async parseIt(cart) {
    await this.setState(
      () => {
        return {
          // products: tempProducts,
          cart: cart,
          preCart: [],
        };
      },
      () => {
        this.addTotals();
      }
    );
  }

  openModal = (id) => {
    var product = null

    if(id.id){
      this.setState(() => {
        return { modalProduct: id, modalOpen: true };
      });
    } else {
        product = this.getItem(id);
        this.setState(() => {
              return { modalProduct: product, modalOpen: true };
    });
    }
   
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  /* The below function will increment the count in one individual item inside de cartList 
 Component */

  increment = (receivedItem) => {
    // It receives the id of the item with the count to be incremented in the cart
    var tempCart = this.state.cart; // It copies the current cart
    var found = false;
    var index = 0;
    var j = 0;
    var selectedProduct = null;

    tempCart.map((item) => {
      // Looks for the item in the cart and set a flag true if it found it

      if (item.id === receivedItem.id) {
        found = true;
        selectedProduct = receivedItem;
        index = j;
      }
      j++;
    });

    if (!found) {
      // If can't find the current item will add it to cart (I dont think this is needed)

      this.addToCart(id);
      tempCart = cart;
      selectedProduct.count = 0; // This has non sense
    } else {
      if((selectedProduct.count + 1 ) <= selectedProduct.stock){
          const count = selectedProduct.count + 1;
          tempCart[index].count = count;
          const total = count * selectedProduct.price;
          tempCart[index].total = total;
      }
   
    }

    this.setState(
      () => {
        return {
          cart: tempCart,
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    var found = false;
    cart.find((item) => {
      if (item.id === id) {
        found = true;
      }
    });

    if (!found) {
      this.addToCart(id);
      tempCart = cart;
    }

    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (product) {
      if (product.count >= 1) {
        product.count = product.count - 1;
      }

      if (product.count === 0) {
        this.removeItem(id);
      } else {
        product.total = product.count * product.price;
        this.setState(
          () => {
            return {
              cart: [...tempCart],
            };
          },
          () => {
            this.addTotals();
          }
        );
      }
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = this.state.cart;
    tempCart = tempCart.filter((item) => item.id !== id);
    // console.log(tempProducts);
    // console.log(tempCart);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    // console.log(index);
    // console.log(removedProduct);
    // removedProduct.inCart = null;
    // removedProduct.count = 0;
    // removedProduct.total = 0;
    cart = [...tempCart];
    //console.log(cart);
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    cart = [];
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };



  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.075;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
    cart = this.state.cart;
    this.wooPipe();
  };



  getList = (res) => {
    WooCommerce.getAsync(`products?category=${res}`)
      .then((res) => res.toJSON().body)
      .then((json) => {
        var data = json;
        Object.json1 = JSON.parse(data);
        var items = Object.json1;
        var products = [];
        items.map(({ id, name, images, price,categories,description ,stock_quantity}) => {
          var img;
          images.map((data) => {
            img = data.src;
          });

          const newItem = {
            id: id,
            title: name,
            img: img,
            price: parseInt(price),
            company: "nurumia",
            info: description,
            inCart: null,
            count: 1,
            total: 1,
            categories:categories,
            stock: stock_quantity
            
          };

          products.push(newItem); // Push the object
          this.oldProducts = true;
        });
        this.setState({ ...{ isListLoaded: true, products: products } });
      });
  };



  getSales2 = () => {
    WooCommerce.getAsync(`products?on_sale=true`)
      .then((res) => res.toJSON().body)
      .then((json) => {
        var data = json;
        Object.json1 = JSON.parse(data);
        var items = Object.json1;
        var sales = [];
        items.map(({ id, name, images, sale_price, categories ,description}) => {
          var img;

          images.map((data) => {
            img = data.src;
          });
          const newItem = {
            id: id,
            title: name,
            img: img,
            price: parseInt(sale_price),
            company: "nurumia",
            info: description,
            inCart: false,
            count: 1,
            total: 1,
            categories:categories
          };
          sales.push(newItem); // Push the object
        });

        this.setState({ ...{ sales: sales } });
      });
  };



  getSales = () => {
    WooCommerce.getAsync(`products?on_sale=true`)
      .then((res) => res.toJSON().body)
      .then((json) => {
        var data = json;
        Object.json1 = JSON.parse(data);
        var items = Object.json1;
        var sales = [];
        items.map((item) => {
          var img;

          item.images.map((data) => {
            img = data.src;
          });
          var newItem = item;

          newItem.img =  img,
          newItem.price=parseInt(item.sale_price),
          newItem.company= "nurumia",      
        
          sales.push(newItem); // Push the object
        });

        this.setState({ ...{ sales: sales } });
      });
  };

  createTree() {
    var root = `&parent=19`;
    const Str = `&parent=`;
    var level = 1;
    if (this.state.isTreeLoaded === false) {
      this.getCategories(root, level).then((res) => {
        tree.children[0] = res;

        if (res) {
          level++;
          var i = 0;

          res.map((m) => {
            // With m.id I request and what I get goes into
            // m.children
            if (m) {
              if (m.id) {
                root = Str + `${m.id}`;

                this.getCategories(root, level).then((res) => {
                  if (res) {
                    if (tree.children) {
                      if (tree.children[0]) {
                        if (tree.children[0][i]) {
                          if (tree.children[0][i].children) {
                            var arrayPos = 0;
                            addresses.map((addr) => {
                              if (addr.id === m.id) {
                                arrayPos = addr.position;
                              }
                            });

                            if (!tree.children[0][arrayPos].children[0]) {
                              tree.children[0][arrayPos].children.push(res);
                            }

                            i++;
                          }
                        }
                      }
                    }
                  }
                });
              }
            }
          });
        }
        this.setState({ ...{ tree: tree, isTreeLoaded: true } });
        setStuff(tree);
        return tree;
      });
    }
  }

  getCategories = (parent, level) => {
    return WooCommerce.getAsync(
      `products/categories?hide_empty=false&per_page=30${parent}`
    ).then((res) => {
      if (res) {
        var data = res.toJSON().body;
        // console.log(data)
        Object.json1 = JSON.parse(data);
        var items = Object.json1;
        var categories = [];

        if (items[0]) {
          if (items[0].id != undefined) {
            pos = 0;

            items.map(({ id, name, parent }) => {
              const newCategory = {
                id: id,
                name: name,
                parent: parent,
                children: [],
              };
              const addr = {
                id: id,
                level: level,
                position: pos,
                name: name,
              };

              addresses.push(addr);
              categories.push(newCategory); // Push the object

              pos++;
            });

            return categories;
          }
        }
      }
    });
  };

  imageClick = (res) => {
    this.setState({ imageClicked: res });
  };

  categoryClick = (res) => {
    this.setState({
      categoryClicked: res.id,
      isMenuLoaded: true,
    });
    this.getList(res.id);
    /* I need to use res(id) to find the category in the tree and check who is parent is,then 
    load all the categories belonging to that main category */

    if (this.state.tree.children[0]) {
      this.state.tree.children[0].map((item) => {
        if (item.name === res.parent) {
          this.setState({ tree2: item });
        }
      });
    }
  };

  render() {
    if (this.state.isTreeLoaded !== true) {
      // if (false !== true) {
      return <Loader />;
    } else {
      return (
        <div>
          <ProductContext.Provider
            value={{
              ...this.state,
              length,
              handleDetail: this.handleDetail,
              addToCart: this.addToCart,
              openModal: this.openModal,
              closeModal: this.closeModal,
              increment: this.increment,
              decrement: this.decrement,
              removeItem: this.removeItem,
              clearCart: this.clearCart,
              updateValue: this.updateValue,
              imageClick: this.imageClick,
              categoryClick: this.categoryClick,
              getItem: this.getItem,
              getList: this.getList,
              parsePreCart: this.parsePreCart,
            }}
          >
            {this.props.children}
          </ProductContext.Provider>
        </div>
      );
    }
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

export function useProduct() {
  return useContext(ProductContext);
}

export default ProductContext;
