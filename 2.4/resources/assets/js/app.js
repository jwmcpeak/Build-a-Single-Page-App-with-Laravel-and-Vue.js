import Vue from 'vue';
import SubmitTicketFormComponent from './components/SubmitTicketFormComponent.vue';


require('./bootstrap');

window.Vue = Vue;

const app = new Vue({
    el: '#app',
    render: f => f(SubmitTicketFormComponent)
});
