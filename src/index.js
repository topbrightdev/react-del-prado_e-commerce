import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import { IntlProvider } from "react-redux-multilingual";
import { StripeProvider } from "react-stripe-elements";

import "./index.scss";

// Import custom components
import store from "./store";
import translations from "./constants/translations";

import { getAllProducts, getAllCategories } from "./actions/indexO";

// Layouts

import Vegetables from "./components/main";
import CollectionNoSidebar from "./components/collection/collection-no-sidebar";

import Delivery from "./components/pages/delivery";

import aboutUs from "./components/pages/about-us";
import PageNotFound from "./components/pages/404";
import EmptySearch from "./components/pages/empty-search";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Account from "./components/pages/account";

// Product Pages
import LeftSideBar from "./components/products/left-sidebar";

// Features
import Layout from "./components/app";
import Cart from "./components/cart";
import Compare from "./components/compare/index";
import wishList from "./components/wishlist";
import checkOut from "./components/checkout/index";
import checkoutForm from "./components/checkout/CheckoutForm";

import orderSuccess from "./components/checkout/success-page";

import ForgetPassword from "./components/pages/forget-password";
import Contact from "./components/pages/contact";
import Faq from "./components/pages/faq";

// Theme Element
import ElementSlider from "./components/elements/element-slider";
import ElementCategory from "./components/elements/element-category";
import ElementService from "./components/elements/element-service";

const pK = "pk_test_xhI1GEX6luUTKEj2qQe8biZX00iH1jvMZe";

class Root extends React.Component {
  render() {
    store.dispatch(getAllProducts());
    store.dispatch(getAllCategories());
    return (
      <Provider store={store}>
        <IntlProvider translations={translations} locale="en">
          <StripeProvider apiKey={pK}>
            <BrowserRouter basename={"/"}>
              <ScrollContext>
                <Switch>
                  <Layout>
                    <Route
                      exact
                      path={`${process.env.PUBLIC_URL}/`}
                      component={Vegetables}
                    />
                    {/*Routes For Layouts*/}
                    {/*Routes For Features (Product Collection) */}
                    <Route
                      path={`${process.env.PUBLIC_URL}/no-sidebar/collection`}
                      component={CollectionNoSidebar}
                    />
                    {/*Routes For Single Product*/}
                    <Route
                      path={`${
                        process.env.PUBLIC_URL
                      }/left-sidebar/product/:id`}
                      component={LeftSideBar}
                    />
                    {/*Routes For custom Features*/}
                    <Route
                      path={`${process.env.PUBLIC_URL}/cart`}
                      component={Cart}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/wishlist`}
                      component={wishList}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/compare`}
                      component={Compare}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/Checkout`}
                      component={checkOut}
                    />
                    {/*   <Route
                    path={`${process.env.PUBLIC_URL}/StripeCheckout`}
                    component={stripeCheckout}
                  />
               */}
                    <Route
                      path={`${process.env.PUBLIC_URL}/checkoutForm`}
                      component={checkoutForm}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/order-success`}
                      component={orderSuccess}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/sales/orders`}
                      component={aboutUs}
                    />
                    {/*Routes For Extra Pages*/}
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/about-us`}
                      component={aboutUs}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/404`}
                      component={PageNotFound}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/empty-search`}
                      component={EmptySearch}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/login`}
                      component={Login}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/register`}
                      component={Register}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/account`}
                      component={Account}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/forget-password`}
                      component={ForgetPassword}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/contact`}
                      component={Contact}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/faq`}
                      component={Faq}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages/delivery`}
                      component={Delivery}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/features/element-slider`}
                      component={ElementSlider}
                    />
                    <Route
                      path={`${
                        process.env.PUBLIC_URL
                      }/features/element-category`}
                      component={ElementCategory}
                    />
                    <Route
                      path={`${
                        process.env.PUBLIC_URL
                      }/features/element-service`}
                      component={ElementService}
                    />
                    {/*Product Elements*/}
                  </Layout>{" "}
                </Switch>
              </ScrollContext>
            </BrowserRouter>
          </StripeProvider>
        </IntlProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
