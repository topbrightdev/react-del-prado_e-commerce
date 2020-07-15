import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import SimpleReactValidator from "simple-react-validator";
import Breadcrumb from "../breadcrumb";

//AIzaSyADbvaiUnaCa2HuKsVLMYbMUY4DvOUFIjk   GoogleAPImaps
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from_name: "",
      user_mail: "",
      subject: "",
      message: "",
      mailSent: false,
      error: null,
    };
    this.validator = new SimpleReactValidator();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { from_name, user_mail, subject, message } = this.state;
    let templateParams = {
      from_name: from_name,
      user_mail: user_mail,
      subject: subject,
      message: message,
    };
    emailjs
      .send(
        "default_service",
        "emailtemplate",
        templateParams,
        process.env.REACT_APP_EMAILJS
      )
      .then(
        (res) => {
          alert("Your message was succesfully sent !");
          // this.resetForm();
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

  handleChange = (e) => {
    var value = e.currentTarget.value;
    const name = e.currentTarget.name;
    if (e.currentTarget.name) {
      {
        this.setState(() => {
          return { [name]: value };
        });
      }
    } else return null;
  };

  resetForm() {
    this.setState(() => {
      return {
        from_name: "",
        user_mail: "",
        subject: "",
        message: "",
        mailSent: true,
        error: null,
      };
    });
  }
  /*   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50059.12775918716!2d72.78534673554945!3d21.16564923510817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1533793756956"
   */
  render() {
    return (
      <div>
        <Breadcrumb title={"Contactanos"} />

        {/*Forget Password section*/}
        <section className=" contact-page section-b-space">
          <div className="container">
            <div className="row section-b-space">
              <div className="col-lg-7 map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.5011199455585!2d-5.776505786481614!3d43.25132791966658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd36f6889d124981%3A0x6cd613e0c84b5ec2!2sCalle%20Armando%20Palacio%20Vald%C3%A9s%2C%2010%2C%2033600%20Mieres%2C%20Asturias!5e0!3m2!1sen!2ses!4v1594039183938!5m2!1sen!2ses"
                  allowFullScreen=""
                ></iframe>
              </div>
              <div className="col-lg-5 p-l-10">
                <div className="contact-right">
                  <ul>
                    <li>
                      <div className="contact-icon">
                        <i className="fa fa-phone" />
                        <h6>Contactanos</h6>
                      </div>
                      <div className="media-body">
                        <p>+91 123 - 456 - 7890</p>
                        <p>+86 163 - 451 - 7894</p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-icon">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <h6>Direccion</h6>
                      </div>
                      <div className="media-body">
                        <p>C/ Armando Palacio Valdés , 10 </p>
                        <p> Mieres 33600</p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-icon">
                        <i className="fa fa-envelope-o" />
                        <h6>Direccion electronica</h6>
                      </div>
                      <div className="media-body">
                        <p>Support@delprado.com</p>
                        <p>info@delprado.com</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <form className="theme-form">
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="name">Nombre</label>
                      <input
                        className="form-control"
                        type="text"
                        size={35}
                        id="from_name"
                        name="from_name"
                        placeholder="Name"
                        value={this.state.from_name}
                        onChange={this.handleChange}
                        onBlur={() =>
                          this.validator.showMessageFor("from_name")
                        }
                      />
                      {this.validator.message(
                        "from_name",
                        this.state.from_name,
                        "required"
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        type="text"
                        size={35}
                        id="user_mail"
                        name="user_mail"
                        placeholder="E-mail"
                        value={this.state.user_mail}
                        onChange={this.handleChange}
                        onBlur={() =>
                          this.validator.showMessageFor("user_mail")
                        }
                      />
                      {this.validator.message(
                        "user_mail",
                        this.state.user_mail,
                        "required|email"
                      )}
                    </div>
                    <div>
                      <label htmlFor="contactSubject">Asunto</label>
                      <input
                        className="form-control"
                        type="text"
                        size={35}
                        id="contactSubject"
                        name="subject"
                        placeholder="Asunto"
                        value={this.state.subject}
                        onChange={this.handleChange}
                        onBlur={() => this.validator.showMessageFor("subject")}
                      />
                      {this.validator.message(
                        "subject",
                        this.state.subject,
                        "required"
                      )}
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="review">Escribe aqui tu mensage</label>
                      <textarea
                        className="form-control"
                        cols={50}
                        rows={6}
                        id="message"
                        name="message"
                        placeholder="Mensaje"
                        value={this.state.message}
                        onChange={this.handleChange}
                        onBlur={() => this.validator.showMessageFor("message")}
                      />
                      {this.validator.message(
                        "message",
                        this.state.message,
                        "required"
                      )}
                    </div>
                    <div className="col-md-12">
                      <button
                        className="btn btn-solid"
                        onClick={this.handleFormSubmit}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
