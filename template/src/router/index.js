import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../pages/index.vue'
import page1 from '../pages/page1.vue'

Vue.use(VueRouter)

const scrollBehavior = to => {
    const position = {}
    if (to.hash) {
        position.selector = to.hash
    }
    if (to.matched.some(mm => mm.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
    }
    return position
}

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes: [
        { name:'index', path: '/', component: index },
        { name:'page1', path: '/page1', component: page1 }
    ]
})

export default router
