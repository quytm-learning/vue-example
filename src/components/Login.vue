<template>
    <div class="login-layout">
        <h1>Login</h1>
        <div class="btn-login btn-info" @click="onClick">Login</div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            onClick: () => {
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped>

</style>