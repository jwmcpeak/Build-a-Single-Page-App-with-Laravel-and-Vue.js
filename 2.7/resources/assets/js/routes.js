import SubmitTicketFormComponent from './components/client/SubmitTicketFormComponent.vue';
import ViewTicketComponent from './components/client/ViewTicketComponent.vue';

export default [
    { path: '/create', component: SubmitTicketFormComponent },
    { path: '/view/:ticketId', name: 'client-view-ticket', component: ViewTicketComponent, props: true }
];