/**
 * 获取DOM节点样式
 * @param {Element} el dom节点
 * @param {String} style 要获取的样式
 */
export const getStyle = (el, style) => {
    if (!el) return null;
    return window.getComputedStyle(el, null).getPropertyValue(style);
};

/**
 * 检查元素是否处在可视区域内
 * @param {element} el
 */
export const checkElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
};
