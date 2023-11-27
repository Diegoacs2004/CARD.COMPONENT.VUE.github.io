// import './assets/main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone,faSkull,faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPhone,faSkull,faHeart);
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')