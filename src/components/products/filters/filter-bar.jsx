import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslate } from "react-redux-multilingual";

import { filterSort, changeLayout } from "../../../actions/indexO";
import { getVisibleproducts } from "../../../services";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.gridLayout = this.gridLayout.bind(this);
    this.listLayout = this.listLayout.bind(this);
  }
  //List Layout View
  listLayout() {
    document.querySelector(".collection-grid-view").style = "opacity:0";
    document.querySelector(".product-wrapper-grid").style = "opacity:0.2";
    document.querySelector(".product-wrapper-grid").classList.add("list-view");
    var elems = document.querySelector(".infinite-scroll-component .row")
      .childNodes;
    [].forEach.call(elems, function(el) {
      el.className = "";
      el.classList.add("col-lg-12");
    });
    setTimeout(function() {
      document.querySelector(".product-wrapper-grid").style = "opacity: 1";
    }, 500);
    const grid = false;
    this.props.changeLayout(grid);
  }

  //Grid Layout View
  gridLayout() {
    document.querySelector(".collection-grid-view").style = "opacity:1";
    document
      .querySelector(".product-wrapper-grid")
      .classList.remove("list-view");
    var elems = document.querySelector(".infinite-scroll-component .row")
      .childNodes;
    [].forEach.call(elems, function(el) {
      el.className = "";
      el.classList.add("col-lg-3");
    });
    const grid = true;
    this.props.changeLayout(grid);
  }

  // Layout Column View
  LayoutView = (colSize) => {
    if (
      !document
        .querySelector(".product-wrapper-grid")
        .classList.contains("list-view")
    ) {
      var elems = document.querySelector(".infinite-scroll-component .row")
        .childNodes;
      [].forEach.call(elems, function(el) {
        el.className = "";
        el.classList.add("col-lg-" + colSize);
      });
    }

    this.props.onLayoutViewClicked(colSize);
  };

  render() {
    const { translate } = this.props;

    return (
      <div className="product-filter-content">
        <div className="search-count">
          <h5>{translate("result")}</h5>
        </div>
        <div className="collection-view">
          <ul>
            <li>
              <i
                className="fa fa-th grid-layout-view"
                onClick={this.gridLayout}
              />
            </li>
            <li>
              <i
                className="fa fa-list-ul list-layout-view"
                onClick={this.listLayout}
              />
            </li>
          </ul>
        </div>
        <div className="collection-grid-view">
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/icon/2.png`}
                alt=""
                className="product-2-layout-view"
                onClick={() => this.LayoutView(6)}
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/icon/3.png`}
                alt=""
                className="product-3-layout-view"
                onClick={() => this.LayoutView(4)}
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/icon/4.png`}
                alt=""
                className="product-4-layout-view"
                onClick={() => this.LayoutView(3)}
              />
            </li>
          </ul>
        </div>
        <div className="product-page-filter">
          <select onChange={(e) => this.props.filterSort(e.target.value)}>
            <option value="">{translate("sorting_items")}</option>
            <option value="HighToLow">{translate("price_high_2_low")}</option>
            <option value="LowToHigh">{translate("price_low_2_high")}</option>
            <option value="Newest">{translate("new_items")}</option>
            <option value="AscOrder">{translate("sort_A_2_Z")}</option>
            <option value="DescOrder">{translate("sort_Z_2_A")}</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: getVisibleproducts(state.data, state.filters),
  filters: state.filters,
});

export default connect(
  mapStateToProps,
  { filterSort, changeLayout }
)(withTranslate(FilterBar));
