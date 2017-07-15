<template>
    <div id="app">

        <NavView v-show="headerShow"></NavView>
        <Loading v-show="loadingShow"></Loading>
        <transition name="slide-down">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <FooterView></FooterView>
    </div>
</template>

<script>
    import NavView from './components/Nav.vue'
    import HomeView from './components/Home.vue'
    import FooterView from './components/Footer.vue'
    import Loading from './components/loading/Loading.vue'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        name: 'app',
        data() {
            return {
                arrList: []
            }
        },

        components: {
            NavView,
            FooterView,
            HomeView,
            Loading
        },
        computed: mapGetters(['headerShow', 'loadingShow']),
        watch: {
            $route(to, from) {
                console.log(to.path)
                if (to.path == '/userinfo') {
                    this.$store.dispatch('hideHeader')
                } else {
                    this.$store.dispatch('showHeader')
                }
            }
        }

    }
</script>

<style>
    @import './assets/css/index.css';
    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: .5s all ease-in-out;
        opacity: .5;
        transform: translate3d(0, 210px, 0);
    }

    .slide-down-enter,
    .slide-down-leave {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
</style>