import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import mutations from "@/store/mutations";
import actions from './actions';
import {getLoggedinUser} from "@/helpers/auth";
import {Article} from "@/pagebuilder/models/Article";

Vue.use(Vuex)

const user: any = getLoggedinUser();

export default new Vuex.Store({
    state: {
        /* Auth stuff */

        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        reg_error: null,
        registeredUser: null,

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
