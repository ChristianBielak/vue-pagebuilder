<template>
    <div class="navigation">
        <div class="top-bar">
            <div class="top-logo">
                <router-link :to="{name: 'home'}"> Vue.js Pagebuilder</router-link>
            </div>
            <div class="top-bar-menu">
                <div class="menu-left">
                    <router-link :to="{name: 'home'}">Home</router-link>
                    <router-link :to="{name: 'articles', params:{lang: $i18n.locale}}">Articles</router-link>
                </div>
                <div class="menu-right">
                    <div class="language-switch">
                        <span @click="switchLang('de')">
                            DE
                        </span>
                        /
                        <span @click="switchLang('en')">
                            EN
                        </span>
                    </div>
                    <a href="https://github.com/ChristianBielak/vue-pagebuilder" target="_blank">
                        Github
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Navigation.ts"></script>

<style lang="scss" src="./Navigation.scss" scoped></style>