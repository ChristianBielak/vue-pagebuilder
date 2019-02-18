<template>
    <div class="component-vue-date-picker">
        <date-picker v-model="date" :config="config" :name="name"></date-picker>
    </div>
</template>

<script lang="ts" src="./VueDatePicker.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./VueDatePicker.scss" scoped></style>
