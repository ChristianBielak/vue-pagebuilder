<template>
    <div class="container-fluid">
        <div class="pagebuilder-component">
            <div class="row justify-content-center">

                <div class="col-3">
                    <div class="pb-side-nav-wrapper">
                        <!-- <div class="panel pb-side-nav">
                         <div class="panel-body">
                         <ul>
                         <li>
                         <p @click="setDesktop">Desktop</p>
                         </li>
                         <li>
                         <p @click="setTablet">Tablet</p>
                         </li>
                         <li>
                         <p @click="setMobile">Mobile</p>
                         </li>
                         </ul>
                         </div>
                         </div>-->
                        <div class="panel pb-side-nav">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        <p>{{currentView}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="panel pb-side-nav has-dropright">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        <p>
                                            Sprachen ({{getCurrentLanguage.locale}}) <span class="lang-arrow">
                                            <arrow></arrow>
                                        </span>
                                        </p>
                                        <ul class="is-dropright">
                                            <li v-for="lang in languages">
                                                <p :class="{active: getCurrentLanguage.locale === lang.locale}"
                                                   @click.prevent="setCurrentLang(lang)">{{lang.name}}</p>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="panel pb-side-nav">
                            <div class="panel-body">
                                <ul>
                                    <li v-for="element in elementTypes">
                                        <p><span class="element-icons"></span>
                                            <component :is="element.icon"></component>
                                            {{element.name}}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-9 workspace">

                    <div class="row pb-navigation-buttons">
                        <div class="col-sm-12">
                            <div class="pb-button-group">
                                <button class="btn pb-button" :class="{active: currentView === 'Content'}"
                                        @click.prevent="currentView = 'Content'">Content
                                </button>
                                <button class="btn pb-button" :class="{active: currentView === 'Settings'}"
                                        @click.prevent="currentView = 'Settings'">Settings
                                </button>

                                <button class="btn pb-button" @click.prevent="changeTheme()">{{theme}}</button>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <content-view :article="article" v-if="currentView === 'Content'"></content-view>
                            <settings-view v-if="currentView === 'Settings'">

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label">Custom Field</label>
                                            <input class="form-control" type="text" v-model="article.customField">
                                        </div>
                                    </div>
                                </div>

                            </settings-view>
                        </div>
                    </div>
                    <br>
                    <div class="row" v-if="article.id && article.id !== 0">
                        <div class="col-sm-6">
                            <a href="#" class="btn  pb-button">Cancel</a>
                        </div>
                        <div class="col-sm-6 text-right">
                            <button type="submit" class="btn  pb-button"
                                    @click.prevent="$store.dispatch('updateElement')">
                                Save
                            </button>
                        </div>
                    </div>
                    <div class="row" v-else>
                        <div class="col-sm-6">
                            <a href="#" class="btn  pb-button">Cancel</a>
                        </div>
                        <div class="col-sm-6 text-right">
                            <button type="submit" class="btn pb-button"
                                    @click.prevent="$store.dispatch('createElement')">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./PagebuilderComponent.scss"></style>
<script lang="ts" src="./PagebuilderComponent.ts"></script>
