<template>
    <table class="table">
        <thead>
            <th colspan="2">{{ title }}</th>
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
            content: '',
            title: ''
        };
    },
    mounted() {
        axios.get(`/api/admin/tickets/${this.ticketId}`).then(res => {
            let data = res.data;
            this.email = data.email;
            this.status = data.status == 1 ? 'Pending' : 'Completed';
            this.content = data.content;
            this.title = data.title;
        }).catch(err => {
            alert(err);
        });
    }
}
</script>
