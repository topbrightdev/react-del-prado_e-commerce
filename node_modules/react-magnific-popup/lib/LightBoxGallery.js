'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var LightBoxGallery = (function (_Component) {
    _inherits(LightBoxGallery, _Component);

    function LightBoxGallery(props, context) {
        _classCallCheck(this, LightBoxGallery);

        _get(Object.getPrototypeOf(LightBoxGallery.prototype), 'constructor', this).call(this, props, context);
        this._jquery = window.jQuery || window.$;
    }

    _createClass(LightBoxGallery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            this._jquery(document).ready(function () {
                _this._jquery('.' + _this.props.className).magnificPopup(_this.props.config);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                (0, _utils.extractProps)(this.props, ['children', 'config']),
                this.props.children
            );
        }
    }]);

    return LightBoxGallery;
})(_react.Component);

exports.LightBoxGallery = LightBoxGallery;

var GalleryItem = (function (_Component2) {
    _inherits(GalleryItem, _Component2);

    function GalleryItem() {
        _classCallCheck(this, GalleryItem);

        _get(Object.getPrototypeOf(GalleryItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(GalleryItem, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'a',
                (0, _utils.extractProps)(this.props, ['children']),
                this.props.children
            );
        }
    }]);

    return GalleryItem;
})(_react.Component);

exports.GalleryItem = GalleryItem;

LightBoxGallery.propTypes = {
    className: _react2['default'].PropTypes.string.isRequired,
    config: _react2['default'].PropTypes.object.isRequired
};

GalleryItem.propTypes = {
    href: _react2['default'].PropTypes.string.isRequired,
    title: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.element.isRequired
};