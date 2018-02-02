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
                <th>Assigned To</th>
                <td>
                    <select v-model="selectedUser">
                        <option v-for="user in users" :value="user.id" :key="user.id">
                            {{ user.name }}
                        </option>
                    </select>

                </td>
            </tr>
            <tr>
                <th>Status</th>
                <td>
                    <select v-model="status">
                        <option value="1">Pending</option>
                        <option value="2">Competed</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>Content</th>
                <td>{{ content }}</td>
            </tr>
            <tr>
                <td colspan="2">
                    <button class="btn btn-primary" @click.prevent="sendRequest">Save</button>
                </td>
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
            status: 1,
            content: '',
            title: '',
            selectedUser: '',
            users: []
        };
    },
    mounted() {
        axios.get(`/api/admin/tickets/${this.ticketId}`).then(res => {
            let data = res.data;
            this.email = data.email;
            this.status = data.status;
            this.content = data.content;
            this.title = data.title;
            this.users = data.users;

            this.selectedUser = data.selectedUser;
        }).catch(err => {
            alert(err);
        });
    },
    methods: {
        sendRequest(e) {
            axios.put(`/api/admin/tickets/${this.ticketId}`, {
                status: this.status,
                user_id: this.selectedUser
            }).then(res => {
                this.$router.push('/');
            }).catch(err => {
                alert(err);
            });
        }
    }
}
</script>
