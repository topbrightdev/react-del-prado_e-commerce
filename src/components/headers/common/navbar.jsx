import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";
import { connect } from "react-redux";

import { getCategories } from "../../../services/index";
import Meat from "../../../icons/Meat";
import Fish from "../../../icons/Fish";
import Meal from "../../../icons/Meal";
import Drinks from "../../../icons/Drinks";
import Bread from "../../../icons/Bread";
import Fruits from "../../../icons/Fruits";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClose: { right: "0px" },
      addresses: null,
      loaded: null,
    };
  }

  newTo = (key) => {
    return {
      pathname: `${process.env.PUBLIC_URL}/no-sidebar/collection/`,
      category: key,
    };
  };

  componentWillMount() {
    this.check();
    if (window.innerWidth < 750) {
      this.setState({ navClose: { right: "-410px" } });
    }
    if (window.innerWidth < 1199) {
      this.setState({ navClose: { right: "-300px" } });
    }
  }

  componentDidUpdate() {
    this.check();
  }

  check() {
    if (this.props.categoryTree.length > 24 && !this.state.loaded) {
      this.setState(() => {
        return {
          addresses: this.props.categoryTree,
          loaded: "Works!!",
        };
      });
    }
  }

  openNav() {
    this.setState({ navClose: { right: "0px" } });
  }
  closeNav() {
    this.setState({ navClose: { right: "-410px" } });
  }

  onMouseEnterHandler() {
    if (window.innerWidth > 1199) {
      document.querySelector("#main-menu").classList.add("hover-unset");
    }
  }

  handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensubmenu"))
      event.target.nextElementSibling.classList.remove("opensubmenu");
    else {
      document.querySelectorAll(".nav-submenu").forEach(function(value) {
        value.classList.remove("opensubmenu");
      });
      document
        .querySelector(".mega-menu-container")
        .classList.remove("opensubmenu");
      event.target.nextElementSibling.classList.add("opensubmenu");
    }
  };

  handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (
      event.target.parentNode.nextElementSibling.classList.contains(
        "opensubmegamenu"
      )
    )
      event.target.parentNode.nextElementSibling.classList.remove(
        "opensubmegamenu"
      );
    else {
      document.querySelectorAll(".menu-content").forEach(function(value) {
        value.classList.remove("opensubmegamenu");
      });
      event.target.parentNode.nextElementSibling.classList.add(
        "opensubmegamenu"
      );
    }
  };

  // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  handlerTree(category) {
    const addresses = this.state.addresses;
    var parentId = null;
    var cats = [];
    if (addresses) {
      addresses.map((addr) => {
        if (addr.name === category) {
          parentId = addr.id;
          return parentId;
        } else return null;
      });

      addresses.map((addr) => {
        if (addr.parent === parentId) {
          cats.push(addr.name);
          return cats;
        } else return null;
      });
    } else {
      return null;
    }

    if (cats) {
      return cats.map((res) => {
        return (
          <li key={res}>
            <Link to={this.newTo(res)}>{res}</Link>
          </li>
        );
      });
    }
  }

  render() {
    const { translate } = this.props;
    const loaded = this.state.loaded;

    return (
      <div className="main-navbar ">
        <div
          className="toggle-nav"
          onClick={this.openNav.bind(this)}
          onMouseOut={this.closeNav.bind(this)}
        >
          <i className="fa fa-bars sidebar-bar" />
        </div>
        <div id="mainnav">
          <ul className="nav-menu" style={this.state.navClose}>
            <li className="back-btn" onClick={this.closeNav.bind(this)}>
              <div className="mobile-back text-right">
                <span>{translate("atras")}</span>
                <i className="fa fa-angle-right pl-2" aria-hidden="true" />
              </div>
            </li>
            <li>
              <Link to={this.newTo("Meat")} className="nav-link">
                <Meat className="ma-lr" />
                {translate("meat")}
              </Link>
              {loaded ? (
                <ul className="nav-submenu">{this.handlerTree("Meat")}</ul>
              ) : null}
            </li>
            <li>
              <Link to={this.newTo("Fish")} className="nav-link">
                <Fish className="ma-lr" />
                {translate("fish")}
              </Link>
              {loaded ? (
                <ul className="nav-submenu">{this.handlerTree("Fish")}</ul>
              ) : null}
            </li>
            <li>
              <Link to={this.newTo("FruitsVegetables")} className="nav-link">
                <Fruits className="ma-lr" />
                {translate("fruits_vegetables")}
              </Link>
              {loaded ? (
                <ul className="nav-submenu">
                  {this.handlerTree("FruitsVegetables")}
                </ul>
              ) : null}
            </li>
            <li>
              <Link to={this.newTo("Bread")} className="nav-link">
                <Bread className="ma-lr" />
                {translate("bread")}
              </Link>
              {loaded ? (
                <ul className="nav-submenu">{this.handlerTree("Bread")}</ul>
              ) : null}
            </li>
            <li>
              <Link to={this.newTo("Meal")} className="nav-link">
                <Meal className="ma-lr" />
                {translate("dishes")}
              </Link>
              {loaded ? (
                <ul className="nav-submenu">{this.handlerTree("Meal")}</ul>
              ) : null}
            </li>
            <li>
              <Link to={this.newTo("Drinks")} className="nav-link">
                <Drinks className="ma-lr" />
                {translate("drinks")}
              </Link>
              {loaded ? (
                <ul className="nav-submenu">{this.handlerTree("Drinks")}</ul>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryTree: getCategories(state.data2.categoryTree),
    symbol: state.data.symbol,
  };
};

export default connect(mapStateToProps)(withTranslate(NavBar));
//export default withTranslate(NavBar);
