import React, { Component } from "react";
import { connect } from "react-redux";
import { subscribeNewsletter } from "../../actions/indexO";
import { withTranslate } from "react-redux-multilingual";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email_address: "",
      first_name: "delPrado",
      last_name: "client",
      members_list: [],
      loadingInterval: false,
      loadingIntervalWidth: 0,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitLocation(e) {
    e.preventDefault();
    console.log(this.state);
    if (
      this.state.email_address !== "" ||
      this.state.first_name !== "" ||
      this.state.last_name !== ""
    ) {
      this.props.subscribeNewsletter(
        this.state.email_address,
        this.state.first_name,
        this.state.last_name
      );
    }
  }

  render() {
    const { translate } = this.props;

    const style = { margin: "10px 0", width: "100%" };
    return (
      <div>
        <form
          style={style}
          className="form-inline subscribe-form classic-form"
          onSubmit={this.onSubmitLocation.bind(this)}
        >
          <div className="form-group subscribe-box">
            <input
              type="email"
              onChange={this.handleChange}
              className="form-control subscribe-input"
              name="email_address"
              placeholder="Enter email"
            />
            <button type="submit" className="btn btn-solid">
              {translate("submit")}
            </button>
          </div>
        </form>

        <ul className="list-group">
          {this.state.members_list.map((li, i) => {
            return (
              <li className="list-group-item" key={i} id={li.id}>
                {" "}
                <strong>{translate("email_address")}</strong> {li.email_address}{" "}
                - <strong>{translate("name")}</strong> {li.merge_fields.FNAME}{" "}
                {li.merge_fields.LNAME}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    subscribeNewsletter,
  }
)(withTranslate(Contact));
