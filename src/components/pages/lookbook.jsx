import React, {Component} from 'react';
import Slider from 'react-slick';

import Breadcrumb from "../common/breadcrumb";

class aboutUs extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Lookbook'}/>
                
                
                {/*about section*/}
                <div className="container-fluid lookbook-section lookbook">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row lookbook-img">
                                <div className="col-12">
                                    <div className="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/men.jpg`} alt="" className="img-fluid" />
                                            <div className="lookbook-dot dot5">
                                                <span>1</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/7-a1.jpg`} className="img-fluid" alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>100$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="lookbook-dot dot6">
                                                <span>2</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/7-a1.jpg`} className="img-fluid" alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>150$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/6.jpg`} alt="" className="img-fluid" />
                                            <div className="lookbook-dot dot7">
                                                <span>1</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/6-a1.jpg`} className="img-fluid" alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>89$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="lookbook-dot dot8">
                                                <span>2</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/6-a2.jpg`} className="img-fluid" alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>159$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row lookbook-img">
                                <div className="col-12">
                                    <div className="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/3.jpg`} alt="" className="img-fluid" />
                                            <div className="lookbook-dot dot9">
                                                <span>1</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/pro3/33.jpg`} className="img-fluid"
                                                             alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>181$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="lookbook-dot dot10">
                                                <span>2</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/3-a2.jpg`} className="img-fluid"
                                                             alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>111$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/5.jpg`} alt="" className="img-fluid" />
                                            <div className="lookbook-dot dot11">
                                                <span>1</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/5-a2.jpg`} className="img-fluid"
                                                             alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>173$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="lookbook-dot dot12">
                                                <span>2</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/5-a1.jpg`} className="img-fluid"
                                                             alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>99$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row lookbook-img">
                                <div className="col-12">
                                    <div className="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/4.jpg`} alt="" className="img-fluid" />
                                            <div className="lookbook-dot dot13">
                                                <span>1</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/4-a3.jpg`} className="img-fluid"
                                                             alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>199$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="lookbook-dot dot14">
                                                <span>2</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/4-a4.jpg`} className="img-fluid"
                                                             alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>59$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/2.jpg`} alt="" className="img-fluid" />
                                            <div className="lookbook-dot dot15">
                                                <span>1</span>
                                                <a href="#">
                                                    <div className="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/pro3/2.jpg`} className="img-fluid"
                                                             alt="" />
                                                            <div className="dot-info">
                                                                <h5 className="title">tee</h5>
                                                                <h5>182$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default aboutUs