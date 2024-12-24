/* eslint-disable no-undef */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

/*
import './assets/theme/vendor/aos/aos.js';
import './assets/theme/vendor/aos/aos.css';

console.log("App main.js loading");

const initAOS = () => {
    if (typeof window.AOS === 'undefined') {
        setTimeout(initAOS, 100);
        return;
    }
    window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true
    });
};
console.log("initAOS function defined");

initAOS();
console.log("initAOS function called");
*/
/*
Imports for theme to work
*/

// Import vendor CSS
//import '@/assets/theme/vendor/bootstrap/css/bootstrap.min.css';
//import '@/assets/theme/vendor/bootstrap-icons/bootstrap-icons.css';
//import './assets/theme/vendor/aos/aos.css';
// import './assets/theme/vendor/glightbox/css/glightbox.min.css';
// import './assets/theme/vendor/swiper/swiper-bundle.min.css';

// Import vendor JS
//import './assets/theme/vendor/bootstrap/js/bootstrap.bundle.min.js';
//import './assets/theme/vendor/aos/aos.js';
// import './assets/theme/vendor/glightbox/js/glightbox.min.js';
// import './assets/the§me/vendor/purecounter/purecounter_vanilla.js';
// import './assets/theme/vendor/imagesloaded/imagesloaded.pkgd.min.js';
// import './assets/theme/vendor/isotope-layout/isotope.pkgd.min.js';
// import './assets/theme/vendor/swiper/swiper-bundle.min.js';


// ... rest of file ...
// Import theme scripts
/*
End of imports for theme to work
*/

// Import main app style
import './assets/styles/main.scss';

createApp(App).use(router).mount('#app');
