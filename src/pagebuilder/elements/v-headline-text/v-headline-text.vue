<template>
    <div class="pagebuilder-column">
        <div class="row">
            <div class="col-md-12">
                <div class="tab-content">
                    <div v-for="(l, index) in $store.getters.getLanguages" role="tabpanel"
                         :id="l.locale"
                         :class="[l.locale === $store.getters.getCurrentLang.locale ? 'tab-pane active' : 'tab-pane']">
                        <input type="hidden" :value="l.id"/>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group pb-input">
                                    <input :id="'headline'+l.id" type="text" class="form-control"
                                           :name="'headline'+l.id"
                                           v-model="translations[l.id].content.headline"
                                           :placeholder="'Ueberschrift (' + l.locale +')'">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group  pb-input">
                                    <quill-editor :content="translations[l.id].content.text"
                                    :options="options"
                                    v-model="translations[l.id].content.text"></quill-editor>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./v-headline-text.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./v-headline-text.scss"></style>
