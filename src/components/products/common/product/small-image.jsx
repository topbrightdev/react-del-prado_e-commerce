
import React, { Component } from 'react';
import Slider from 'react-slick';

class SmallImages extends Component {
    constructor (props) {
        super(props);
        this.state = {
            nav2: null
        }
    }
    componentDidMount() {
        this.setState({
            nav2: this.slider2
        });
    }

    render() {
        const { item, settings } = this.props;

        var productsnav = settings;

        return (
            <div className="row">
                <div className="col-12 p-0">
                    <Slider {...productsnav} asNavFor={this.props.navOne} ref={slider => (this.slider2 = slider)} className="slider-nav">
                        {item.variants?
                        item.variants.map((vari, index) =>
                            <div key={index}>
                                <img src={`${vari.images}`} key={index} alt=""  className="img-fluid" />
                            </div>
                        ):
                            item.pictures.map((vari, index) =>
                                <div key={index}>
                                    <img src={`${vari}`} key={index} alt=""  className="img-fluid" />
                                </div>
                            )}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default SmallImages;