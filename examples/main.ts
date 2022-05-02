import { createApp } from 'vue';
import SimMind from '../package/index';
import App from './App.vue';
import '../package/style/index.less';
const app = createApp(App);
app.use(SimMind);
app.mount('#app');
