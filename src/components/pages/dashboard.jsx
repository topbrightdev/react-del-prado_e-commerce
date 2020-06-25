import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

class Dashboard extends Component {

    constructor (props) {
        super (props)
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Dashboard'}/>
                
                
                {/*Dashboard section*/}
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="account-sidebar">
                                    <a className="popup-btn">
                                        my account
                                    </a>
                                </div>
                                <div className="dashboard-left">
                                    <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            <li className="active"><a href='#'>Account Info</a></li>
                                            <li><a href="#">Address Book</a></li>
                                            <li><a href="#">My Orders</a></li>
                                            <li><a href="#">My Wishlist</a></li>
                                            <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Change Password</a></li>
                                            <li className="last"><a href="#">Log Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                        <div className="page-title">
                                            <h2>My Dashboard</h2>
                                        </div>
                                        <div className="welcome-msg">
                                            <p>Hello, MARK JECNO !</p>
                                            <p>From your My Account Dashboard you have the ability to view a snapshot of
                                                your recent account activity and update your account information. Select
                                                a link below to view or edit information.</p>
                                        </div>
                                        <div className="box-account box-info">
                                            <div className="box-head">
                                                <h2>Account Information</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Contact Information</h3>
                                                            <a href="#">Edit</a>
                                                        </div>
                                                        <div className="box-content">
                                                            <h6>MARK JECNO</h6>
                                                            <h6>MARk-JECNO@gmail.com</h6>
                                                            <h6><a href="#">Change Password</a></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Newsletters</h3>
                                                            <a href="#">Edit</a>
                                                        </div>
                                                        <div className="box-content">
                                                            <p>
                                                                You are currently not subscribed to any newsletter.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Address Book</h3>
                                                        <a href="#">Manage Addresses</a>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <h6>Default Billing Address</h6>
                                                            <address>
                                                                You have not set a default billing address.<br/>
                                                                <a href="#">Edit Address</a>
                                                            </address>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <h6>Default Shipping Address</h6>
                                                            <address>
                                                                You have not set a default shipping address.<br />
                                                                <a href="#">Edit Address</a>
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Dashboard