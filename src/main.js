import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import main app style
import './assets/styles/main.scss';

// Wait for document to be ready before loading theme's main.js
document.addEventListener('DOMContentLoaded', () => {
    // Load theme's main.js using a script tag
    const script = document.createElement('script');
    script.src = '/theme/js/main.js';
    document.body.appendChild(script);
});

createApp(App).use(router).mount('#app');