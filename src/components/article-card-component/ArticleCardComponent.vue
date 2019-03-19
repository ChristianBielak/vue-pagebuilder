<template>
    <div class="article-card-component">
        <div class="card article-card">
            <img :src="photo">
            <div class="card-section">
                <router-link :to="{name: 'article-details', params:{id: article.id, lang: $i18n.locale}}">
                    {{article.translations[0].content.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ArticleCardComponent.ts"></script>

<style lang="scss" src="./ArticleCardComponent.scss" scoped></style>