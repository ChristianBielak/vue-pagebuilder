<template>
    <div class="pagebuilder-column"  :class="columnSize">
        <div class="no-element-wrapper" v-if='column.element_type_id === 0' @click="toolTipActive = !toolTipActive">
            <div class="pb-tooltip" v-show="toolTipActive">

                <choose-element-component @addElement="elementAdded"></choose-element-component>

            </div>
            <plus class="add-element"></plus>
        </div>
        <div v-else>
            <component :is="component" :old-translations="column.translations" @onImageUpload="onImageUpload"></component>
        </div>
    </div>
</template>

<script lang="ts" src="./ColumnComponent.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./ColumnComponent.scss"></style>
