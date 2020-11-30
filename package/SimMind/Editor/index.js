import Vue from "vue";
import editorBase from "./main.vue";
let instance = null;
const editorConstructor = Vue.extend(editorBase);
editorConstructor.prototype.close = function() {
    if (instance) {
        let vm = instance;
        if (vm.$el && vm.$el.parentNode) {
            vm.$el.parentNode.removeChild(vm.$el);
        }
    }
};
const closeAlleditor = editorConstructor.prototype.close;
const editorBaseConstructor = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    let parent = options.$el || document.body;
    editorConstructor.prototype.close();
    instance = new editorConstructor({
        el: document.createElement("div"),
        data: options,
    });
    parent.appendChild(instance.$el);
    return instance;
};

export { editorBaseConstructor, closeAlleditor };
