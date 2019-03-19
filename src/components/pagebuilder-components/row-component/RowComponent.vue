<template>
    <div class="row-component row" :class="{'expanded': row.expanded}">
        <column-component v-for="column in columns" :column="column" :key="column.id"></column-component>
    </div>
</template>

<script lang="ts" src="./RowComponent.ts"></script>

<style lang="scss" src="./RowComponent.scss" scoped></style>