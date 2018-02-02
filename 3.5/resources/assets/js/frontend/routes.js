import SubmitTicketFormComponent from './SubmitTicketFormComponent.vue';
import ViewTicketComponent from './ViewTicketComponent.vue';

export default [
    { path: '/create', component: SubmitTicketFormComponent },
    { path: '/view/:ticketId', name: 'client-view-ticket', component: ViewTicketComponent, props: true }
];