import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import App from './shared/App.vue';
import routes from './admin/routes';


require('./bootstrap');

window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(VeeValidate);



const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
    if (to.fullPath !== '/login') {
        axios.get('/api/profile').then(res => {
            if (!res.data) {
                router.push('/login');
            } else {
                next();
            }
        }).catch(err => {
            router.push('/login');
        });
    } else {
        next();
    }
});

const app = new Vue({
    router,
    el: '#app',
    render: f => f(App)
});
