import React, {Component} from 'react';
import Slider from "react-slick"
import {connect} from "react-redux";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import ProductStyleOne from "./common/product-style-one";
import {getVisibleproducts} from "../../../services";
import {addToCart, addToCompare, addToWishlist} from "../../../actions";
import {Product4} from "../../../services/script";
import SpecialProduct from "../../layouts/common/products";

class ElementProductTab extends Component {

    render (){
        const {products, addToCart, symbol, addToWishlist, addToCompare} = this.props;
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'product Slider'}/>

                <SpecialProduct/>

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
)(ElementProductTab)