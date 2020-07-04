import React, {Component} from "react";
import {connect} from "react-redux";
import {searchProduct} from "../../actions/indexO";

import Breadcrumb from "../common/breadcrumb";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    console.log(e);
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  };

  handleSubmit() {
    console.log(this.state.productName);
    this.props.searchProduct(this.state.productName);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Breadcrumb title={"Search"} />

        {/*Search section*/}
        <section className="authentication-page section-b-space">
          <div className="container">
            <section className="search-block">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <form className="form-header">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name="productName"
                          aria-label="Amount (to the nearest dollar)"
                          placeholder="Search Products......"
                          value={this.state.first_name}
                          onChange={this.handleChange}
                        />
                        <div className="input-group-append">
                          <button
                            type="submit"
                            className="btn btn-solid"
                            onClick={() => this.handleSubmit}
                          >
                            <i className="fa fa-search"></i>Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

//export default Search;

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  searchProduct,
})(Search);
