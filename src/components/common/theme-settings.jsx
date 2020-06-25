import React, {Component} from 'react';
import {Link} from "react-router-dom"
import { withTranslate } from 'react-redux-multilingual'

import {SlideUpDown} from "../../services/script"
import { ToastContainer } from 'react-toastify';

class ThemeSettings extends Component {

    constructor(props){
        super(props);

        this.state = {
            divName:'RTL',
            themeLayout: false
        }
    }


    /*=====================
     Tap on Top
     ==========================*/
    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (document.documentElement.scrollTop > 600) {
            document.querySelector(".tap-top").style = "display: block";
        } else {
            document.querySelector(".tap-top").style = "display: none";
        }
    }
    clickToTop(){
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }

    componentDidMount() {
        SlideUpDown('setting-title');
    }

    openSetting = () => {
        document.getElementById("setting_box").classList.add('open-setting');
        document.getElementById("setting-icon").classList.add('open-icon');
    }
    closeSetting = () => {
        document.getElementById("setting_box").classList.remove('open-setting');
        document.getElementById("setting-icon").classList.remove('open-icon');
    }

    // Color Picker
    changeColor(event, color){
        var elems = document.querySelectorAll(".color-box li");
        [].forEach.call(elems, function(elemt) {
            elemt.classList.remove('active');
        })

        event.target.classList.add('active');
        console.log(color)
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/`+color+`.css` );
    }

    ChangeRtl(divName){
        if(divName === 'RTL') {
            document.body.classList.add('rtl');
            this.setState({divName: 'LTR'});
        }else{
            document.body.classList.remove('rtl');
            this.setState({divName: 'RTL'});
        }
    }

    changeThemeLayout() {
        this.setState({
            themeLayout:!this.state.themeLayout
        })
    }

    render() {
        if(this.state.themeLayout){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
        let tap_to_top = {display: 'none'}

        return (
            <div>
                <a href="javascript:void(0)" onClick={() => this.openSetting()}>
                    <div className="setting-sidebar" id="setting-icon">
                        <div>
                            <i className="fa fa-cog" aria-hidden="true"></i>
                        </div>
                    </div>
                </a>
                <div id="setting_box" className="setting-box">
                    <a href="javascript:void(0)" className="overlay" onClick={() => this.closeSetting()}></a>
                    <div className="setting_box_body">
                        <div onClick={() => this.closeSetting()}>
                            <div className="sidebar-back text-left">
                                <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                            </div>
                        </div>
                        <div className="setting-body">
                            <div className="setting-title">
                                <h4>layout</h4>
                            </div>
                            <div className="setting-contant">
                                <div className="row demo-section">
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo1"></div>
                                            <div className="demo-text">
                                                <h4>Fashion</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/fashion`}
                                                            className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo21">
                                                <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div className="demo-text">
                                                <h4>furniture</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/furniture`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo7">
                                                <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div className="demo-text">
                                                <h4>kids</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/kids`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo48">
                                                <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div className="demo-text">
                                                <h4>pets</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/pets`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo10">
                                                <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div className="demo-text">
                                                <h4>vegetables</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/vegetables`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo6">
                                                <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div className="demo-text">
                                                <h4>watch</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/watch`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo11">
                                                <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div className="demo-text">
                                                <h4>beauty</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/beauty`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo16">
                                                <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div className="demo-text">
                                                <h4>electronics</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/electronic`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="setting-title">
                                <h4>shop</h4>
                            </div>
                            <div className="setting-contant">
                                <div className="row demo-section">
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo22"></div>
                                            <div className="demo-text">
                                                <h4>left sidebar</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo24"></div>
                                            <div className="demo-text">
                                                <h4>right sidebar</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/right-sidebar/collection`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo23"></div>
                                            <div className="demo-text">
                                                <h4>no sidebar</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/no-sidebar/collection`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo52"></div>
                                            <div className="demo-text">
                                                <h4>metro</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/metro/collection`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo53"></div>
                                            <div className="demo-text">
                                                <h4>full width</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/full-width/collection`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="setting-title">
                                <h4>product</h4>
                            </div>
                            <div className="setting-contant">
                                <div className="row demo-section">
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo33"></div>
                                            <div className="demo-text">
                                                <h4>left sidebar</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo36"></div>
                                            <div className="demo-text">
                                                <h4>right sidebar</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/right-sidebar/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo34"></div>
                                            <div className="demo-text">
                                                <h4>no sidebar</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/no-sidebar/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo34"></div>
                                            <div className="demo-text">
                                                <h4>col left</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/col-left/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo34"></div>
                                            <div className="demo-text">
                                                <h4>col right</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/col-right/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo34"></div>
                                            <div className="demo-text">
                                                <h4>accordian</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/accordian/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo34"></div>
                                            <div className="demo-text">
                                                <h4>column</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/column/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo34"></div>
                                            <div className="demo-text">
                                                <h4>left image</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-image/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo34"></div>
                                            <div className="demo-text">
                                                <h4>right image</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/right-image/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 text-center demo-effects">
                                        <div className="set-position">
                                            <div className="layout-container demo34"></div>
                                            <div className="demo-text">
                                                <h4>vertical</h4>
                                                <div className="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/vertical/product/1`}
                                                          className="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="setting-title">
                                <h4>color option</h4>
                            </div>
                            <div className="setting-contant">
                                <ul className="color-box">
                                    <li className="color1 active" onClick={(e) => this.changeColor(e, 'color1')}></li>
                                    <li className="color2" onClick={(e) => this.changeColor(e, 'color2')}></li>
                                    <li className="color3" onClick={(e) => this.changeColor(e, 'color3')}></li>
                                    <li className="color4" onClick={(e) => this.changeColor(e, 'color4')}></li>
                                    <li className="color5" onClick={(e) => this.changeColor(e, 'color5')}></li>
                                    <li className="color6" onClick={(e) => this.changeColor(e, 'color6')}></li>
                                    <li className="color7" onClick={(e) => this.changeColor(e, 'color7')}></li>
                                    <li className="color8" onClick={(e) => this.changeColor(e, 'color8')}></li>
                                    <li className="color9" onClick={(e) => this.changeColor(e, 'color9')}></li>
                                    <li className="color10" onClick={(e) => this.changeColor(e, 'color10')}></li>
                                    <li className="color11" onClick={(e) => this.changeColor(e, 'color11')}></li>
                                    <li className="color12" onClick={(e) => this.changeColor(e, 'color12')}></li>
                                    <li className="color13" onClick={(e) => this.changeColor(e, 'color13')}></li>
                                    <li className="color14" onClick={(e) => this.changeColor(e, 'color14')}></li>
                                    <li className="color15" onClick={(e) => this.changeColor(e, 'color15')}></li>
                                    <li className="color16" onClick={(e) => this.changeColor(e, 'color16')}></li>
                                    <li className="color17" onClick={(e) => this.changeColor(e, 'color17')}></li>
                                    <li className="color18" onClick={(e) => this.changeColor(e, 'color18')}></li>
                                </ul>
                            </div>
                            <div className="setting-title">
                                <h4>RTL</h4>
                            </div>
                            <div className="setting-contant">
                                <ul className="setting_buttons">
                                    <li className="active" id="ltr_btn">
                                        <a href={null} className="btn setting_btn" onClick={ () => this.ChangeRtl(this.state.divName)}>
                                            {this.state.divName}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="buy_btn">
                                <a href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=1"
                                   target="_blank" className="btn btn-block purchase_btn">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> purchase Multikart now!</a>
                                <a href="https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3"
                                   target="_blank" className="btn btn-block purchase_btn">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/angular.png`} alt="" className="img-fluid" /> Multikart Angular</a>
                                <a href="https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967"
                                   target="_blank" className="btn btn-block purchase_btn">
                                    <img src="" alt="" className="img-fluid" /> Multikart HTML</a>
                                <a href="https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1"
                                   target="_blank" className="btn btn-block purchase_btn">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/shopify.png`} alt="" className="img-fluid" /> Multikart Shopify</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-btn dark-light-btn">
                    <div className="dark-light">
                        <div
                            className="theme-layout-version"
                            onClick={() => this.changeThemeLayout()}
                        >{this.state.themeLayout?'Light':'Dark'}</div>
                    </div>
                </div>
                <div className="tap-top" onClick={this.clickToTop} style={tap_to_top}>
                    <div>
                        <i className="fa fa-angle-double-up"></i>
                    </div>
                </div>

                <ToastContainer/>
            </div>
        );
    }
}

export default withTranslate(ThemeSettings);
