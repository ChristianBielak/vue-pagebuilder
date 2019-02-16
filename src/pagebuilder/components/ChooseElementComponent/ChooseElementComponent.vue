<template>
    <div class="choose-element-component">
        <div id="divWheel" class="blub" style="height: 320px; width: 320px" data-wheelnav
             data-wheelnav-wheelradius="160"
             data-wheelnav-slicepath="DonutSlice"
             data-wheelnav-colors="rgba(255, 65, 108, 0.5), rgba(255, 65, 108, 0.5)"
             data-wheelnav-rotateoff>
            <div v-for="element in elementTypes" class="hiho" :data-wheelnav-navitemtext="element.name">
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ChooseElementComponent.ts"></script>

<style lang="scss" src="./ChooseElementComponent.scss" scoped></style>