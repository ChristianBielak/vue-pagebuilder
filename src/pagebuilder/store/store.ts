import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import mutations from "./mutations";
import actions from './actions';
import {Article} from "../models/Article";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        /* Pagebuilder stuff */

        articles: [],
        article: Article,
        element_types: [],
        languages: [],
        currentLang: {},
    },
    getters,
    mutations,
    actions
})
