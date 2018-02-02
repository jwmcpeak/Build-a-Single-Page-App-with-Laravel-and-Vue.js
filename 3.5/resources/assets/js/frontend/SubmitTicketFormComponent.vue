<template>
    <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
            <input class="form-control" type="text" name="email" id="email" 
                placeholder="Your Email Address" v-model="email"
                v-validate="'required|email'" />

            <p class="text-danger" v-if="errors.has('email')">
                {{ errors.first('email') }}
            </p>
        </div>

        <div class="form-group">
            <input class="form-control" type="text" name="title" id="title" 
                placeholder="Title" v-model="title"
                v-validate="'required'" />
            
            <p class="text-danger" v-if="errors.has('title')">
                {{ errors.first('title') }}
            </p>
        </div>
        
        <div class="form-group">
            <label for="ticket-content">Description</label>
            <textarea class="form-control" name="content" id="content"
                v-model="content" v-validate="'required'"></textarea>

            <p class="text-danger" v-if="errors.has('content')">
                {{ errors.first('content') }}
            </p>
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
            this.$validator.validateAll().then( result => {
                if (result) {
                    this.sendRequest();
                }
            });
        },
        sendRequest() {
            axios.post('/api/tickets', {
                title: this.title,
                email: this.email,
                content: this.content
            }).then(res => {
                this.$router.push({
                    name: 'client-view-ticket',
                    params: {ticketId:res.data.ticketId}
                });
            }).catch(err => {
                alert(err);
            });
        }
    }
}
</script>
