import Dashboard from './Dashboard.vue';
import Login from './Login.vue';
import ViewTicket from './ViewTicket.vue';





export default [
    { path: '/', component: Dashboard },
    { path: '/login', component: Login },
    { path: '/tickets/:ticketId', component: ViewTicket, props: true, 
        name: 'view-ticket' }
    
];