<template>
    <form class="form-horizontal" v-on:submit.prevent="onSubmit">
        <div class="form-group row">
            <label for="email" class="col-lg-4 col-form-label text-lg-right">E-Mail Address</label>

            <div class="col-lg-6">
                <input id="email" type="email" class="form-control" 
                    name="email" v-model="email" required autofocus />
            </div>
        </div>

        <div class="form-group row">
            <label for="password" class="col-lg-4 col-form-label text-lg-right">Password</label>

            <div class="col-lg-6">
                <input id="password" type="password" class="form-control" 
                    name="password" v-model="password" required />
            </div>
        </div>

        <div class="form-group row">
            <div class="col-lg-8 offset-lg-4">
                <button type="submit" class="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        onSubmit(e) {
            axios.post('/login', {
                email: this.email,
                password: this.password
            }).then(res => {
                this.$router.push('/');
            }).catch(err => {
                alert('The email address or the password is incorrect.');
            });
        }
    }
}
</script>

