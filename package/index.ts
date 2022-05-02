import SimMind from './simmind/index.vue';
import type { App } from 'vue';

const install = (app: App) => {
  app.component('SimMind', SimMind);
};
export default install;
