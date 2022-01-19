import React, {Component} from 'react';
import Slider from "react-slick"

import Breadcrumb from "../../common/breadcrumb";
import { Slider6, Slider4} from "../../../services/script"

class ElementCategory extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Category'}/>

                {/*Category One*/}
                <div className="container">
                    <section className="section-b-space">
                        <div className="row">
                            <div className="col">
                                <Slider {...Slider6} className="slide-6 no-arrow">
                                    <div className="category-block">
                                        <a href="#">
                                            <div className="category-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat1.png`} alt="" /></div>
                                        </a>
                                        <div className="category-details">
                                            <a href="#">
                                                <h5>sport shoes</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <a href="#">
                                            <div className="category-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat2.png`} alt="" /></div>
                                        </a>
                                        <div className="category-details">
                                            <a href="#">
                                                <h5>casual shoes</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <a href="#">
                                            <div className="category-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat3.png`} alt="" /></div>
                                        </a>
                                        <div className="category-details">
                                            <a href="#">
                                                <h5>formal shoes</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <a href="#">
                                            <div className="category-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat4.png`} alt="" /></div>
                                        </a>
                                        <div className="category-details">
                                            <a href="#">
                                                <h5>flat</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <a href="#">
                                            <div className="category-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat5.png`} alt="" /></div>
                                        </a>
                                        <div className="category-details">
                                            <a href="#">
                                                <h5>heels</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <a href="#">
                                            <div className="category-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat6.png`} alt="" /></div>
                                        </a>
                                        <div className="category-details">
                                            <a href="#">
                                                <h5>boots</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <a href="#">
                                            <div className="category-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat2.png`} alt="" /></div>
                                        </a>
                                        <div className="category-details">
                                            <a href="#">
                                                <h5>casual shoes</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <a href="#">
                                            <div className="category-image">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat3.png`} alt="" /></div>
                                        </a>
                                        <div className="category-details">
                                            <a href="#">
                                                <h5>casual shoes</h5>
                                            </a>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </section>
                </div>

                {/*Category Two*/}
                <section className="p-0 ratio2_1">
                    <div className="container-fluid">
                        <div className="row category-border">
                            <div className="col-sm-4 border-padding">
                                <div className="category-banner">
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/cat1.png`} className="img-fluid blur-up lazyload bg-img"
                                             alt="" />
                                    </div>
                                    <div className="category-box">
                                        <a href="#">
                                            <h2>men</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 border-padding">
                                <div className="category-banner">
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/cat2.png`} className="img-fluid blur-up lazyload bg-img"
                                             alt="" />
                                    </div>
                                    <div className="category-box">
                                        <a href="#">
                                            <h2>women</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 border-padding">
                                <div className="category-banner">
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/cat3.png`} className="img-fluid blur-up lazyload bg-img"
                                             alt="" />
                                    </div>
                                    <div className="category-box">
                                        <a href="#">
                                            <h2>kids</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Category Three*/}
                <div className="container category-button">
                    <section className="section-b-space">
                        <div className="row partition1">
                            <div className="col"><a href="#" className="btn btn-outline btn-block">airbag</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">burn bag</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">briefcase</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">carpet bag</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">money bag</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">tucker bag</a></div>
                        </div>
                    </section>
                </div>

                {/*Category Four*/}
                <div className="category-bg ratio_square">
                    <div className="container-fluid p-0">
                        <div className="row order-section">
                            <div className="col-sm-4 p-0">
                                <a href="#" className="image-block">
                                    <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/cat1.jpg`} className="img-fluid blur-up lazyload bg-img" />
                                </a>
                            </div>
                            <div className="col-sm-4 p-0">
                                <div className="contain-block even">
                                    <div>
                                        <h6>new products</h6>
                                        <a href="#">
                                            <h2>zipper storage bag</h2>
                                        </a><a href="#" className="btn btn-solid category-btn">-80% off</a>
                                        <a href="#">
                                            <h6><span>shop now</span></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 p-0">
                                <a href="#" className="image-block">
                                    <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/cat2.jpg`} className="img-fluid blur-up lazyload bg-img" /></a>
                            </div>
                            <div className="col-sm-4 p-0">
                                <div className="contain-block">
                                    <div>
                                        <h6>on sale</h6>
                                        <a href="#">
                                            <h2>tucker bag</h2>
                                        </a> <a href="#" className="btn btn-solid category-btn">save 30% off</a>
                                        <a href="#">
                                            <h6><span>shop now</span></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 p-0">
                                <a href="#" className="image-block even">
                                    <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/cat3.jpg`} className="img-fluid blur-up lazyload bg-img" /></a>
                            </div>
                            <div className="col-sm-4 p-0">
                                <div className="contain-block">
                                    <div>
                                        <h6>summer sale</h6>
                                        <a href="#">
                                            <h2>gate check bag</h2>
                                        </a> <a href="#" className="btn btn-solid category-btn">minimum 50% off</a>
                                        <a href="#">
                                            <h6><span>shop now</span></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Category Five*/}
                <section className="ratio_portrait">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Slider4} className="slide-4 category-m no-arrow">
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat1.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>watch models</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">d1 milano</a></li>
                                                    <li><a href="#">damaskeening</a></li>
                                                    <li><a href="#">diving watch</a></li>
                                                    <li><a href="#">dollar watch</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat2.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>calculator watch</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">Shock-resistant watch</a></li>
                                                    <li><a href="#">Skeleton watch</a></li>
                                                    <li><a href="#">Slow watch</a></li>
                                                    <li><a href="#">Solar-powered watch</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                    <div className="category-wrapper">
                                        <div>
                                            <div>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat3.png`}
                                                     className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <h4>Antimagnetic watch</h4>
                                            <ul className="category-link">
                                                <li><a href="#">Watchmaking conglomerates</a></li>
                                                <li><a href="#">Breitling SA</a></li>
                                                <li><a href="#">Casio watches</a></li>
                                                <li><a href="#">Citizen Watch</a></li>
                                            </ul>
                                            <a href="#" className="btn btn-outline">view more</a></div>
                                    </div>
                                    <div className="category-wrapper">
                                        <div>
                                            <div>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat2.png`}
                                                     className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <h4>History of watches</h4>
                                            <ul className="category-link">
                                                <li><a href="#">Manufacture d'horlogerie</a></li>
                                                <li><a href="#">Mechanical watch</a></li>
                                                <li><a href="#">Microbrand watches</a></li>
                                                <li><a href="#">MIL-W-46374</a></li>
                                            </ul>
                                            <a href="#" className="btn btn-outline">view more</a></div>
                                    </div>
                                    <div className="category-wrapper">
                                        <div>
                                            <div>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat1.png`}
                                                     className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <h4>watch models</h4>
                                            <ul className="category-link">
                                                <li><a href="#">d1 milano</a></li>
                                                <li><a href="#">damaskeening</a></li>
                                                <li><a href="#">diving watch</a></li>
                                                <li><a href="#">dollar watch</a></li>
                                            </ul>
                                            <a href="#" className="btn btn-outline">view more</a></div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Category Six*/}
                <section className="section-b-space">
                    <div className="container">
                        <div className="row background">
                            <div className="col">
                                <a href="#">
                                    <div className="contain-bg">
                                        <h4 data-hover="size 06">size 06</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <div className="contain-bg">
                                        <h4>size 07</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <div className="contain-bg">
                                        <h4>size 08</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <div className="contain-bg">
                                        <h4>size 09</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <div className="contain-bg">
                                        <h4>size 10</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}


export default ElementCategory;