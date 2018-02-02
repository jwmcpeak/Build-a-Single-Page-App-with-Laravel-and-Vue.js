<template>
    <table class="table table-striped">
        <thead>
            <tr>
                
                <th>Title</th>
                <th>Email</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Created</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="ticket in tickets" v-bind:key="ticket.id">
                <td>
                    <router-link :to="{ name: 'view-ticket', params: {ticketId: ticket.id}}">
                        {{ ticket.title }}
                    </router-link>
                    
                </td>
                <td>{{ ticket.email }}</td>
                
                <td>{{ ticket.user ? ticket.user.name : '' }}</td>
                <td>{{ ticket.status == 1? 'Pending' : 'Completed' }}</td>
                <td>{{ ticket.created_at }}</td>

            </tr>
        </tbody>
    </table>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            tickets: []
        };
    },
    mounted() {
        this.getTickets();
    },
    methods: {
        getTickets() {
            axios.get('/api/admin/tickets').then(res => {
                this.tickets = res.data
            });
        }
    }
}
</script>

