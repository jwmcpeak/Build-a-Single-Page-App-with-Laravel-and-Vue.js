<template>
    <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
            <input class="form-control" type="text" name="email" id="email" 
                placeholder="Your Email Address" v-model="email" />
        </div>

        <div class="form-group">
            <input class="form-control" type="text" name="title" id="title" 
                placeholder="Title" v-model="title" />
        </div>
        
        <div class="form-group">
            <label for="ticket-content">Description</label>
            <textarea class="form-control" name="content" id="content"
                v-model="content"></textarea>
        </div>

        <div class="form-group">
            <button class="btn btn-primary">Send Ticket</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
export default {
    data: function() {
        return {
            title: '',
            email: '',
            content: ''
        };
    },
    methods: {
        onSubmit: function(e) {
            axios.post('/api/tickets', {
                title: this.title,
                email: this.email,
                content: this.content
            }).then(res => {
                console.log(res)
            });
        }
    }
}
</script>
