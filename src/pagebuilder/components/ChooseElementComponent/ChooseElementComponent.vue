<template>
    <div class="choose-element-component">
        <svg height="300" width="300" viewBox="0 0 300 300" class="donut-chart">
            <g v-for="(element, index) in elements" @click="addElement(element.id)">
                <circle :cx="cx" :cy="cy" :r="radius" stroke="#ff416c" :stroke-width="strokeWidth"
                        :stroke-dasharray="adjustedCircumference"
                        :stroke-dashoffset="calculateStrokeDashOffset(1, circumference)" fill="transparent"
                        :transform="returnCircleTransformValue(index)"></circle>
                <image class="element-icon" v-if="chartData[index]" :x="chartData[index].textX - 20" :y="chartData[index].textY - 20" width="40"
                       height="40" :xlink:href="`/svg/${element.icon}.svg`"/>
            </g>
        </svg>
    </div>
</template>

<script lang="ts" src="./ChooseElementComponent.ts"></script>

<style lang="scss" src="./ChooseElementComponent.scss" scoped></style>