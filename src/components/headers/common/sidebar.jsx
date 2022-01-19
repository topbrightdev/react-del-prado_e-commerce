import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  closeNav() {
    var closemyslide = document.getElementById("mySidenav");
    console.log(closemyslide);
    if (closemyslide) closemyslide.classList.remove("open-side");
  }

  handleSubmenu = (event) => {
    if (event.target.nextElementSibling.classList.contains("opensub1"))
      event.target.nextElementSibling.classList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function(value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };

  render() {
    const { translate } = this.props;

    return (
      <div id="mySidenav" className="sidenav">
        <nav>
          <ul id="sub-menu" className="sidebar-menu ">
            <li>
              <Link to="#">
                <h3>{translate("about_us")}</h3>
              </Link>
              <ul id="about">
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/pages/account`}>
                    <h3>{translate("our_story")}</h3>
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/pages/account`}>
                    <h3>{translate("our_phylosophy")}</h3>
                  </Link>
                </li>
                <li />
              </ul>
            </li>
            <li>
              <Link to="#">
                <h3>{translate("tutorial")}</h3>
              </Link>
              <ul id="tutorial">
                <li>
                  <Link to="#">
                    <h3>{translate("needle_felting")}</h3>
                  </Link>
                  <ul className="sub-menu1">
                    <li>
                      <Link to="#">
                        <h3>Picu Moros </h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <h3>Mosquito Family</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <h3>Miss Forest</h3>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <h3> {translate("wet_felting")}</h3>
                  </Link>
                  <ul className="sub-menu1 ">
                    <li>
                      <Link to="#">
                        <h3>Kitchen Placemat</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <h3>Small Basket</h3>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">
                <h3>{translate("inspiration")}</h3>
              </Link>
              <ul id="blog" className=" sub-menu2">
                <li>
                  <Link to="#">
                    <h3>Blog</h3>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withTranslate(SideBar);
