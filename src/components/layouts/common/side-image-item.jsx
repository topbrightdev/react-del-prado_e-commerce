import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


class SideImageItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            image: ''
        }
    }

    onClickHandle(img) {
        this.setState({ image : img} );
    }

    render() {
        const {product, symbol} = this.props;

        let RatingStars = []
        for(var i = 0; i < product.rating; i++) {
            RatingStars.push(<i className="fa fa-star" key={i}></i>)
        }
        return (
            <div className="product-box2">
                <div className="media">
                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} ><img
                        src={`${
                            product.variants?
                                this.state.image?this.state.image:product.variants[0].images
                            :product.pictures[0]
                        }`}
                        className="img-fluid lazyload bg-img"
                        alt="" /></Link>
                    <div className="media-body align-self-center">
                        <div>
                            <div className="rating">
                                {RatingStars}
                            </div>
                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}>
                                <h6>{product.name}</h6>
                            </Link>
                            <h4>{symbol}{product.price-(product.price*product.discount/100)}
                                <del><span className="money">{symbol}{product.price}</span></del>
                            </h4>
                            {product.variants?
                                <ul className="color-variant">
                                    {product.variants.map((vari, i) => {
                                        return (
                                            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)
                                    })}
                                </ul>:''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideImageItem;