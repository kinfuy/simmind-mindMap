/**
 * 生成随机码
 * @param {number} len 随机码长度
 */
export const createRandomCode = (len = 6) => {
    const charset = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
    const maxLen = charset.length;
    let ret = "";
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * maxLen);
        ret += charset[randomIndex];
    }
    return ret;
};

/**
 * 进入全屏
 */
export const enterFullScreen = () => {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) docElm.requestFullscreen();
    // W3C
    else if (docElm.mozRequestFullScreen) docElm.mozRequestFullScreen();
    // FireFox
    else if (docElm.webkitRequestFullScreen) docElm.webkitRequestFullScreen(); // Chrome等
};

/**
 * 退出全屏
 */
export const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
};

/**
 * 判断是否全屏
 */
export const isFullScreen = () => {
    return (
        document.fullscreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.webkitFullScreen ||
        document.msFullScreen
    );
};
