(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactMagnificPopup = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _jquery = window.jQuery || window.$;

var MagnificPopup = {
    trigger: function trigger(elementClassName) {
        var _jquery2;

        var cname = elementClassName.startsWith('.') ? elementClassName : '.' + elementClassName;

        for (var _len = arguments.length, action = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            action[_key - 1] = arguments[_key];
        }

        console.log.apply(console, [cname].concat(action));
        (_jquery2 = _jquery(cname)).magnificPopup.apply(_jquery2, action);
    },
    props: function props() {
        var magnificPopup = _jquery.magnificPopup.instance;

        return {
            item: magnificPopup.item,
            currItem: magnificPopup.currItem,
            index: magnificPopup.index,
            content: magnificPopup.content,
            bgOverlay: magnificPopup.bgOverlay,
            wrap: magnificPopup.wrap,
            contentContainer: magnificPopup.contentContainer,
            st: magnificPopup.st,
            isIE7: magnificPopup.isIE7,
            isIOS: magnificPopup.isIOS
        };
    }
};
exports.MagnificPopup = MagnificPopup;

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils":6}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var Popup = (function (_Component) {
    _inherits(Popup, _Component);

    function Popup(props, context) {
        _classCallCheck(this, Popup);

        _get(Object.getPrototypeOf(Popup.prototype), 'constructor', this).call(this, props, context);
        this._jquery = window.jQuery || window.$;
    }

    _createClass(Popup, [{
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
                'a',
                (0, _utils.extractProps)(this.props, ['children', 'config']),
                this.props.children
            );
        }
    }]);

    return Popup;
})(_react.Component);

exports.Popup = Popup;

Popup.propTypes = {
    config: _react2['default'].PropTypes.object.isRequired,
    className: _react2['default'].PropTypes.string.isRequired,
    href: _react2['default'].PropTypes.string.isRequired,
    children: _react2['default'].PropTypes.node.isRequired
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _SingleImage = require('./SingleImage');

Object.defineProperty(exports, 'SingleImage', {
  enumerable: true,
  get: function get() {
    return _SingleImage.SingleImage;
  }
});

var _LightBoxGallery = require('./LightBoxGallery');

Object.defineProperty(exports, 'LightBoxGallery', {
  enumerable: true,
  get: function get() {
    return _LightBoxGallery.LightBoxGallery;
  }
});
Object.defineProperty(exports, 'GalleryItem', {
  enumerable: true,
  get: function get() {
    return _LightBoxGallery.GalleryItem;
  }
});

var _Popup = require('./Popup');

Object.defineProperty(exports, 'Popup', {
  enumerable: true,
  get: function get() {
    return _Popup.Popup;
  }
});

var _Instance = require('./Instance');

Object.defineProperty(exports, 'MagnificPopup', {
  enumerable: true,
  get: function get() {
    return _Instance.MagnificPopup;
  }
});

},{"./Instance":1,"./LightBoxGallery":2,"./Popup":3,"./SingleImage":5}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var SingleImage = (function (_Component) {
	_inherits(SingleImage, _Component);

	function SingleImage(props, context) {
		_classCallCheck(this, SingleImage);

		_get(Object.getPrototypeOf(SingleImage.prototype), 'constructor', this).call(this, props, context);
		this._jquery = window.jQuery || window.$;
	}

	_createClass(SingleImage, [{
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
				'a',
				(0, _utils.extractProps)(this.props, ['children', 'config']),
				this.props.children
			);
		}
	}]);

	return SingleImage;
})(_react.Component);

exports.SingleImage = SingleImage;

SingleImage.propTypes = {
	config: _react2['default'].PropTypes.object.isRequired,
	className: _react2['default'].PropTypes.string.isRequired,
	href: _react2['default'].PropTypes.string.isRequired,
	children: _react2['default'].PropTypes.element.isRequired,
	title: _react2['default'].PropTypes.string
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.extractProps = extractProps;

function extractProps(props) {
	var exclude = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	var extractedProps = {},
	    counter = 0,
	    propNames = Object.keys(props),
	    excludeProp = null;

	for (; counter < propNames.length; counter++) {
		excludeProp = Array.isArray(exclude) ? exclude.includes(propNames[counter]) : exclude === propNames[counter];

		if (!excludeProp) {
			extractedProps[propNames[counter]] = props[propNames[counter]];
		}
	}

	return extractedProps;
}

},{}]},{},[4])(4)
});