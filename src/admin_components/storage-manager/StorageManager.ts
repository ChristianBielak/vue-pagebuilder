import Vue from "vue";

import {Component} from "vue-property-decorator";

import router from './router'

import { createStore } from "./store"
const store = createStore();

//@ts-ignore
require('vue2-animate/dist/vue2-animate.min.css')
//@ts-ignore
import Spinner from 'vue-spinkit'
//@ts-ignore
import { SweetModal } from 'sweet-modal-vue'

import {find} from 'lodash';

router.beforeEach((to, from, next) => {
  store.commit('updateRoutes', {current: to, last: from})
  next();
})

@Component({
  store,
  router,
  components: {
    Spinner,
    SweetModal
  }
})

export default class StorageManager extends Vue {

  loader:object = {
    name: 'ball-pulse-sync',
    color: '#317090',
    fadeIn: 'quarter',
    className: '',
    width: '60',
    height: '30'
  }

  beforeMount() {
    this.$store.dispatch('getFiles')
  }

  get directories(){
    return this.$store.getters.directories
  }

  get files(){
    return this.$store.getters.files
  }

  get selected(){
    return this.$store.getters.selected
  }

  get isLoading() {
    return this.$store.getters.isLoading
  }

  get allSelected() {
    return this.$store.getters.allSelected
  }

  get routes() {
    //@ts-ignore
    return this.$router.options.routes
  }

  get prevRoute() {
    return this.$store.getters.prevRoute || '/'
  }

  get currentRoute() {
    return this.$store.getters.currentRoute
  }
  
  get paths() {
    let lastPath = ''
    
    let paths = [] as any

    this.$route.path.split('/').forEach(path => {
      if(path) {
        paths.push({
          name: path,
          path: '/' + (lastPath + path)
        })
        lastPath = path + '/';
      }
    })

    return paths;
  }

  isSelected(file: object) {
    return find(this.selected, (item:object) => {
      return item == file;
    })
  }

};
