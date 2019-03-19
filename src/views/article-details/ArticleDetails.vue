<template>
    <div class="article-details">
        <div class="row">
            <div class="small-12 columns">
                <img :src="articlePhoto">
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row align-center">
            <div class="small-12 large-10 columns">
                <section class="section" v-for="row in rows">
                    <row-component class="pb-element" :row="row" :key="row.id"></row-component>
                </section>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ArticleDetails.ts"></script>

<style lang="scss" src="./ArticleDetails.scss" scoped></style>