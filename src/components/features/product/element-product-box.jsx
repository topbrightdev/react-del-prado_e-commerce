import React, {Component} from 'react';
import {connect} from "react-redux";
import Slider from "react-slick"

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import ProductStyleOne from "./common/product-style-one";
import {getVisibleproducts} from "../../../services";
import {addToCart, addToCompare, addToWishlist} from "../../../actions";
import {Product4, Product5} from "../../../services/script";
import ProductStyleTwo from "./common/product-style-two";
import ProductStyleThree from "./common/product-style-three";
import ProductStyleFour from "./common/product-style-four";
import ProductStyleFive from "./common/product-style-five";
import ProductStyleSix from "./common/product-style-six";
import ProductStyleSeven from "./common/product-style-seven";
import ProductStyleEight from "./common/product-style-eight";
import ProductStyleNine from "./common/product-style-nine";
import ProductStyleTen from "./common/product-style-ten";
import ProductStyleEleven from "./common/product-style-eleven";

class ElementProductBox extends Component {

    render (){
        const {products, addToCart, symbol, addToWishlist, addToCompare} = this.props;
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'productbox'}/>

                <section className=" ratio_asos section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 1</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                { products.slice(0, 4).map((product, index) =>
                                    <div className="col-xl-3 col-md-6 col-grid-box">
                                    <ProductStyleOne product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={addToCart} key={index}/>
                                    </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" ratio_square light-layout section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 2</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    { products.slice(5, 9).map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleTwo product={product} symbol={symbol}
                                                             onAddToCompareClicked={() => addToCompare(product)}
                                                             onAddToWishlistClicked={() => addToWishlist(product)}
                                                             onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_asos section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 3</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    { products.slice(16, 20).map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleThree product={product} symbol={symbol}
                                                             onAddToCompareClicked={() => addToCompare(product)}
                                                             onAddToWishlistClicked={() => addToWishlist(product)}
                                                             onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_asos metro-section portfolio-section light-layout section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 4</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    { products.slice(10, 15).map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleFour product={product} symbol={symbol}
                                                               onAddToCompareClicked={() => addToCompare(product)}
                                                               onAddToWishlistClicked={() => addToWishlist(product)}
                                                               onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_square section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 5</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    { products.slice(20, 25).map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleFive product={product} symbol={symbol}
                                                              onAddToCompareClicked={() => addToCompare(product)}
                                                              onAddToWishlistClicked={() => addToWishlist(product)}
                                                              onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_square tools-grey light-layout section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 6</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product5} className="product-5 product-m no-arrow">
                                    { products.slice(25, 30).map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleSix product={product} symbol={symbol}
                                                              onAddToCompareClicked={() => addToCompare(product)}
                                                              onAddToWishlistClicked={() => addToWishlist(product)}
                                                              onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_asos game-product section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 7</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product5} className="product-5 game-product product-m no-arrow">
                                    { products.slice(30, 36).map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleSeven product={product} symbol={symbol}
                                                             onAddToCompareClicked={() => addToCompare(product)}
                                                             onAddToWishlistClicked={() => addToWishlist(product)}
                                                             onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_square gym-product light-layout section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 8</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="no-slider row">
                                    { products.slice(5, 9).map((product, index) =>
                                        <ProductStyleEight product={product} symbol={symbol}
                                           onAddToCompareClicked={() => addToCompare(product)}
                                           onAddToWishlistClicked={() => addToWishlist(product)}
                                           onAddToCartClicked={addToCart} key={index}/>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_asos absolute-product section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 9</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product5} className="product-5 product-m no-arrow">
                                    { products.slice(5, 9).map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleNine product={product} symbol={symbol}
                                               onAddToCompareClicked={() => addToCompare(product)}
                                               onAddToWishlistClicked={() => addToWishlist(product)}
                                               onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_square j-box light-layout section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 10</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    { products.slice(5, 9).map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleTen product={product} symbol={symbol}
                                              onAddToCompareClicked={() => addToCompare(product)}
                                              onAddToWishlistClicked={() => addToWishlist(product)}
                                              onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ratio_square j-box pets-box section-b-space">
                    <div className="title2">
                        <h2 className="title-inner2">product style 11</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    { products.slice(5, 9).map((product, index) =>
                                        <div className="col-xl-3 col-md-6 col-grid-box">
                                            <ProductStyleEleven product={product} symbol={symbol}
                                                 onAddToCompareClicked={() => addToCompare(product)}
                                                 onAddToWishlistClicked={() => addToWishlist(product)}
                                                 onAddToCartClicked={addToCart} key={index}/>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: getVisibleproducts(state.data, state.filters),
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps, {addToCart, addToWishlist, addToCompare}
)(ElementProductBox)