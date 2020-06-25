import React, {Component} from "react";
import Slider from "react-slick";

import "../common/index.scss";

// import custom Components
import ProductListing from "./common/product-listing";
import Breadcrumb from "../common/breadcrumb";
import FilterBar from "./common/filter-bar";

class CollectionNoSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutColumns: 3,
      category: null,
    };
  }

  LayoutViewClicked(colums) {
    this.setState({
      layoutColumns: colums,
    });
  }

  componentWillMount() {
    if (this.props.location.category) {
      const category = this.props.location.category;
      console.log(category);
      this.setState({...category});
    }
  }
  render() {
    return (
      <div>
        <Breadcrumb title={"Collection"} />

        {/*Section Start*/}
        <section className="section-b-space">
          <div className="collection-wrapper">
            <div className="container">
              <div className="row">
                <div className="collection-content col">
                  <div className="page-main-content">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="top-banner-wrapper">
                            <a href="#">
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpeg`}
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="collection-product-wrapper">
                            <div className="product-top-filter">
                              <div className="container-fluid p-0">
                                <div className="row">
                                  <div className="col-12">
                                    <FilterBar
                                      onLayoutViewClicked={(colmuns) =>
                                        this.LayoutViewClicked(colmuns)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="product-wrapper-grid">
                              <div className="container-fluid">
                                <div className="row">
                                  <ProductListing
                                    colSize={this.state.layoutColumns}
                                  />
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
            </div>
          </div>
        </section>
        {/*Section End*/}
      </div>
    );
  }
}

export default CollectionNoSideBar;
