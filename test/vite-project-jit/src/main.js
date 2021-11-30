// import Vue from "vue";
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'

import DefaultLayout from './layouts/default/DefaultLayout.vue'
// import SellerLayout from './layouts/seller/SellerLayout.Vue'

createApp(App)
    .use(router)
    .component('default-layout', DefaultLayout)
    .mount('#app')
