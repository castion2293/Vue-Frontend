<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <input v-model="email" class="form-control" type="email" placeholder="Emial">
                    </div>

                    <div class="form-group">
                        <input v-model="password" class="form-control" type="password" placeholder="Password">
                    </div>

                    <button @click="login" class="btn btn-success pull-right">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            login () {
                var data = {
                    grant_type: 'password',
                    client_id: 2,
                    client_secret: 'VzYQT9KtESCUEuZvQ1AFePyW3q6rARNKhDIPBfDP',
                    username: 'bayer.noemie@example.org',
                    password: 'secret',
                    scope: ''
                }
                
                // this.$http.get("http://demobackend.com/api/test")
                //     .then(response => {
                //         //this.$auth.setToken(response.body.access_token, response.body.expires_in + Dae.now())
                //         console.log(response)
                        
                //     })

                this.$http.post("oauth/token", data)
                    .then(response => {
                        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                        
                        //redirect route
                        this.$router.push("/feed")
                    })
            }
        }
        
    }
</script>

<style>

</style>