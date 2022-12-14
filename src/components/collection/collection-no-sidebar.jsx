import React, { Component } from "react";
import { connect } from "react-redux";

// import custom Components
import ProductListing from "../products/product-listing";
import Breadcrumb from "../breadcrumb";
import FilterBar from "../products/filters/filter-bar";
import { getAllProducts } from "../../actions/indexO";
import PageNotFound from "../pages/404";
import Banner from "../elements/element-banner";
import "../common/index.scss";

class CollectionNoSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutColumns: 3,
      category: null,
      categories: null,
      productsToShow: [],
    };
  }

  abortController = new AbortController();

  LayoutViewClicked(colums) {
    this.setState({
      layoutColumns: colums,
    });
  }

  componentWillUnmount() {
    this.setState(() => {
      return {
        layoutColumns: 3,
        category: null,
        categories: null,
        productsToShow: [],
      };
    });
  }

  componentDidMount() {
    if (this.props.location.category !== undefined) {
      if (this.props.location.category !== this.state.category) {
        var category = this.props.location.category;
        category = category.toLowerCase();
        console.log(category);
        this.setState(() => {
          return { category: category };
        });
        //  this.setState({...category});
      }
    } else {
      if (this.props.state.data3.productsToShow) {
        const items = this.props.state.data3.productsToShow;
        console.log(items);
        var category = null;
        var categories = [];

        if (items.length > 0) {
          items[0].categories.map((c) => {
            if (!category) {
              return (category = c.name);
            }
            return categories.push(c);
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
          return { category: category };
        });
        //  this.setState({...category});
      }
    }
  }

  render() {
    return this.state.category ? (
      <div>
        <Breadcrumb title={this.state.category} data={this.props} />

        {/*Section Start*/}
        <section className="section-b-space">
          <div className="collection-wrapper">
            <div className="container">
              {" "}
              <Banner />
              <div className="row">
                <div className="collection-content col">
                  <div className="page-main-content">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-12">
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
    ) : (
      <PageNotFound />
    );
  }
}

//export default CollectionNoSideBar;
const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(
  mapStateToProps,
  { getAllProducts }
)(CollectionNoSideBar);
