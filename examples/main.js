import Vue from "vue";
import App from "./App.vue";
import SimMind from "./../package/index";
Vue.config.productionTip = false;

Vue.use(SimMind);
new Vue({
    render: (h) => h(App),
}).$mount("#app");
