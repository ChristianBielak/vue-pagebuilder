<template>
    <div class="content-view">
        <row-spacer-component v-if="!article.rows || article.rows.length === 0"></row-spacer-component>
        <div class="row-component-wrapper">
            <draggable v-model="getArticle.rows" :options="{filter: '.row-spacer-component'}">
                    <row-component @onImageUpload="onImageUpload" v-for="(row, index) in getArticle.rows" :row="row"
                                   :key="row.uuid" :array-index="index"></row-component>
            </draggable>
        </div>
    </div>
</template>

<script lang="ts" src="./ContentView.ts"></script>

<style lang="scss" src="./ContentView.scss" scoped></style>