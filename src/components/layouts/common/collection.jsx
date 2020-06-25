import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux'

import {getTrendingCollection} from '../../../services/index'
import {Product4, Product5} from '../../../services/script'
import {addToCart, addToWishlist, addToCompare} from "../../../actions/index";
import ProductItem from '../../features/product/common/product-style-five';

class TopCollection extends Component {

    render (){

        const {items, symbol, addToCart, addToWishlist, addToCompare, type} = this.props;

        var properties;
        if(type === 'kids'){
            properties = Product5
        }else{
            properties = Product4
        }

        return (
            <div>
                {/*Paragraph*/}
                <div className="title1  section-t-space">
                    <h4>special offer</h4>
                    <h2 className="title-inner1">top collection</h2>
                </div>
                {/*Paragraph End*/}
                <section className="section-b-space p-t-0">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...properties} className="product-4 product-m no-arrow">
                                    { items.map((product, index ) =>
                                        <div key={index}>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} />
                                        </div>)
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    items: getTrendingCollection(state.data.products, ownProps.type),
    symbol: state.data.symbol
})

export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (TopCollection);