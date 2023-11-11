import { createApp } from 'vue'
import App from './App.vue'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import router from './router'
//import bootstrap from './bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faFacebookSquare, faInstagramSquare, faLinkedin, faGooglePlusG, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faHome, faFacebookSquare, faInstagramSquare, faLinkedin, faGooglePlusG, faTwitterSquare);

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')