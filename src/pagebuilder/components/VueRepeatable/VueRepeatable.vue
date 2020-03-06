<template>
    <div class="component-vue-repeatable">
        <div class="text-right mb-2">
            <button @click.prevent="addField" class="btn btn-success mb-3">
                +
            </button>
        </div>

        <div class="text-right mb-3" v-if="repeaterFields.length">
            {{ repeaterFields.length }} Items
            <span
                class="btn btn-default toggle"
                :class="{ toggled: open }"
                @click="open = !open"
            >
                Toggle
            </span>
        </div>

        <hr v-if="repeaterFields.length" />

        <div v-show="open" class="list-group">
            <div
                v-for="(field, i) in repeaterFields"
                :key="`repeater-item-${i}`"
                class="repeater-fields--field list-group-item"
            >
                <slot
                    name="field"
                    :field="field"
                    :index="i"
                    :remove-field="removeField"
                />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./VueRepeatable.ts"></script>

<style lang="scss" src="./VueRepeatable.scss"></style>
