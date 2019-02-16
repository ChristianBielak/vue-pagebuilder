<template>
    <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         width="150" height="150" viewBox="0 0 150 150">
        <defs>
            <linearGradient id="Unbenannter_Verlauf_19" data-name="Unbenannter Verlauf 19" y1="75" x2="150" y2="75"
                            gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#ff416c"/>
                <stop offset="1" stop-color="#fc6767"/>
            </linearGradient>
        </defs>
        <title>UB_Pagebuilder_Icons</title>
        <path class="cls-1"
              d="M139.94,37.35a74.64,74.64,0,0,0-27.29-27.29A73.33,73.33,0,0,0,75,0,73.32,73.32,0,0,0,37.36,10.06a74.59,74.59,0,0,0-27.3,27.29A73.38,73.38,0,0,0,0,75a73.38,73.38,0,0,0,10.06,37.65,74.64,74.64,0,0,0,27.29,27.29A73.38,73.38,0,0,0,75,150a73.33,73.33,0,0,0,37.65-10.06,74.56,74.56,0,0,0,27.29-27.29A73.38,73.38,0,0,0,150,75a73.35,73.35,0,0,0-10.06-37.65Zm-25.58,42L70,123.73a6.12,6.12,0,0,1-8.79,0l-10-10a6.12,6.12,0,0,1,0-8.79l30-30-30-30a6.12,6.12,0,0,1,0-8.79l10-10a6.12,6.12,0,0,1,8.79,0l44.34,44.34a6.13,6.13,0,0,1,0,8.78Zm0,0"/>
    </svg>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from "vue-property-decorator";

    @Component
    export default class Arrow extends Vue {

    }
</script>

<style lang="scss" scoped>
    svg {
        width: 30px;
        height: 30px;

        .cls-1 {
            fill: url(#Unbenannter_Verlauf_19);
        }
    }
</style>