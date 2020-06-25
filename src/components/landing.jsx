import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './landing.scss';

class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
    }

    componentDidMount() {

        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);

        let sky = document.querySelector('#img-bg'),
            elemOne = document.querySelector('#img-1'),
            elemTwo = document.querySelector('#img-2'),
            elemThree = document.querySelector('#img-3'),
            elemFour = document.querySelector('#img-4'),
            elemFive = document.querySelector('#img-5'),
            elemSix = document.querySelector('#img-6'),
            elemSeven = document.querySelector('#img-7'),
            elemEight = document.querySelector('#img-8'),
            elemNine = document.querySelector('#img-9'),
            elemTen = document.querySelector('#img-10'),
            elemEleven = document.querySelector('#img-11');


        sky.addEventListener('mousemove', function (e) {
            var pageX = e.clientX - window.innerWidth / 2,
                pageY = e.clientY - window.innerHeight / 2;
            elemOne.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemTwo.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemThree.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemFour.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemFive.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemSix.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemSeven.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemEight.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemNine.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemTen.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemEleven.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
        });
    }

    toggleMenu = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }


    render() {
        return (
            <div className="landing-page-multikart">
                <header id="sticky" className="sticky">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col p-0">
                                <div className="top-header">
                                    <div className="logo pl-2">
                                        <a className="navbar-brand" href="#"><img
                                            src={`${process.env.PUBLIC_URL}/assets/images/landing-page/header/logo.png`}
                                            alt="logo" /></a>
                                    </div>
                                    <div className="main-menu mx-auto" id="nav">
                                        <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-light">
                                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                data-target="#scroll-spy"
                                                aria-controls="scroll-spy" aria-expanded="false"
                                                aria-label="Toggle navigation"
                                                onClick={() => this.toggleMenu()}>
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className={`collapse navbar-collapse ${this.state.toggle ? 'show' : ''}`} id="scroll-spy">
                                                <ul className="navbar-nav mx-auto nav">
                                                    <li className="nav-item">
                                                        <AnchorLink className="nav-link" href='#img-bg'>Home</AnchorLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <AnchorLink className="nav-link" href='#feature'>Features</AnchorLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <AnchorLink className="nav-link" href='#demo'>Demo</AnchorLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <AnchorLink className="nav-link" href='#admin'>Admin</AnchorLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <AnchorLink className="nav-link" href='#email'>Email Templates</AnchorLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <AnchorLink className="nav-link" href='#core'>Core Features</AnchorLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <AnchorLink className="nav-link" href='#footer'>Footer</AnchorLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div>
                                        <form target="_blank" className="form-inline my-lg-0"
                                            action="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773">
                                            <button className="btn my-sm-0 purchase-btn">PURCHASE</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/*Home section*/}
                <section className="main-img responsive-img  pt-0" id="img-bg">
                    <div className="container-fluid">
                        <div className="main-contain">
                            <div>
                                <h1 className="m-0">MULTI<span>KART</span></h1>
                                <h3 className="m-0">The <span>BEST SELLING</span> Minimal Theme</h3>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/text.png`} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="home-decor">
                            <div className="decor-1 decor wow zoomIn" id="img-1">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/1.png`} alt=""
                                    className="img-fluid lazyload" />
                            </div>
                            <div className="decor-2 decor wow zoomIn" id="img-2">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/5.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                            <div className="decor-3 decor wow zoomIn" id="img-3">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/2.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                            <div className="decor-4 decor wow zoomIn" id="img-4">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/4.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                            <div className="decor-5 decor wow zoomIn" id="img-5">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/3.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                            <div className="decor-6 decor wow zoomIn" id="img-6">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/6.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                            <div className="decor-7 decor wow zoomIn" id="img-7">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/11.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                            <div className="decor-8 decor wow zoomIn" id="img-8">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/7.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                            <div className="decor-9 decor wow zoomIn" id="img-9">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/8.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                            <div className="decor-10 decor wow zoomIn" id="img-10">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/10.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                            <div className="decor-11 decor wow zoomIn" id="img-11">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/slider/9.png`} alt=""
                                    className=" img-fluid lazyload" />
                            </div>
                        </div>
                    </div>
                </section>

                {/*Features section*/}
                <section id="feature" className="section-lr section-b-space feature-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="feature text-center">
                                    <div>
                                        <h5 className="title-landing">Reasones to Buy Multikart</h5>
                                        <p className="pb-3">Multikart HTML template is an apparently simple but highly
                                            functional tempalate
                                            designed for
                                            creating
                                            a flourisahing online business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row feature_row">
                            <div className="col-xl-3 col-md-6 ">
                                <div className="feature-box">
                                    <div className="feature-image">
                                        <img className="img-fluid lazyload"
                                            src={`${process.env.PUBLIC_URL}/assets/images/landing-page/main-features/demo.png`} alt="img" />
                                    </div>
                                    <div className="feature-content">
                                        <ul className="color-varient">
                                            <li className="red"></li>
                                            <li className="orange"></li>
                                            <li className="green"></li>
                                        </ul>
                                        <h6>Frontend Template</h6>
                                    </div>
                                    <p className="para">Multikart is a clean and morfern responsive template.it will perfectly suit for any type of online store</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 ">
                                <div className="feature-box">
                                    <div className="feature-image">
                                        <img className="img-fluid lazyload"
                                            src={`${process.env.PUBLIC_URL}/assets/images/landing-page/main-features/dashboard.png`}
                                            alt="img" />
                                    </div>
                                    <div className="feature-content">
                                        <ul className="color-varient">
                                            <li className="red"></li>
                                            <li className="orange"></li>
                                            <li className="green"></li>
                                        </ul>
                                        <h6>Admin Template</h6>
                                    </div>
                                    <p className="para">Multikart has powerful backend admin panel to manage products, sales, discount coupons, orders, user, vendor and much more.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="feature-box">
                                    <div className="feature-image">
                                        <img className="img-fluid lazyload"
                                            src={`${process.env.PUBLIC_URL}/assets/images/landing-page/main-features/email.png`}
                                            alt="img" />
                                    </div>
                                    <div className="feature-content">
                                        <ul className="color-varient">
                                            <li className="red"></li>
                                            <li className="orange"></li>
                                            <li className="green"></li>
                                        </ul>
                                        <h6>Email Template</h6>
                                    </div>
                                    <p className="para">Multikart comes with 4 email template which include two order success template & two email template</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="feature-box">
                                    <div className="feature-image">
                                        <img className="img-fluid lazyload"
                                            src={`${process.env.PUBLIC_URL}/assets/images/landing-page/main-features/portfoio.png`} alt="img" />
                                    </div>
                                    <div className="feature-content">
                                        <ul className="color-varient">
                                            <li className="red"></li>
                                            <li className="orange"></li>
                                            <li className="green"></li>
                                        </ul>
                                        <h6>portfolio pages</h6>
                                    </div>
                                    <p className="para">Multikart provides multiple portfolio pages which includes 3 grid view & 4 masonary view.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 ">
                                <div className="feature-box">
                                    <div className="feature-image">
                                        <img className="img-fluid lazyload" src={`${process.env.PUBLIC_URL}/assets/images/landing-page/main-features/lazy.png`} alt="img" />
                                    </div>
                                    <div className="feature-content">
                                        <ul className="color-varient">
                                            <li className="red"></li>
                                            <li className="orange"></li>
                                            <li className="green"></li>
                                        </ul>
                                        <h6>Lazy-Load</h6>
                                    </div>
                                    <p className="para">Make your web page faster by using lazy loaded. Lazy Load is delays loading of images in long web pages. Images outside of viewport are not loaded until user scrolls to them.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 ">
                                <div className="feature-box">
                                    <div className="feature-image">
                                        <img className="img-fluid lazyload" src={`${process.env.PUBLIC_URL}/assets/images/landing-page/main-features/Unlimited-product-size.png`} alt="img" />
                                    </div>
                                    <div className="feature-content">
                                        <ul className="color-varient">
                                            <li className="red"></li>
                                            <li className="orange"></li>
                                            <li className="green"></li>
                                        </ul>
                                        <h6>auto height adjustable</h6>
                                    </div>
                                    <p className="para">Every store has different image size weather its tools or fashion we have covered all image size for all your store needs , it has auto resize image option in multikart</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="feature-box">
                                    <div className="feature-image">
                                        <img className="img-fluid lazyload" src={`${process.env.PUBLIC_URL}/assets/images/landing-page/main-features/Dark-light.png`} alt="img" />
                                    </div>
                                    <div className="feature-content">
                                        <ul className="color-varient">
                                            <li className="red"></li>
                                            <li className="orange"></li>
                                            <li className="green"></li>
                                        </ul>
                                        <h6>Dark & Light</h6>
                                    </div>
                                    <p className="para">Useful feature for Night Owls or people who work during the night. The dark background will put less strain on the eyes.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="feature-box">
                                    <div className="feature-image">
                                        <img className="img-fluid lazyload" src={`${process.env.PUBLIC_URL}/assets/images/landing-page/main-features/rtl.png`} alt="img" />
                                    </div>
                                    <div className="feature-content">
                                        <ul className="color-varient">
                                            <li className="red"></li>
                                            <li className="orange"></li>
                                            <li className="green"></li>
                                        </ul>
                                        <h6>Easy RTL Integration</h6>
                                    </div>
                                    <p className="para">Design your website LTR or RTL , Multikart supports multi-languages so its easy to design website on any layout such as arabic , urdu..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Effects section*/}
                <section className="pt-0 effect-cls">
                    <div className="demo-slider">
                        <div>

                        </div>
                        <div className="demo">
                            <div className="right-part">
                                <div>
                                    <h5 className="font-style">just for you</h5>
                                    <h4>7+ DEMO AVAILABLE</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Demo section*/}
                <section id="demo" className="section-b-space section-lr main-demo">
                    <div className="container-fluid">
                        <Tabs className="theme-tab">
                            <TabList className="tabs tab-title">
                                <Tab>Home</Tab>
                                <Tab>Product</Tab>
                                <Tab>Shop</Tab>
                                <Tab>Other</Tab>
                                <Tab>Blog</Tab>
                            </TabList>

                            <TabPanel>
                                <div>
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/fashion`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/1.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>Fashion classic</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pets`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/8.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>pets <span className="badge badge-danger">New</span></h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/watch`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/15.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>watch <span className="badge badge-danger">New</span></h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/kids`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/16.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>kids <span className="badge badge-danger">New</span></h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/vegetables`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/19.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>vegetables <span className="badge badge-danger">New</span></h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/beauty`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/20.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>beauty <span className="badge badge-danger">New</span></h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/electronic`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/25.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>electronic classic <span className="badge badge-danger">New</span></h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/furniture`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/30.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>furniture <span className="badge badge-danger">New</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/col-left/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/1.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>3 col left</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/col-left/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/2.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>3 col right</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/column/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/3.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>3 column</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/accordian/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/4.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>accordian</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/left-image/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/5.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>left image</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/6.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>left sidebar</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/no-sidebar/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/7.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>no sidebar</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/right-image/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/8.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>right image</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/right-sidebar/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/9.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>right sidebar</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/vertical/product/1`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/product/11.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>vertical tab</h3>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/metro/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/6.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>metro <span className="badge badge-danger">New</span></h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/full-width/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/10.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>full width <span className="badge badge-danger">New</span></h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/1.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>left sidebar</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/no-sidebar/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/2.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>no sidebar</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/right-sidebar/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/3.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>right sidebar</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/4.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>sidebar popup</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/5.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>infinite scroll</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/7.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>3 grid</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/8.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>6 grid</h3>
                                            </Link>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/shop/9.jpg`}
                                                    className="img-fluid lazyload" />
                                                <h3>list view</h3>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/wishlist`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/1.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>wishlist</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/cart`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/2.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>cart</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/dashboard`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/3.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>dashboard</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/login`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/4.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>login</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/register`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/5.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>register</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/contact`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/6.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>contact us</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/forgot-password`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/7.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>forget password</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/checkout`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/9.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>checkout</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/about-us`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/10.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>about us</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/search`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/11.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>search</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/compare`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/15.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>compare </h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/collection`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/17.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>collection</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/lookbook`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/18.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>lookbook</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/404`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/20.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>404</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/faq`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/other/22.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>FAQ</h3>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/blog/1.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>blog deatils</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/blog/blog-page`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/blog/3.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>left sidebar</h3>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 col-12 demo-box">
                                            <Link to={`${process.env.PUBLIC_URL}/blog/right-sidebar`} target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/special features/blog/4.jpg`}
                                                    className="img-fluid lazyload" />
                                            </Link>
                                            <h3>right sidebar</h3>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </section>


                <section id="admin" className="section-b-space pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="admin-title section-t-space pb-0">
                                    <div className="text-center">
                                        <h4>E-commerce admin template</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12 demo-box">
                        <a href="https://react.pixelstrap.com/multikart-admin/dashboard" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/admin/1.jpg`} className="img-fluid lazyload" />
                        </a>
                        <h3>dashboard</h3>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 demo-box">
                        <a href="https://react.pixelstrap.com/multikart-admin/products/physical/product-list" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/admin/2.jpg`} className="img-fluid lazyload" />
                        </a>
                        <h3>product list</h3>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 demo-box">
                        <a href="https://react.pixelstrap.com/multikart-admin/reports/report" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/admin/3.jpg`} className="img-fluid lazyload" />
                        </a>
                        <h3>report page</h3>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 demo-box">
                        <a href="https://react.pixelstrap.com/multikart-admin/media" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/admin/4.jpg`} className="img-fluid lazyload" />
                        </a>
                        <h3>media page</h3>
                    </div>
                </div>
                    </div>
                </section>
     


                {/*Email Template section*/}
                <section id="email" className="section-b-space email-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 left-part">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/email%20template/1.jpg`} alt=""
                                    className="img-fluid lazyload email-img" />
                                <div className="sticker">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/email%20template/sticker.png`} alt=""
                                        className="img-fluid lazyload" />
                                </div>
                            </div>
                            <div className="col-md-4 offset-md-1 text-center center-part">
                                <h5 className="title-landing">email template</h5>
                                <p className="pb-3">Multikart come with 4+ email template which include two order
                                    success template & two email template </p>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/email%20template/2.jpg`} alt=""
                                    className="img-fluid lazyload email-img full-img" />
                                <div className="res-img">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/email%20template/1.png`} alt=""
                                        className="img-fluid lazyload" />
                                </div>
                            </div>
                            <div className="col-md-3 offset-md-1 right-part">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/email%20template/3.jpg`} alt=""
                                    className="img-fluid lazyload email-img" />
                            </div>
                        </div>
                    </div>
                </section>


                {/*core feature section*/}
                <section id="core" className="main-feature section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="heading-title">
                                    <h5 className="title-landing">Core Features</h5>
                                    <p className="pb-3">And there is many more features.. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row key-feature">
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/1.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>react</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/2.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Css3</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Bootstrap</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/4.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Sass</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/5.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>W3 Validate</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/6.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Unlimited color filters</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/9.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Multilevel Menu</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/11.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Instagram shop</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/12.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Social Link</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/13.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Lookbook layout</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/14.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Google fonts</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/15.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Product Compare</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/16.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Tap to top</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/17.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Collection Grid</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/19.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>Well Documentation</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="theme-collection">
                                    <div>
                                        <div className="image-contain">
                                            <div className="set-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/21.png`} alt="fetures" />
                                            </div>
                                        </div>
                                        <h5>SEO Friendly</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Footer section*/}
                <section id="footer" className="section-b-space grey-bg footer">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="footer-section">
                                    <div>
                                        <ul className="rate-section">
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                        <h2>purchase the multikart <br />
                                            & create beautiful online store</h2>
                                        <a target="_blank"
                                            href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=3"
                                            className="btn btn-primary">purchase now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Tap To Top*/}
                <div className="tap-top">
                    <div>
                        <i className="fa fa-angle-double-up"></i>
                    </div>
                </div>

            </div>
        );
    }
}

export default Landing;
