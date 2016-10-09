<template>
<div class="g-doc">
    <div class="g-hd">
        <About></About>
        <div class="m-nav">
            <ul class="menuOpen">
                <li class="tag-all">
                    <router-link to="/" exact><i></i>Home</router-link>
                </li>
                <li class="tag-life">
                    <router-link to="/page1"><i></i>Page1</router-link>
                </li>
            </ul>
        </div>
    </div>
    <transition name="fade" mode="out-in">
        <router-view class="router"></router-view>
    </transition>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import NProgress from 'nprogress'
import About from './components/about.vue'
export default {
    computed: {
        ...mapGetters({
            global: 'getGlobal'
        })
    },
    components: {
        About
    },
    watch: {
        'global.progress'(val) {
            if (val === 0) {
                NProgress.set(0)
                NProgress.start()
            } else if (val === 100) {
                NProgress.done()
            } else {
                NProgress.set(val/100)
                NProgress.start()
            }
        }
    }
}
</script>
<style media="screen">
    .fade-enter-active, .fade-leave-active {
        transition: all 0.3s ease;
    }
    .fade-enter {
        opacity: 1;
        transform: translate3d(0, 100px, 0);
    }
    .fade-leave-active {
        opacity: 0;
        transform: translate3d(100px, 0, 0);
    }
</style>
