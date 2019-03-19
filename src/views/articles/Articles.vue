<template>
    <div class="articles">
        <div class="row">
            <div class="small-12 medium-6 large-4 columns" v-for="article in articles" :key="article.id">
                <article-card-component @articleLoaded="articleFadeInAnimation"
                                        :article="article"></article-card-component>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Articles.ts"></script>

<style lang="scss" src="./Articles.scss" scoped></style>