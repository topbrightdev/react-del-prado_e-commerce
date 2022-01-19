import React, { Component } from "react";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;

    let RatingStars = [];
    for (var i = 1; i <= parseInt(item.average_rating); i++) {
      RatingStars.push(<i className="fa fa-star" key={i + 20} />);
    }
    if (RatingStars.length < 4) {
      var leftOff = 4 - RatingStars.length;
      for (i = 0; i <= leftOff; i++) {
        RatingStars.push(<i className="fa fa-star off" key={i} />);
      }
    }
    if (RatingStars.length > 5) {
      RatingStars.pop();
    }

    return (
      <div className="rating d-f product-detail-rating">
        {RatingStars}
        <h6 className="rating-count">
          {" "}
          ({item.rating_count > 0 ? item.rating_count + 1 : item.rating_count})
        </h6>
      </div>
    );
  }
}

export default Rating;
