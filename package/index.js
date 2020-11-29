import SimMind from "./SimMind/";
let components = [SimMind];
import kity from "kity";
import kityminder from "kityminder-core";
import "./SimMind/Icon/index.css";
const install = function(Vue) {
    //全局注册组件
    Vue.use(kity);
    Vue.use(kityminder);
    components.forEach((item) => {
        Vue.component(item.name, item);
    });
};
//可以不用vue.use 直接浏览器引入vue
if (typeof window !== undefined && window.Vue) {
    install(window.Vue);
}
export default {
    install,
};
