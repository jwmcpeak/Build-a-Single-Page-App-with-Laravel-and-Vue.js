<template>
    <table class="table">
        <thead>
            <th colspan="2">Ticket ID: {{ ticketId }}</th>
        </thead>
        <tbody>
            <tr>
                <th>Email</th>
                <td>{{ email }}</td>
            </tr>
            <tr>
                <th>Status</th>
                <td>{{ status }}</td>
            </tr>
            <tr>
                <th>Content</th>
                <td>{{ content }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import axios from 'axios';
export default {
    props: ['ticketId'],
    data() {
        return {
            email: '',
            status: '',
            content: ''
        };
    },
    mounted() {
        axios.get(`/api/tickets/${this.ticketId}`).then(res => {
            this.email = res.data.email;
            this.status = res.data.status == 1 ? 'Pending' : 'Completed';
            this.content = res.data.content;
        }).catch(err => {
            alert(err);
        });
    }
}
</script>
