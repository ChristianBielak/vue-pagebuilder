import Vuex from 'vuex';
import Vue from 'vue';

import getters from './getters'
import mutations from './mutations'
import actions from "./actions"

Vue.use(Vuex);

export function createStore():any {
    
    return new Vuex.Store({
        state: {
            directories: [],
            files: [],
            selected: [],
            isLoading: true,
            lastRoute: {},
            currentRoute: {}
        },
        getters,
        mutations,
        actions
    })

}
