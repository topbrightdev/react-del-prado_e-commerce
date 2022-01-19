import React, {Component} from 'react';

//import Custom Components
import Breadcrumb from "../../common/breadcrumb";

class ElementBanner extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Banner'}/>

                {/*Two Banner*/}
                <section className="pb-0 ratio2_1">
                    <div className="container">
                        <div className="row partition2">
                            <div className="col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-right text-center">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>men</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-right text-center">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Two Banner End*/}

                {/*Three Banner*/}
                <section className="banner-goggles ratio2_1">
                    <div className="container">
                        <div className="row partition3">
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/5.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h4>10% off</h4>
                                                <h2>speaker</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/6.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h4>10% off</h4>
                                                <h2>earplug</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/7.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h4>50% off</h4>
                                                <h2>best deal</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Three Banner End*/}

                {/*Four Banner*/}
                <section className=" ratio2_1">
                    <div className="container">
                        <div className="row partition4">
                            <div className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-4">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>men</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-4">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-4">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-4">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Four Banner End*/}

                {/*Absolute Banner*/}
                <section className="banner-furniture absolute_banner ratio3_2">
                    <div className="container">
                        <div className="row partition3">
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-left text-left">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/5.jpg`} alt=""
                                             className="img-fluid blur-up lazyload bg-img" />
                                            <div className="absolute-contain">
                                                <h3>casual collection</h3>
                                                <h4>festive sale</h4>
                                            </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-left text-left">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/6.jpg`} alt=""
                                             className="img-fluid blur-up lazyload bg-img" />
                                            <div className="absolute-contain">
                                                <h3>going out collection</h3>
                                                <h4>upto 80% off</h4>
                                            </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-left text-left">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/8.jpg`} alt=""
                                             className="img-fluid blur-up lazyload bg-img" />
                                            <div className="absolute-contain">
                                                <h3>shoes & sandle</h3>
                                                <h4>new collection</h4>
                                            </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Absolute Banner End*/}

                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <h5 className="card-header">Classes</h5>
                                    <div className="card-body">
                                        <h5>Add class with collection-banner</h5>
                                        <h5>contain-align - .text-left, .text-center, .text-right</h5>
                                        <h5>contain-position - .p-left, .p-center, .p-right</h5>
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


export default ElementBanner;