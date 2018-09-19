import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    model: 'history',
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
