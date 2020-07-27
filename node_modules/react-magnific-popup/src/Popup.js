import React, { Component } from 'react';
import { extractProps } from './utils';

export class Popup extends Component {
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
            <a {...extractProps(this.props, ['children', 'config'])}>{this.props.children}</a>
        );
    }
}

Popup.propTypes = {
    config: React.PropTypes.object.isRequired,
    className: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired
}