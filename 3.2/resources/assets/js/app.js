import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import App from './shared/App.vue';
import routes from './frontend/routes';


require('./bootstrap');

window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(VeeValidate);



const router = new VueRouter({routes});

const app = new Vue({
    router,
    el: '#app',
    render: f => f(App)
});
