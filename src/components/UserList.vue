<template>
    <div class="user-list-item">
        <UserItem
                v-for="user in users"
                v-bind:user="user"
                v-bind:key="user.id"></UserItem>
    </div>
</template>

<script>

    import UserItem from './UserItem';

    export default {
        name: "UserList",
        data: () => {
            return {
                users: [
                    {id: 0, name: 'QuyDz', age: 24},
                    {id: 1, name: 'Quy 2', age: 25},
                    {id: 2, name: 'Quy 3', age: 26},
                ]
            }
        },
        components: {UserItem},
        component: {
            UserItem
        }
    }
</script>

<style scoped>
    .user-list-item {
        width: 100%
    }
</style>