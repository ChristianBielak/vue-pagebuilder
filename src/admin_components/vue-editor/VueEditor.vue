<template>
    <div class="component-vue-editor">
        <quill-editor :content="content" :options="options" @change="onEditorChange($event)" :ref="name"></quill-editor>
        <input type="hidden" :name="name" v-model="text">
    </div>
</template>

<script lang="ts" src="./VueEditor.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./VueEditor.scss" scoped></style>
