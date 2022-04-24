function base64ToBlob(urlData, type) {
    let arr = urlData.split(",");
    let mime = arr[0].match(/:(.*?);/)[1] || type;
    // 去掉url的头，并转化为byte
    let bytes = window.atob(arr[1]);
    // 处理异常,将ascii码小于0的转换为大于0
    let ab = new ArrayBuffer(bytes.length);
    // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], {
        type: mime,
    });
}
function downImage(url, fileName) {
    let a = document.createElement("a");
    a.href = URL.createObjectURL(url);
    a.download = fileName;
    a.click();
    document.removeChild(a);
}
export { base64ToBlob, downImage };
