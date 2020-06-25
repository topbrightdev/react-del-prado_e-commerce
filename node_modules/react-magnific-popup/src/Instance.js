const _jquery = window.jQuery || window.$;

export const MagnificPopup = {
    trigger: function (elementClassName, ...action) {
        let cname = elementClassName.startsWith('.') ? elementClassName : `.${elementClassName}`;
        console.log(cname, ...action)
        _jquery(cname).magnificPopup(...action);
    },
    props: function() {
        const magnificPopup = _jquery.magnificPopup.instance;

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
        }
    }
}