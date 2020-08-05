import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { postReview, getReviews } from "../../../actions/indexO";
import { withTranslate } from "react-redux-multilingual";

class DetailsTopTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: ["on", "on", "on", "on", "on"],
      id: "",
      name: "",
      title: "",
      review: "",
      email: "",
      reviews: [],
      reviewsToLoad: null,
      description: null,
    };
    this.validator = new SimpleReactValidator();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Reviews = this.Reviews.bind(this);
  }

  componentWillMount() {
    if (this.props.item.id) {
      this.setState(() => {
        return { id: this.props.item.id };
      });
    }
    this.props.getReviews(this.props.item.id);
  }

  componentWillReceiveProps() {
    if (this.props.state.reviews.reviews[0]) {
      this.setState(() => {
        return { reviewsToLoad: true };
      });
    }
  }

  componentWillUpdate() {
    if (this.props.item.id !== this.state.id) {
      this.setState(() => {
        return { id: this.props.item.id };
      });
      this.props.getReviews(this.props.item.id);
    }
  }

  removeString(res) {
    var newParraf = res.replace(`<p>`, " ");
    newParraf = newParraf.replace(`</p>`, " ");
    return newParraf;
  }

  fetchDate(res) {
    var str = res.split("T");
    return str[0];
  }

  Reviews() {
    var reviews = this.props.state.reviews.reviews;
    return reviews.map((r, i) => {
      const stars = this.fetchRating(r.rating, "flag");
      var review = this.removeString(r.review);
      var dateCreated = this.fetchDate(r.date_created);
      return (
        <div key={i} className="review-div">
          <div>
            <div className="col-md-12 review-stars">
              {stars.map((s, i) => (
                <i key={i} id={i} className={`fa fa-star   ${s}`} />
              ))}
            </div>
            {dateCreated}
          </div>

          <div className="review">
            <h5>{review}</h5>
            <p className="review-author">.. by {r.reviewer}</p>
          </div>
        </div>
      );
    });
  }

  fetchRating = (n, flag) => {
    if (flag) {
      n--;
    }
    var stars = [];
    for (var i = 0; i <= 4; i++) {
      if (n >= i) {
        stars.push("on");
      } else {
        stars.push("off");
      }
    }
    if (flag) {
      return stars;
    } else {
      this.setState(() => {
        return { stars: stars };
      });
    }
  };

  handleChange = (e) => {
    var value = e.currentTarget.value;
    const name = e.currentTarget.name;
    if (e.currentTarget.name) {
      this.setState(() => {
        return { [name]: value };
      });
    } else return null;
  };

  handleRateClick = (e) => {
    this.fetchRating(e.currentTarget.id);
  };

  handleSubmit(event) {
    event.preventDefault();
    const { id, name, review, email, stars } = this.state;
    var starsCounter = 0;
    stars.map((s) => {
      if (s === "on") {
        return starsCounter++;
      } else return null;
    });

    const data = {
      product_id: id,
      review: review,
      reviewer: name,
      reviewer_email: email,
      rating: starsCounter,
    };

    this.props.postReview(data);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  render() {
    const { translate } = this.props;

    return (
      <section className="tab-product m-0">
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <Tabs className="tab-content nav-material">
              <TabList className="nav nav-tabs nav-material">
                <Tab className="nav-item">
                  <span className="nav-link ">
                    <i className="icofont icofont-man-in-glasses" />
                    {translate("details")}
                  </span>
                  <div className="material-border" />
                </Tab>
                <Tab className="nav-item">
                  <span className="nav-link">
                    <i className="icofont icofont-contacts" />
                    {translate("video")}
                  </span>
                  <div className="material-border" />
                </Tab>
                <Tab className="nav-item">
                  <span className="nav-link active">
                    <i className="icofont icofont-contacts" />
                    {translate("write_review")}
                  </span>
                  <div className="material-border" />
                </Tab>
                <Tab className="nav-item">
                  <span className="nav-link active">
                    <i className="icofont icofont-contacts" />
                    {translate("reviews")}
                  </span>
                  <div className="material-border" />
                </Tab>
              </TabList>
              <TabPanel>
                {this.props.item.description ? (
                  <p className="mt-4 p-0">{this.props.item.description}</p>
                ) : (
                  <p className="mt-4 p-0">{translate("no_description")}</p>
                )}
              </TabPanel>
              <TabPanel>
                <div className="mt-4 text-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="autoplay"
                      src="https://www.youtube.com/embed/BUWzX78Ye_8"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <form className="theme-form mt-4">
                  <div className="form-row">
                    <div className="col-md-12 ">
                      <div className="media m-0">
                        <label>{translate("rating")}</label>
                        <div className="media-body ml-3 ipad-max-width-content">
                          {this.state.stars.map((s, i) => (
                            <i
                              key={i}
                              id={i}
                              className={`fa fa-star my-rating  ${s}`}
                              onClick={this.handleRateClick}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="name">{translate("name")}</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">{translate("email")}</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="review">
                        {translate("review_title")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter your Review Subjects"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="review"> {translate("review")}</label>
                      <textarea
                        className="form-control"
                        placeholder="Write Your Testimonial Here"
                        id="review"
                        name="review"
                        value={this.state.review}
                        onChange={this.handleChange}
                        required
                        rows="6"
                      />
                    </div>
                    <div className="col-md-12">
                      <button
                        className="btn btn-solid"
                        onClick={this.handleSubmit}
                      >
                        {translate("submit_review")}
                      </button>
                    </div>
                  </div>
                </form>
              </TabPanel>
              <TabPanel>
                {!this.state.reviewsToLoad ? (
                  <p className="mt-4 p-0">{translate("no_reviews")}</p>
                ) : (
                  <div className="reviews-canvas">
                    <this.Reviews />
                  </div>
                )}
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(
  mapStateToProps,
  {
    postReview,
    getReviews,
  }
)(withTranslate(DetailsTopTabs));
