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
              d="M75,0a75,75,0,1,0,75,75A75,75,0,0,0,75,0Zm42.71,86.89H86.89v30.82H63.11V86.89H32.29V63.11H63.11V32.29H86.89V63.11h30.82Z"/>
    </svg>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from "vue-property-decorator";

    @Component
    export default class Plus extends Vue{

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