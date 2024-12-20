import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import main app style
import './styles/main.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).mount('#app');
