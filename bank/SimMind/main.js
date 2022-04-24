/**
 * 初始化思维导图
 * @param {String} el 容器ID
 */
function treeInit(el) {
    let minder = new window.kityminder.Minder({
        Vue: "",
        renderTo: el,
    });
    minder.setDefaultOptions({
        defaultTheme: "fresh-green",
    });
    /**
     *初始化思维导图数据
     * @param {Obejct} data 树参数
     */
    minder.setInitData = function(data) {
        minder.importJson({
            root: data,
            template: "default",
        });
    };
    return minder;
}
export default treeInit;
