import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ScrollContext} from "react-router-scroll-4";
import {IntlReducer as Intl, IntlProvider} from "react-redux-multilingual";

import "./index.scss";

// Import custom components
import store from "./store";
import translations from "./constants/translations";

import {getAllProducts, getAllCategories, getUserWoo} from "./actions/indexO";

// Layouts

import Vegetables from "./components/main";
import CollectionNoSidebar from "./components/collection/collection-no-sidebar";

import aboutUs from "./components/pages/about-us";
import PageNotFound from "./components/pages/404";
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
import checkOut from "./components/checkout";
import orderSuccess from "./components/checkout/success-page";

import ForgetPassword from "./components/pages/forget-password";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/dashboard";
import Faq from "./components/pages/faq";

// Theme Element
import ElementTitle from "./components/elements/element-title";
import ElementSlider from "./components/elements/element-slider";
import ElementCategory from "./components/elements/element-category";
import ElementService from "./components/elements/element-service";
import ElementRatio from "./components/elements/element-ratio";

class Root extends React.Component {
  render() {
    store.dispatch(getAllProducts());
    store.dispatch(getAllCategories());
    return (
      <Provider store={store}>
        <IntlProvider translations={translations} locale="en">
          <BrowserRouter basename={"/"}>
            <ScrollContext>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  component={Vegetables}
                />
                <Layout>
                  {/*Routes For Layouts*/}
                  {/*Routes For Features (Product Collection) */}
                  <Route
                    path={`${process.env.PUBLIC_URL}/no-sidebar/collection`}
                    component={CollectionNoSidebar}
                  />
                  {/*Routes For Single Product*/}
                  <Route
                    path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`}
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
                    path={`${process.env.PUBLIC_URL}/checkout`}
                    component={checkOut}
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
                    path={`${process.env.PUBLIC_URL}/pages/dashboard`}
                    component={Dashboard}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/faq`}
                    component={Faq}
                  />
                  {/*Features*/} {/*Theme Elements*/}
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-title`}
                    component={ElementTitle}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-slider`}
                    component={ElementSlider}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-category`}
                    component={ElementCategory}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-service`}
                    component={ElementService}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-ratio`}
                    component={ElementRatio}
                  />
                  {/*Product Elements*/}
                </Layout>
              </Switch>
            </ScrollContext>
          </BrowserRouter>
        </IntlProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
