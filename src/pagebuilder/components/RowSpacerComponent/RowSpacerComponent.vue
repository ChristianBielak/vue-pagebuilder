<template>
    <div class="row-spacer-component">
        <div class="button-tooltip-wrapper left">
            <span class="select-grid-icon"  @click.prevent="isSelectGridOpen = !isSelectGridOpen">
                <plus></plus>
            </span>
            <div class="pb-tooltip" v-show="isSelectGridOpen">
                <span class="text">
                    Raster
                    <br>
                    auswählen
                </span>
                <span @click.prevent="createRow(['pb-large-12'])"><grid12></grid12> </span>
                <span @click.prevent="createRow(['pb-large-6', 'pb-large-6'])"><grid6></grid6></span>
                <span @click.prevent="createRow(['pb-large-4', 'pb-large-8'])"><grid48></grid48></span>
                <span @click.prevent="createRow(['pb-large-8', 'pb-large-4'])"><grid84></grid84></span>
            </div>
        </div>

        <div class="button-tooltip-wrapper right" v-if="row">
            <span class="select-grid-icon"  @click.prevent="isSettingsOpen = !isSettingsOpen">
                <settings-icon></settings-icon>
            </span>
            <div class="pb-tooltip" v-show="isSettingsOpen">
                <span class="text" @click="deleteRow()">
                    <i class="glyphicon glyphicon-trash"></i>
                </span>
            </div>
        </div>
        <hr>
    </div>
</template>

<script lang="ts" src="./RowSpacerComponent.ts"></script>

<style lang="scss" src="./RowSpacerComponent.scss" ></style>