<template>
    <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="150" height="150" viewBox="0 0 150 150">
        <defs>
            <linearGradient id="Unbenannter_Verlauf_19" data-name="Unbenannter Verlauf 19" x1="60.9" y1="78.04" x2="89.1" y2="78.04" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#ff416c"/>
                <stop offset="1" stop-color="#fc6767"/>
            </linearGradient>
            <linearGradient id="Unbenannter_Verlauf_19-2" x1="0" y1="75" x2="150" y2="75" xlink:href="#Unbenannter_Verlauf_19"/>
        </defs>
        <title>UB_Pagebuilder_Icons</title>
        <g>
            <path class="cls-1" d="M89.1,78A14.1,14.1,0,1,1,75,63.94,14.1,14.1,0,0,1,89.1,78Zm0,0"/>
            <path class="cls-2" d="M75,0a75,75,0,1,0,75,75A75,75,0,0,0,75,0Zm39.41,85.9-10.65.68a29.38,29.38,0,0,1-2.38,5.75l7.05,8L97.3,111.47l-8-7a29.51,29.51,0,0,1-5.74,2.37l-.69,10.66H67.13l-.69-10.66a29.77,29.77,0,0,1-5.74-2.37l-8,7L41.56,100.34l7-8a29.6,29.6,0,0,1-2.37-5.75L35.58,85.9V70.17l10.66-.69a29.51,29.51,0,0,1,2.37-5.74l-7-8L52.69,44.6l8,7a29.8,29.8,0,0,1,5.74-2.38l.69-10.65H82.86l.69,10.65a29.54,29.54,0,0,1,5.74,2.38l8-7,11.12,11.13-7.05,8a30.18,30.18,0,0,1,2.38,5.74l10.65.69Zm0,0"/>
        </g>
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

        .cls-2 {
            fill: url(#Unbenannter_Verlauf_19-2);
        }
    }
</style>