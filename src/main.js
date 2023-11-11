import { createApp } from 'vue'
import App from './App.vue'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import router from './router'
//import bootstrap from './bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


createApp(App).use(router).mount('#app')
