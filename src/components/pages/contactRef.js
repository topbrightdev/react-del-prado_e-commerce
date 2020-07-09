import React, {Component} from "react";
import * as emailjs from "emailjs-com";

import {Button, FormFeedback, Form, FormGroup, Label, Input} from "reactstrap";

export default class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "name",
      email: "e-mail",
      subject: "subject",
      message: "message",
      mailSent: false,
      error: null,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const {fname, email, subject, message} = this.state;
    let templateParams = {
      from_name: fname,
      user_mail: email,
      subject: subject,
      message: message,
    };
    emailjs.send(
      "default_service",
      "emailtemplate",
      templateParams,
      "user_FqIXKAIpDQYC1lkU3it2G"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      fname: "",
      email: "",
      subject: "",
      message: "",
      mailSent: true,
      error: null,
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* Contact Section
 ================================================== */}
        <section id="contact">
          <div className="row section-head">
            <h2 className="contact-header">CONTACT</h2>
            <div className="ten columns text-contact">
              <p className="lead">
                If you think we can work together,don't hesitate to reach me.
                <br></br>
                Fill the form bellow and let me know how I could help you.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form onSubmit={this.handleFormSubmit.bind(this)}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size={35}
                      id="contactName"
                      name="contactName"
                      value={"Name"}
                      onChange={(e) => this.setState({fname: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size={35}
                      id="contactEmail"
                      name="contactEmail"
                      value={this.state.mail ? this.state.mail : "e-mail"}
                      onChange={(e) => this.setState({mail: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      size={35}
                      id="contactSubject"
                      name="contactSubject"
                      value={
                        this.state.subject ? this.state.subject : "Subject"
                      }
                      onChange={(e) => this.setState({subject: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols={50}
                      rows={15}
                      id="contactMessage"
                      name="contactMessage"
                      value={
                        this.state.message ? this.state.message : "Message"
                      }
                      onChange={(e) => this.setState({message: e.target.value})}
                    />
                  </div>
                  <div>
                    <Button className="submit" variant="primary" type="submit">
                      Submit
                    </Button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
                <div>
                  {this.state.mailSent && (
                    <div>Thank you for contacting us.</div>
                  )}
                </div>
              </form>{" "}
              {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning"> Error .Please Check it </div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />
                Your message was sent, thank you!
                <br />
              </div>
            </div>
          </div>
        </section>{" "}
        {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}
