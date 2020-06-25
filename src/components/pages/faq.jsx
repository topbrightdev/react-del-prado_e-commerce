import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

class Faq extends Component {

    constructor (props) {
        super (props)
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Faq'}/>
                
                
                {/*Dashboard section*/}
                <section className="faq-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="accordion theme-accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                    How can I downgrade to an earlier version of Dummy Content?
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>it look like readable English. Many desktop publishing packages and
                                                    web page editors now use Lorem Ipsum as their default model text,
                                                    and a search for 'lorem ipsum' will uncover many web sites still in
                                                    their infancy. Various versions have evolved over the years,All the
                                                    Lorem Ipsum generators on the Internet tend to repeat predefined
                                                    chunks as necessary, making this the first true generator on the
                                                    Internet. It uses a dictionary of over 200 Latin words, combined
                                                    with a handful of model sentence structures</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                    How can I upgrade from Shopify 2.5 to shopify 3?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>it look like readable English. Many desktop publishing packages and
                                                    web page editors now use Lorem Ipsum as their default model text,
                                                    and a search for 'lorem ipsum' will uncover many web sites still in
                                                    their infancy. Various versions have evolved over the years,All the
                                                    Lorem Ipsum generators on the Internet tend to repeat predefined
                                                    chunks as necessary, making this the first true generator on the
                                                    Internet. It uses a dictionary of over 200 Latin words, combined
                                                    with a handful of model sentence structures</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                    Under what license are Regular Labs extensions released?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>it look like readable English. Many desktop publishing packages and
                                                    web page editors now use Lorem Ipsum as their default model text,
                                                    and a search for 'lorem ipsum' will uncover many web sites still in
                                                    their infancy. Various versions have evolved over the years,All the
                                                    Lorem Ipsum generators on the Internet tend to repeat predefined
                                                    chunks as necessary, making this the first true generator on the
                                                    Internet. It uses a dictionary of over 200 Latin words, combined
                                                    with a handful of model sentence structures</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseFour"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                    What is the Regular Labs Library?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>it look like readable English. Many desktop publishing packages and
                                                    web page editors now use Lorem Ipsum as their default model text,
                                                    and a search for 'lorem ipsum' will uncover many web sites still in
                                                    their infancy. Various versions have evolved over the years,All the
                                                    Lorem Ipsum generators on the Internet tend to repeat predefined
                                                    chunks as necessary, making this the first true generator on the
                                                    Internet. It uses a dictionary of over 200 Latin words, combined
                                                    with a handful of model sentence structures</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFive">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseFive"
                                                        aria-expanded="false" aria-controls="collapseFive">
                                                    Can I turn on/off some blocks on the page?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>it look like readable English. Many desktop publishing packages and
                                                    web page editors now use Lorem Ipsum as their default model text,
                                                    and a search for 'lorem ipsum' will uncover many web sites still in
                                                    their infancy. Various versions have evolved over the years,All the
                                                    Lorem Ipsum generators on the Internet tend to repeat predefined
                                                    chunks as necessary, making this the first true generator on the
                                                    Internet. It uses a dictionary of over 200 Latin words, combined
                                                    with a handful of model sentence structures</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingSix">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseSix"
                                                        aria-expanded="false" aria-controls="collapseSix">
                                                    What is included in the theme package?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>it look like readable English. Many desktop publishing packages and
                                                    web page editors now use Lorem Ipsum as their default model text,
                                                    and a search for 'lorem ipsum' will uncover many web sites still in
                                                    their infancy. Various versions have evolved over the years,All the
                                                    Lorem Ipsum generators on the Internet tend to repeat predefined
                                                    chunks as necessary, making this the first true generator on the
                                                    Internet. It uses a dictionary of over 200 Latin words, combined
                                                    with a handful of model sentence structures</p>
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

export default Faq