<template>
    <div id="app">
        <Header/>
        <UserList/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import UserList from "./components/UserList";
    import Header from "./components/common/Header";

    export default {
        name: 'app',
        components: {
            Header,
            UserList,
            HelloWorld
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
