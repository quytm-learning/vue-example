<template>
    <div class="app-header">
        <img class="header-logo" alt="Vue logo" src="../../assets/logo.png">
        <div class="header-title">Vue example</div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .app-header {
        /*position: fixed;*/
        width: 100%;
        height: 40px;
        z-index: 100;
        padding: 10px 60px;

        box-shadow: 0 0 1px rgba(0,0,0,0.25);
    }
    .header-logo {
        display: inline;
        vertical-align: middle;
        margin-right: 6px;
        width: 40px;
        height: 40px;
    }
    .header-title {
        display: inline;
        font-weight: bold;
        color: rgba(0,0,0,0.62);
        font-size: 24px;
    }
</style>