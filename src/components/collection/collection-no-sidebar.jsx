import React, {Component} from "react";

import "../common/index.scss";

// import custom Components
import ProductListing from "../products/product-listing";
import Breadcrumb from "../breadcrumb";
import FilterBar from "../products/filters/filter-bar";
import {getAllProducts} from "../../actions/indexO";
import {connect} from "react-redux";

class CollectionNoSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutColumns: 3,
      category: null,
      prodcutsToShow: [],
    };
  }

  LayoutViewClicked(colums) {
    this.setState({
      layoutColumns: colums,
    });
  }

  componentDidMount() {
    if (this.props.location.category !== undefined) {
      if (this.props.location.category !== this.state.category) {
        const category = this.props.location.category;
        this.setState(() => {
          return {category: category};
        });
        //  this.setState({...category});
      }
    } else {
      if (this.props.state.data3.productsToShow) {
        const items = this.props.state.data3.productsToShow;
        var category = null;
        var categories = [];
        if (items.length > 0) {
          items[0].categories.map((c) => {
            if (!category) {
              category = c.name;
            }
            categories.push(c);
          });
          this.setState(() => {
            return {
              productsToShow: items,
              category: category,
              categories: categories,
            };
          });
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.props.location.category) {
      if (this.props.location.category !== this.state.category) {
        const category = this.props.location.category;
        this.setState(() => {
          return {category: category};
        });
        //  this.setState({...category});
      }
    }
  }

  render() {
    return this.state.category ? (
      <div>
        <Breadcrumb title={"Productos/" + `${this.state.category}`} />

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
                                    category={this.state.category}
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
    ) : null;
  }
}

//export default CollectionNoSideBar;
const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {getAllProducts})(CollectionNoSideBar);
