import React, {Component} from 'react';
import Slider from "react-slick"

import Breadcrumb from "../../common/breadcrumb";

class ElementSlider extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Slider'}/>


                <div className="container">
                    <section className="section-b-space">
                        <Slider className="slide-1 home-slider">
                            <div>
                                <div className="home home7 p-center text-center bg-size blur-up lazyloaded">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        <h4>welcome to fashion</h4>
                                                        <h1>women fashion</h1>
                                                        <a href="#" className="btn btn-solid">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="home home8 p-center text-center bg-size blur-up lazyloaded">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        <h4>welcome to fashion</h4>
                                                        <h1>men fashion</h1>
                                                        <a href="#" className="btn btn-solid">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </section>
                </div>

                <div className="container section-b-space">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <h5 className="card-header">Classes</h5>
                                <div className="card-body">
                                    <h5 className="card-title">For Parallax Image - .parallax</h5>
                                    <h5>contain-align - .text-left, .text-center, .text-right</h5>
                                    <h5>contain-position - .p-left, .p-center, .p-right</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ElementSlider;