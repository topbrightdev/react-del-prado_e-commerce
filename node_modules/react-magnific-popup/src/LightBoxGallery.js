import React, { Component } from 'react';
import { extractProps } from './utils';

export class LightBoxGallery extends Component {
    constructor(props, context) {
        super(props, context);
        this._jquery = window.jQuery || window.$;
    }

    componentDidMount() {
        this._jquery(document).ready(() => {
			this._jquery(`.${this.props.className}`).magnificPopup(this.props.config);
		});
    }

    render() {
        return (
            <div {...extractProps(this.props, ['children', 'config'])}>
                {this.props.children}
            </div>
        )
    }
}

export class GalleryItem extends Component {
    render() {
        return (
            <a {...extractProps(this.props, ['children'])}> 
                {this.props.children} 
            </a>
        )
    }
}

LightBoxGallery.propTypes = {
    className: React.PropTypes.string.isRequired,
    config: React.PropTypes.object.isRequired
}

GalleryItem.propTypes = {
    href: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    children: React.PropTypes.element.isRequired
}