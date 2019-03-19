<template>
    <div id="app">
        <navigation></navigation>
        <transition name="page-transition"  mode="out-in">
            <router-view class="content"></router-view>
        </transition>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from "vue-property-decorator";
    import Navigation from "@/components/navigation/Navigation";

    @Component({
        components: {
            Navigation
        }
    })
    export default class App extends Vue {
        mounted(){
            console.log(this.$i18n.locale)
        }
    }
</script>

<style lang="scss" src="./assets/scss/app.scss">

</style>
