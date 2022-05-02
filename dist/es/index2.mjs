import kity from 'kity';
import * as kityminder_core_min from './kityminder-core/kityminder.core.min.mjs';

const install = function(Vue) {
  Vue.use(kity);
  Vue.use(kityminder_core_min);
};
var index = {
  install
};

export { index as default };
