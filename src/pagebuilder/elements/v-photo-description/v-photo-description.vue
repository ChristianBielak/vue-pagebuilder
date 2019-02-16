<template>
    <div class="pagebuilder-column v-photo-description">
        <div class="row">
            <div class="col-md-12">
                <div class="tab-content">
                    <div v-for="(l, index) in $store.getters.getLanguages" role="tabpanel"
                         :id="l.locale"
                         :class="[l.locale === $store.getters.getCurrentLang.locale ? 'tab-pane active' : 'tab-pane']">
                        <input type="hidden" :value="l.id"/>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <vue-dropzone :ref="'photoDescription' + l.id" id="dropzone"
                                                  :options="dropzoneOptions"
                                                  :destroyDropzone="false"
                                                  @vdropzone-success="onSuccess"
                                                  @vdropzone-removed-file="onFileRemove"
                                    >
                                    </vue-dropzone>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group pb-input">
                                    <input :id="'description' + l.id"
                                           type="text"
                                           class="form-control"
                                           :placeholder="'Bildunterschrift (' + l.locale +')'"
                                           v-model="translations[l.id].content.description"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group pb-input">
                                    <quill-editor :content="translations[l.id].content.text"
                                                  :options="quillOptions"
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

<script lang="ts" src="./v-photo-description.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./v-photo-description.scss"></style>
