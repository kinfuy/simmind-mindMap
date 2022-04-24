import kity from 'kity';
import type { App } from 'vue';
import kityminder from './kityminder-core';
import './SimMind/Icon/index.css';
const install = function (Vue: App) {
  Vue.use(kity);
  Vue.use(kityminder);
};
export default {
  install
};
