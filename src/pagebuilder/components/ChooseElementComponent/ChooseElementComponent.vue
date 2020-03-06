<template>
    <div class="choose-element-component">
        <ul class="element-list">
            <li v-for="element in elements" @click="addElement(element.id)">
                <i :class="element.icon"></i>
                <p>
                    {{element.name}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./ChooseElementComponent.ts"></script>

<style lang="scss" src="./ChooseElementComponent.scss" scoped></style>
