<template>
    <div class="v-headline-text">
        <h1>
            {{content.headline}}
        </h1>
        <p v-html="content.text"></p>
    </div>
</template>

<script lang="ts" src="./v-headline-text.ts"></script>

<style lang="scss" src="./v-headline-text.scss" scoped></style>