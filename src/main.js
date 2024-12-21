import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import main app style
import './assets/styles/main.scss';

// Add these lines to include Bootstrap Icons and Nunito font
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';

createApp(App).use(router).mount('#app');
