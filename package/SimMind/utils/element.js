/**
 * 获取元素在画布中的位置范围
 * @param {object} element 元素信息
 */
export const getElementRange = (element) => {
    let minX, maxX, minY, maxY;

    if (element.type === "line") {
        minX = element.left;
        maxX = element.left + Math.max(element.start[0], element.end[0]);
        minY = element.top;
        maxY = element.top + Math.max(element.start[1], element.end[1]);
    } else {
        minX = element.left;
        maxX = element.left + element.width;
        minY = element.top;
        maxY = element.top + element.height;
    }

    return { minX, maxX, minY, maxY };
};

/**
 * 获取元素集合在画布中的位置范围
 * @param {object} elementList 元素集合
 */
export const getElementListRange = (elementList) => {
    const leftValues = [];
    const topValues = [];
    const rightValues = [];
    const bottomValues = [];

    elementList.forEach((element) => {
        const { minX, maxX, minY, maxY } = getElementRange(element);
        leftValues.push(minX);
        topValues.push(minY);
        rightValues.push(maxX);
        bottomValues.push(maxY);
    });

    const minX = Math.min(...leftValues);
    const maxX = Math.max(...rightValues);
    const minY = Math.min(...topValues);
    const maxY = Math.max(...bottomValues);

    return { minX, maxX, minY, maxY };
};
