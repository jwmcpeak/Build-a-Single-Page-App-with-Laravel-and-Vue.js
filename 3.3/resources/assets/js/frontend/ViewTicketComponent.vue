<template>
    <div>
        <h2>Ticket ID: {{ ticketId}}</h2>
        <p>Email: {{ email}}</p>
        <p>Status: {{ status }}</p>
        <h4>Content</h4>
        <p>{{ content }}</p>
    </div>
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
