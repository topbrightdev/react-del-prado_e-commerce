import React, {Component} from 'react';

import Breadcrumb from "../../common/breadcrumb";
import {
    svgoffer,
    svgFreeShipping,
    svgservice,
    svgpayment
} from "../../../services/script"

class ElementService extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Category'}/>

                {/*Service One*/}
                <div className="container section-t-space">
                    <section className="service border-section small-section ">
                        <div className="row">
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.png`} alt=""/>
                                    <div className="media-body">
                                        <h4>free shipping</h4>
                                        <p>free shipping world wide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service2.png`} alt=""/>
                                    <div className="media-body">
                                        <h4>24 X 7 service</h4>
                                        <p>online service for new customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service3.png`} alt=""/>
                                    <div className="media-body">
                                        <h4>festival offer</h4>
                                        <p>new online special festival offer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/*Service Two*/}
                <div className="container">
                    <section className="service section-b-space  border-section border-top-0">
                        <div className="row partition4 ">
                            <div className="col-lg-3 col-md-6 service-block1">
                                <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                <h4>free shipping</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div>
                            <div className="col-lg-3 col-md-6 service-block1 ">
                                <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                <h4>24 X 7 service</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div>
                            <div className="col-lg-3 col-md-6 service-block1 border border-0">
                                <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                <h4>festival offer</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div>
                            <div className="col-lg-3 col-md-6 service-block1 border border-0">
                                <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
                                <h4>online payment</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/*Service Three*/}
                <section className=" tools-service section-b-space">
                    <div className="container">
                        <div className="service p-0 ">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 service-block">
                                    <div className="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                        <div className="media-body">
                                            <h4>free shipping</h4>
                                            <p>free shipping world wide</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 service-block">
                                    <div className="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                        <div className="media-body">
                                            <h4>24 X 7 service</h4>
                                            <p>online service for new customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 service-block">
                                    <div className="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                        <div className="media-body">
                                            <h4>festival offer</h4>
                                            <p>new online special festival offer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 service-block">
                                    <div className="media border-0 m-0">
                                        <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
                                        <div className="media-body">
                                            <h4>online payment</h4>
                                            <p>Contrary to popular belief.</p>
                                        </div>
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


export default ElementService;