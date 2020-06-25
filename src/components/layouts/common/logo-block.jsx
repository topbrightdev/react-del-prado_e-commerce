import React, { Component } from 'react';
import Slider from 'react-slick';

import {Slider6} from "../../../services/script";

class LogoBlock extends Component {

    render (){
        return (
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...Slider6} className="slide-6 no-arrow">
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/1.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/2.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/3.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/4.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/5.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/6.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/7.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/8.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LogoBlock;