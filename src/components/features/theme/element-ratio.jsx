import React, {Component} from 'react';
import Slider from "react-slick";

import Breadcrumb from "../../common/breadcrumb";
import {Product4} from "../../../services/script";

class ElementRatio extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Title'}/>

                <section className=" ratio_asos section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">Ratio ASOS</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html">
                                                    <img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/27.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="back">
                                                <a href="product-page(no-sidebar).html">
                                                    <img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/28.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button
                                                    data-toggle="modal"
                                                    data-target="#addtocart"
                                                    title="Add to cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist">
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                </a>
                                                <a href="#"
                                                    data-toggle="modal"
                                                    data-target="#quick-view"
                                                    title="Quick View">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="compare.html" title="Compare">
                                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                            <ul className="color-variant">
                                                <li className="bg-light0"></li>
                                                <li className="bg-light1"></li>
                                                <li className="bg-light2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="lable-block"><span className="lable3">new</span> <span
                                                className="lable4">on sale</span></div>
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/1.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="back">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/2.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist">
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="compare.html" title="Compare">
                                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                            <ul className="color-variant">
                                                <li className="bg-light0"></li>
                                                <li className="bg-light1"></li>
                                                <li className="bg-light2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/33.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="back">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/34.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist">
                                                    <i className="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#"
                                                    data-toggle="modal"
                                                    data-target="#quick-view"
                                                    title="Quick View">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="compare.html" title="Compare">
                                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                            <ul className="color-variant">
                                                <li className="bg-light0"></li>
                                                <li className="bg-light1"></li>
                                                <li className="bg-light2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="lable-block"><span className="lable3">new</span> <span
                                                className="lable4">on sale</span></div>
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/35.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="back">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/36.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist">
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                </a>
                                                <a href="#"
                                                    data-toggle="modal"
                                                    data-target="#quick-view"
                                                    title="Quick View">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="compare.html" title="Compare">
                                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                            <ul className="color-variant">
                                                <li className="bg-light0"></li>
                                                <li className="bg-light1"></li>
                                                <li className="bg-light2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_square gym-product light-layout section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">Ratio Square</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="no-slider row">
                                    <div className="product-box ">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/gym/pro/1.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart"
                                                        title="Add to cart"><i className="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i
                                                    className="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view"
                                                   title="Quick View"><i className="fa fa-search"
                                                                         aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div className="product-box ">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/gym/pro/2.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart"
                                                        title="Add to cart"><i className="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i
                                                    className="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view"
                                                   title="Quick View"><i className="fa fa-search"
                                                                         aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div className="product-box ">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/gym/pro/3.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart"
                                                        title="Add to cart"><i className="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i
                                                    className="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view"
                                                   title="Quick View"><i className="fa fa-search"
                                                                         aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div className="product-box ">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/gym/pro/4.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart"
                                                        title="Add to cart"><i className="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i
                                                    className="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view"
                                                   title="Quick View"><i className="fa fa-search"
                                                                         aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_portrait metro-section portfolio-section section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">Ratio Portrait</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/fashion/pro/1.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i className="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    className="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/fashion/pro/2.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i className="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    className="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/fashion/pro/3.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i className="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    className="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/fashion/pro/4.jpg`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i className="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    className="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="ratio_landscape game-product light-layout section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">Ratio Landscape</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/11.jpg`}
                                                                                             className="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i className="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    className="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div className="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="lable-block">
                                                <span className="lable3">new</span>
                                                <span className="lable4">on sale</span>
                                            </div>
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/12.jpg`}
                                                                                             className="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i className="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    className="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div className="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00 <del>$600.00</del></h4>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/13.jpg`}
                                                                                             className="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i className="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    className="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div className="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                            <div className="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="lable-block">
                                                <span className="lable3">new</span>
                                                <span className="lable4">on sale</span>
                                            </div>
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/14.jpg`}
                                                                                             className="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i className="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    className="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div className="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="lable-block">
                                                <span className="lable3">new</span>
                                                <span className="lable4">on sale</span>
                                            </div>
                                            <div className="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/15.jpg`}
                                                                                             className="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i className="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    className="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i className="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div className="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
        
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <h5 className="card-header">Ratio Classes</h5>
                                    <div className="card-body">
                                        <h5>If you use image as background than add class ".bg-img" in image and add below class
                                            in parent.</h5>
                                        <h5>.ratio_40 - 40%</h5>
                                        <h5>.ratio_45 - 45%</h5>
                                        <h5>.ratio2_1 - 50%</h5>
                                        <h5>.ratio2_3 - 60%</h5>
                                        <h5>.ratio3_2 - 66.66%</h5>
                                        <h5>.ratio_landscape - 75%</h5>
                                        <h5>.ratio_square - 100%</h5>
                                        <h5>.ratio_asos - 127.77%</h5>
                                        <h5>.ratio_portrait - 150%</h5>
                                        <h5>.ratio1_2 - 200%</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        
            </div>
        )
    }
}


export default ElementRatio;