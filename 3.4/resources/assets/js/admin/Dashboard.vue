<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Email</th>
                <th>Title</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Created</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="ticket in tickets" v-bind:key="ticket.id">
                <td>{{ ticket.email }}</td>
                <td>{{ ticket.title }}</td>
                <td></td>
                <td>{{ ticket.status }}</td>
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

