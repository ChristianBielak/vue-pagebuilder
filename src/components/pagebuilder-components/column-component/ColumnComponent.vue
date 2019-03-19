<template>
    <div class="column-component columns small-12" :class="columnSize">
            <component :is="element_type" :content="column.content"></component>
    </div>
</template>

<script lang="ts" src="./ColumnComponent.ts"></script>

<style lang="scss" src="./ColumnComponent.scss" scoped></style>