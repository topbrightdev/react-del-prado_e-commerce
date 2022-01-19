import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { withTranslate } from "react-redux-multilingual";
import Modal from "react-responsive-modal";
import ModalVideo from "react-modal-video";
import { videoTagString, VideoTag } from "react-video-tag";
import LastImage from "../components/elements/element-lastImage";
import MasonaryGridCols from "../components/features/portfolio/masonary-grid-cols";
// Import custom components
import TopCollection from "./collection/collection";

import "./common/index.scss";

const SlideList = [
  {
    textPosition: "text-left",
    category: "",
    title: "Welcome Video Studio",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

class Vegetables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { translate } = this.props;

    return (
      <div>
        <Helmet>
          <title>{translate("the wonderful Pon's site")}</title>
        </Helmet>

        {/*Parallax banner*/}
        <section className="p-0">
          <div className="full-banner parallax-bannerPon parallax text-left p-left">
            <div className="container">
              <div className="row">
                <div className="col" />
              </div>
            </div>
          </div>
        </section>
        {/*Parallax banner end*/}

        <LastImage />

        {/*home slider start*/}
        <section className="p-0 small-slider">
          <Slider className="slide-1 home-slider">
            <div>
              <div className="home home-pon1">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="slider-contain">
                        <div className="container-text">
                          <h4>every piece is different</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="home home-pon2">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="slider-contain">
                        <div className="container-text">
                          <h4>every piece is amazing</h4>
                          <h1>save 20%</h1>
                          <a href="#" className="btn btn-solid">
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>
        {/*home slider end*/}

        {/* Start Slider Area   */}

        {/* Start Single Slide 
          {SlideList.map((value, index) => (
            <div
              className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center"
              key={index}
              data-black-overlay="6"
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      {value.title ? (
                        <h1 className="title">{value.title}</h1>
                      ) : (
                        ""
                      )}
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="video-inner">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="ZOoVOfieAF8"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button
                        className="video-popup theme-color"
                        onClick={this.openModal}
                      >
                        <span className="play-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video-background">
                <VideoTag
                  autoPlay={`${true}`}
                  muted={`${true}`}
                  playsInline={`${true}`}
                  loop={`${true}`}
                  src={`${"/assets/images/service/video.mp4"}`}
                  poster={`${"/assets/images/pon/workshop.jpg"}`}
                />
              </div>
            </div>
          ))}
      
         End Single Slide */}

        {/*Product slider*/}
        <TopCollection type={"beauty"} />

        {/*Product slider End*/}

        {/*Video Section*/}
        <section className="video-section pt-0">
          <div className="title1">
            <h4>special offer</h4>
            <h2 className="title-inner1">product tutorial</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <a href="javascript:void(0)" onClick={this.onOpenModal}>
                  <div className="video-img">
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/pon/workshop.jpg`}
                      alt=""
                      className="img-fluid blur-up lazyload"
                    />
                    <div className="play-btn">
                      <span>
                        <i className="fa fa-play" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </a>
                <Modal
                  open={this.state.open}
                  onClose={this.onCloseModal}
                  id="video"
                  className="modal fade video-modal"
                  center
                >
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/OrCnQpPqRH0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </Modal>
              </div>
            </div>
          </div>
        </section>
        {/*Video Section End*/}

        {/*Video Section*/}
        <section className="video-section pt-0">
          <div className="title1">
            <MasonaryGridCols />
          </div>
        </section>
        {/*Video Section End*/}

        {/*collection banner layout*/}

        {/*collection banner layout end*/}
      </div>
    );
  }
}

export default withTranslate(Vegetables);
