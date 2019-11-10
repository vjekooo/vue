
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './routes';
import store from './store'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    linkActiveClass: 'router-active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
