import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SlideUpDown } from "../../../services/script";
import LogoImage from "../headers/common/logo";

class FooterFour extends Component {
  componentDidMount() {
    var contentwidth = window.innerWidth;
    if (contentwidth < 750) {
      SlideUpDown("footer-title");
    } else {
      var elems = document.querySelectorAll(".footer-title");
      [].forEach.call(elems, function(elemt) {
        let el = elemt.nextElementSibling;
        el.style = "display: block";
      });
    }
  }

  render() {
    return (
      <footer className="">
        <div className="white-layout">
          <div className="container">
            <section className="small-section">
              <div className="row">
                <div className="col-xl-6 offset-xl-3">
                  <div className="subscribe">
                    <h4>newsletter</h4>
                    <form className="form-inline subscribe-form classic-form">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput"
                          placeholder="Enter your email"
                        />
                      </div>
                      <button type="submit" className="btn btn-solid">
                        subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="section-b-space darken-layout">
          <div className="container  mw-90">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo ta-c">
                    <LogoImage logo={this.props.logoName} />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,{" "}
                  </p>
                  <div className="footer-social">
                    <ul className="m-lr-a">
                      <li>
                        <Link to={"https://www.facebook.com/"}>
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={"https://plus.google.com/"}>
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={"https://twitter.com"}>
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={"https://instagram.com"}>
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={"https://rss.com/"}>
                          <i className="fa fa-rss" aria-hidden="true"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>Mi cuenta de usuario</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                        >
                          Registrarse
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                        >
                          Darse de alta
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                        >
                          Olvido la contrasena?
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                        >
                          Editar datos de la cuenta
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>Informacion </h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">Datos y privacidad</a>
                      </li>
                      <li>
                        <a href="#">Compra segura</a>
                      </li>
                      <li>
                        <a href="#">Contactenos</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>Acerca de nosotros</h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li>
                        <i className="fa fa-map-marker"></i>Multikart Demo c/
                        Armando Palacio Valdés , 10 (45,67 km) 33600 Mieres
                      </li>
                      <li>
                        <i className="fa fa-phone"></i>Llamanos: 985 45 33 22
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>Email:{" "}
                        <a href="#">Support@delPrado.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-footer dark-subfooter">
          <div className="container mw-90">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="footer-end">
                  <p>
                    <i className="fa fa-copyright" aria-hidden="true"></i> 2020
                    Waldenberg Incorporated
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="payment-card-bottom">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`}
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`}
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icon/paypal.png`}
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`}
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`}
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterFour;
