import React, { Component } from "react";
import { withTranslate } from "react-redux-multilingual";
import { Helmet } from "react-helmet";
import LastImage from "../components/elements/element-lastImage";
import Banner from "../components/elements/element-banner";
import Gallery from "../components/elements/elements-gallery";

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

        {/*Last Image  start*/}
        <section className="p-0 section1">
          <LastImage />
        </section>
        {/*Last Image  end*/}

        {/*Gallery  start*/}
        <section className="p-0 section2">
          <Gallery />
        </section>
        {/*Gallery  end*/}

        {/*Banner  start*/}
        <section className="p-0 section3">
          <Banner />
        </section>
        {/*Banner  end*/}
      </div>
    );
  }
}

export default withTranslate(Vegetables);
