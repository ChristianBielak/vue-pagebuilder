<template>
    <div class="v-photo-description">
        <figure>
            <figcaption>
                <img :src="photo">
            </figcaption>
        <p>
            {{content.description}}
        </p>
        </figure>
        <p v-html="content.text"></p>
    </div>
</template>

<script lang="ts" src="./v-photo-description.ts"></script>

<style lang="scss" src="./v-photo-description.scss" scoped></style>