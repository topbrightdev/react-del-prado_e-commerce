import React, {Component} from 'react';

import Breadcrumb from "../../common/breadcrumb";

class ElementTitle extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Title'}/>

                <section className="section-b-space">
                    <div className="title1">
                        <h4>recent story</h4>
                        <h2 className="title-inner1">trending products</h2>
                    </div>

                    <div className="title2">
                        <h4>recent story</h4>
                        <h2 className="title-inner2">trending products</h2>
                    </div>

                    <div className="title3">
                        <h4>recent story</h4>
                        <h2 className="title-inner3">trending products</h2>
                        <div className="line"></div>
                    </div>

                    <div className="title4">
                        <h2 className="title-inner4">trending products</h2>
                        <div className="line">
                        <span>
                        </span>
                        </div>
                    </div>

                    <div className="title1 title5">
                        <h4>recent story</h4>
                        <h2 className="title-inner1">trending products</h2>
                        <hr role="tournament6" />
                    </div>

                </section>
            </div>
        )
    }
}


export default ElementTitle;