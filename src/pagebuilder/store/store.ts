import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import mutations from "./mutations";
import actions from './actions';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {


        /* Pagebuilder State */

        articles: [],
        article: {},
        element_types: [],
        languages: [],
        currentLang: {},
    },
    getters,
    mutations,
    actions
})
