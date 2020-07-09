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