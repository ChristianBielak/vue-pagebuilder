<template>
    <div class="row-spacer-component">
        <div class="button-tooltip-wrapper left">
            <span class="select-grid-icon" @click="isSelectGridOpen = !isSelectGridOpen">
                <plus></plus>
            </span>
            <div class="pb-tooltip" v-show="isSelectGridOpen">
                <span class="text">
                    Raster
                    <br>
                    auswählen
                </span>
                <span @click.prevent="createRow(['12'])">
                    <grid12></grid12>
                </span>
                <span @click.prevent="createRow(['6', '6'])">
                    <grid6></grid6>
                </span>
                <span @click.prevent="createRow(['4', '8'])">
                    <grid48></grid48>
                </span>
                <span @click.prevent="createRow(['8', '4'])">
                    <grid84></grid84>
                </span>
            </div>
        </div>
        <div class="button-tooltip-wrapper right" v-if="row">
            <span class="select-grid-icon" @click="isSettingsOpen = !isSettingsOpen">
                <settings-icon></settings-icon>
            </span>
            <div class="pb-tooltip text-center" v-show="isSettingsOpen">
                <div class="text" @click="deleteRow()">
                    <unicon name="trash" fill="white"></unicon>
                </div>
                <br>
                <br>
                <div class="form-check">
                    <input :id="`row${row.uuid}`" class="form-check-input" type="checkbox" v-model="row.expanded">
                    <label :for="`row${row.uuid}`" class="form-check-label">Volle breite</label>
                </div>
                <br>
                <div class="select-alignment">
                    <label :for="`selectAlignment${row.uuid}`">Ausrichtung der Spalten</label>
                    <div class="form-check">
                        <input v-model="row.alignment" class="form-check-input" type="radio" :name="`row${row.uuid}`" :id="`selectAlignment1${row.uuid}`" value="left" :checked="row.alignment === 'left'">
                        <label class="form-check-label">
                            Links
                        </label>
                    </div>
                    <div class="form-check">
                        <input v-model="row.alignment" class="form-check-input" type="radio" :name="`row${row.uuid}`" :id="`selectAlignment2${row.uuid}`" value="center" :checked="row.alignment === 'center'">
                        <label class="form-check-label">
                            Mittig
                        </label>
                    </div>
                    <div class="form-check">
                        <input v-model="row.alignment" class="form-check-input" type="radio" :name="`row${row.uuid}`" :id="`selectAlignment3${row.uuid}`" value="right" :checked="row.alignment === 'right'">
                        <label class="form-check-label">
                            Rechts
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>

<script lang="ts" src="./RowSpacerComponent.ts"></script>

<style lang="scss" src="./RowSpacerComponent.scss"></style>
