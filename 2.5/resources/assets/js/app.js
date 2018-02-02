import Vue from 'vue';
import VeeValidate from 'vee-validate';
import SubmitTicketFormComponent from './components/SubmitTicketFormComponent.vue';


require('./bootstrap');

window.Vue = Vue;

Vue.use(VeeValidate);

const app = new Vue({
    el: '#app',
    render: f => f(SubmitTicketFormComponent)
});
