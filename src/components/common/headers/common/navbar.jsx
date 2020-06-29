import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withTranslate} from "react-redux-multilingual";
import {connect} from "react-redux";

import {getCategories} from "../../../../services/index";
import {
  addToCart,
  addToWishlist,
  addToCompare,
} from "../../../../actions/indexO";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClose: {right: "0px"},
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
      this.setState({navClose: {right: "-410px"}});
    }
    if (window.innerWidth < 1199) {
      this.setState({navClose: {right: "-300px"}});
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
    console.log("open");
    this.setState({navClose: {right: "0px"}});
  }
  closeNav() {
    this.setState({navClose: {right: "-410px"}});
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
  handlerTree(translate, category) {
    const addresses = this.state.addresses;
    var parentId = null;
    var cats = [];
    var subCats = null;
    if (addresses) {
      addresses.map((addr) => {
        if (addr.name === category) {
          parentId = addr.id;
        }
      });

      addresses.map((addr) => {
        if (addr.parent === parentId) {
          cats.push(addr.name);
        }
      });
      var i = 0;
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
        i++;
      });
    }
  }

  render() {
    const {translate, data2} = this.props;
    const loaded = this.state.loaded;

    return (
      <div>
        <div className="main-navbar">
          <div id="mainnav">
            <div className="toggle-nav" onClick={this.openNav.bind(this)}>
              <i className="fa fa-bars sidebar-bar"></i>
            </div>
            <ul className="nav-menu" style={this.state.navClose}>
              <li className="back-btn" onClick={this.closeNav.bind(this)}>
                <div className="mobile-back text-right">
                  <span>Back</span>
                  <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                </div>
              </li>
              <li>
                <Link to={this.newTo("Meat")} className="nav-link">
                  {translate("meat")}
                  <span className="sub-arrow"></span>
                </Link>
                {loaded ? (
                  <ul className="nav-submenu">
                    {this.handlerTree(translate, "Meat")}
                  </ul>
                ) : null}
              </li>
              <li>
                <Link to={this.newTo("Fish")} className="nav-link">
                  {translate("fish")}
                  <span className="sub-arrow"></span>
                </Link>
                {loaded ? (
                  <ul className="nav-submenu">
                    {this.handlerTree(translate, "Fish")}
                  </ul>
                ) : null}
              </li>
              <li>
                <Link to={this.newTo("Bread")} className="nav-link">
                  {translate("bakery")}
                  <span className="sub-arrow"></span>
                </Link>
                {loaded ? (
                  <ul className="nav-submenu">
                    {this.handlerTree(translate, "Bread")}
                  </ul>
                ) : null}
              </li>
              <li>
                <Link to={this.newTo("Meal")} className="nav-link">
                  {translate("dishes")}
                  <span className="sub-arrow"></span>
                </Link>
                {loaded ? (
                  <ul className="nav-submenu">
                    {this.handlerTree(translate, "Meal")}
                  </ul>
                ) : null}
              </li>
              <li>
                <Link to={this.newTo("Drinks")} className="nav-link">
                  {translate("drinks")}
                  <span className="sub-arrow"></span>
                </Link>
                {loaded ? (
                  <ul className="nav-submenu">
                    {this.handlerTree(translate, "Drinks")}
                  </ul>
                ) : null}
              </li>
              <li>
                <Link to={this.newTo("FruitsVegetables")} className="nav-link">
                  {translate("fruits_vegetables")}
                  <span className="sub-arrow"></span>
                </Link>
                {loaded ? (
                  <ul className="nav-submenu">
                    {this.handlerTree(translate, "FruitsVegetables")}
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
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
