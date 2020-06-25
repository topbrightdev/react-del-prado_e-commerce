'use strict';

exports.__esModule = true;
exports.InnerSlider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _eventHandlers = require('./mixins/event-handlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _helpers = require('./mixins/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _initialState = require('./initial-state');

var _initialState2 = _interopRequireDefault(_initialState);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _innerSliderUtils = require('./utils/innerSliderUtils');

var _trackHelper = require('./mixins/trackHelper');

var _track = require('./track');

var _dots = require('./dots');

var _arrows = require('./arrows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerSlider = exports.InnerSlider = (0, _createReactClass2.default)({
  displayName: 'InnerSlider',

  mixins: [_helpers2.default, _eventHandlers2.default],
  list: null, // wraps the track
  track: null, // component that rolls out like a film
  listRefHandler: function listRefHandler(ref) {
    this.list = ref;
  },
  trackRefHandler: function trackRefHandler(ref) {
    this.track = ref;
  },
  getInitialState: function getInitialState() {
    return _extends({}, _initialState2.default, {
      currentSlide: this.props.initialSlide
    });
  },
  componentWillMount: function componentWillMount() {
    if (this.props.init) {
      this.props.init();
    }
    if (this.props.lazyLoad) {
      var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)((0, _objectAssign2.default)({}, this.props, this.state));
      if (slidesToLoad.length > 0) {
        this.setState(function (prevState, props) {
          return { lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) };
        });
        if (this.props.onLazyLoad) {
          this.props.onLazyLoad(slidesToLoad);
        }
      }
    }
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    var spec = (0, _objectAssign2.default)({ listRef: this.list, trackRef: this.track }, this.props);
    var initState = (0, _innerSliderUtils.initializedState)(spec);
    (0, _objectAssign2.default)(spec, { slideIndex: initState.currentSlide }, initState);
    var targetLeft = (0, _trackHelper.getTrackLeft)(spec);
    (0, _objectAssign2.default)(spec, { left: targetLeft });
    var trackStyle = (0, _trackHelper.getTrackCSS)(spec);
    initState['trackStyle'] = trackStyle;
    this.setState(initState, function () {
      _this.adaptHeight();
      _this.autoPlay(); // it doesn't have to be here
    });

    // To support server-side rendering
    if (!window) {
      return;
    }
    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.animationEndCallback) {
      clearTimeout(this.animationEndCallback);
    }
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var spec = (0, _objectAssign2.default)({ listRef: this.list, trackRef: this.track }, nextProps, this.state);
    var updatedState = (0, _innerSliderUtils.initializedState)(spec);
    (0, _objectAssign2.default)(spec, { slideIndex: updatedState.currentSlide }, updatedState);
    var targetLeft = (0, _trackHelper.getTrackLeft)(spec);
    (0, _objectAssign2.default)(spec, { left: targetLeft });
    var trackStyle = (0, _trackHelper.getTrackCSS)(spec);
    // not setting trackStyle in other cases because no prop change can trigger slideChange
    if (_react2.default.Children.count(this.props.children) !== _react2.default.Children.count(nextProps.children)) {
      updatedState['trackStyle'] = trackStyle;
    }
    this.setState(updatedState, function () {
      if (_this2.state.currentSlide >= _react2.default.Children.count(nextProps.children)) {
        _this2.changeSlide({
          message: 'index',
          index: _react2.default.Children.count(nextProps.children) - nextProps.slidesToShow,
          currentSlide: _this2.state.currentSlide
        });
      }
      // the following doesn't have to be this way
      if (!nextProps.autoplay) _this2.pause();else _this2.autoPlay(nextProps.autoplay);
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    var _this3 = this;

    var images = document.querySelectorAll('.slick-slide img');
    images.forEach(function (image) {
      if (!image.onload) {
        image.onload = function () {
          return setTimeout(function () {
            return _this3.update(_this3.props);
          }, _this3.props.speed);
        };
      }
    });
    if (this.props.reInit) {
      this.props.reInit();
    }
    if (this.props.lazyLoad) {
      var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)((0, _objectAssign2.default)({}, this.props, this.state));
      if (slidesToLoad.length > 0) {
        this.setState(function (prevState, props) {
          return { lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) };
        });
        if (this.props.onLazyLoad) {
          this.props.onLazyLoad(slidesToLoad);
        }
      }
    }
    // if (this.props.onLazyLoad) {
    //   this.props.onLazyLoad([leftMostSlide])
    // }
    this.adaptHeight();
  },
  onWindowResized: function onWindowResized() {
    this.update(this.props);
    // animating state should be cleared while resizing, otherwise autoplay stops working
    this.setState({
      animating: false
    });
    clearTimeout(this.animationEndCallback);
    delete this.animationEndCallback;
  },
  slickPrev: function slickPrev() {
    var _this4 = this;

    // this and fellow methods are wrapped in setTimeout
    // to make sure initialize setState has happened before
    // any of such methods are called
    setTimeout(function () {
      return _this4.changeSlide({ message: 'previous' });
    }, 0);
  },
  slickNext: function slickNext() {
    var _this5 = this;

    setTimeout(function () {
      return _this5.changeSlide({ message: 'next' });
    }, 0);
  },
  slickGoTo: function slickGoTo(slide) {
    var _this6 = this;

    slide = Number(slide);
    !isNaN(slide) && setTimeout(function () {
      return _this6.changeSlide({
        message: 'index',
        index: slide,
        currentSlide: _this6.state.currentSlide
      });
    }, 0);
  },
  render: function render() {
    var className = (0, _classnames2.default)('slick-initialized', 'slick-slider', this.props.className, {
      'slick-vertical': this.props.vertical
    });
    var spec = (0, _objectAssign2.default)({}, this.props, this.state);
    var trackProps = (0, _innerSliderUtils.extractObject)(spec, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding']);
    trackProps.focusOnSelect = this.props.focusOnSelect ? this.selectHandler : null;

    var dots;
    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
      var dotProps = (0, _innerSliderUtils.extractObject)(spec, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']);
      dotProps.clickHandler = this.changeSlide;
      dots = _react2.default.createElement(_dots.Dots, dotProps);
    }

    var prevArrow, nextArrow;
    var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow']);
    arrowProps.clickHandler = this.changeSlide;

    if (this.props.arrows) {
      prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
      nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
    }

    var verticalHeightStyle = null;

    if (this.props.vertical) {
      verticalHeightStyle = {
        height: this.state.listHeight
      };
    }

    var centerPaddingStyle = null;

    if (this.props.vertical === false) {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: '0px ' + this.props.centerPadding
        };
      }
    } else {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: this.props.centerPadding + ' 0px'
        };
      }
    }

    var listStyle = (0, _objectAssign2.default)({}, verticalHeightStyle, centerPaddingStyle);
    var listProps = {
      className: 'slick-list',
      style: listStyle,
      onMouseDown: this.swipeStart,
      onMouseMove: this.state.dragging ? this.swipeMove : null,
      onMouseUp: this.swipeEnd,
      onMouseLeave: this.state.dragging ? this.swipeEnd : null,
      onTouchStart: this.swipeStart,
      onTouchMove: this.state.dragging ? this.swipeMove : null,
      onTouchEnd: this.swipeEnd,
      onTouchCancel: this.state.dragging ? this.swipeEnd : null,
      onKeyDown: this.props.accessibility ? this.keyHandler : null
    };

    var innerSliderProps = {
      className: className,
      onMouseEnter: this.onInnerSliderEnter,
      onMouseLeave: this.onInnerSliderLeave,
      onMouseOver: this.onInnerSliderOver,
      dir: 'ltr'
    };

    if (this.props.unslick) {
      listProps = { className: 'slick-list' };
      innerSliderProps = { className: className };
    }

    return _react2.default.createElement(
      'div',
      innerSliderProps,
      !this.props.unslick ? prevArrow : '',
      _react2.default.createElement(
        'div',
        _extends({ ref: this.listRefHandler }, listProps),
        _react2.default.createElement(
          _track.Track,
          _extends({ ref: this.trackRefHandler }, trackProps),
          this.props.children
        )
      ),
      !this.props.unslick ? nextArrow : '',
      !this.props.unslick ? dots : ''
    );
  }
});