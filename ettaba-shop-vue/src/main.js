// import Vue from "vue";
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core"
import { faChevronRight} from "@fortawesome/free-solid-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import DefaultLayout from './layouts/default/DefaultLayout.vue'
// import SellerLayout from './layouts/seller/SellerLayout.Vue'
library.add( faChevronRight, faYoutube)

createApp(App)
    .use(router)
    .component('default-layout', DefaultLayout).component('fa',FontAwesomeIcon)
    .mount('#app')
