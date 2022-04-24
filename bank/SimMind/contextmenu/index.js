import Vue from "vue";
import contextmenuBase from "./main.vue";
let instance = null;
const contextmenuConstructor = Vue.extend(contextmenuBase);
contextmenuConstructor.prototype.close = function() {
    if (instance) {
        let vm = instance;
        if (vm.$el && vm.$el.parentNode) {
            vm.$el.parentNode.removeChild(vm.$el);
        }
    }
};
const closeAllContextmenu = contextmenuConstructor.prototype.close;
const contextmenu = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    let parent = document.body;
    contextmenuConstructor.prototype.close();
    instance = new contextmenuConstructor({
        el: document.createElement("div"),
        data: options,
    });
    parent.appendChild(instance.$el);
    return instance;
};

export { contextmenu, closeAllContextmenu };
