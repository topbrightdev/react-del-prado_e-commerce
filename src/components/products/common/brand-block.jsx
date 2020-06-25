import React, {Component} from 'react';
import { connect } from 'react-redux'
import { SlideToggle } from 'react-slide-toggle';


class BrandBlock extends Component {


    render (){
        return (
            <div className="collection-filter-block">
                <div className="collection-mobile-back">
                    <span className="filter-back">
                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                    </span>
                </div>
                <SlideToggle>
                    {({onToggle, setCollapsibleElement}) => (
                        <div className="collection-collapse-block">
                            <h3 className="collapse-block-title" onClick={onToggle}>brand</h3>
                            <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                <div className="collection-brand-filter">
                                    <ul className="category-list">
                                        <li><a href="#">clothing</a></li>
                                        <li><a href="#">bags</a></li>
                                        <li><a href="#">footwear</a></li>
                                        <li><a href="#">watches</a></li>
                                        <li><a href="#">accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </SlideToggle>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(
    mapStateToProps,
    null
)(BrandBlock)
