<template>
    <div class="row-component">
        <div class="row row-draggable">
            <column-component :column="column" v-for="column in row.columns" :key="column.uuid"
                              @onImageUpload="onImageUpload"></column-component>
        </div>
        <row-spacer-component :row="row"></row-spacer-component>
    </div>
</template>

<script lang="ts" src="./RowComponent.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./RowComponent.scss"></style>
