import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', name: 'root'}
    ]
});

export default router;
