<template>
    <div class="user-item">
        <div class="header">
            <div class="user-name">Name</div>
            <div class="user-age">Age</div>
        </div>
        <div class="body">
            <div class="user-name">{{user.name}}</div>
            <div class="user-age">{{user.age}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserItem",
        props: ['user']
    }
</script>

<style scoped>
    .user-item {
        display: flex;
        flex-direction: row;
    }
    .header {
        flex: 1;
    }
    .body {
        flex: 1
    }
</style>