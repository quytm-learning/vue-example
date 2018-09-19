<template>
    <div class="user-item">
        <div class="header">
            <div class="user-id">id</div>
            <div class="user-name">Name</div>
            <div class="user-age">Age</div>
        </div>
        <div class="body">
            <div class="user-id">{{user.id}}</div>
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
    .header, .body {
        display: flex;
        flex-direction: row;
    }

    .user-id {
        flex: 1;
    }

    .user-name {
        flex: 1
    }

    .user-age {
        flex: 1
    }
</style>