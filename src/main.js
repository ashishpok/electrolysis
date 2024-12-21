import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import main app style
import './assets/styles/main.scss';


createApp(App).use(router).mount('#app');
