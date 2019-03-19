import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: [],
        article: {}
    },
    mutations: {
        setArticles: (state: any, articles: any) => {
            state.articles = articles;
        },
        setArticle: (state: any, article: number) => {
            state.article = article;
        }
    },
    getters: {
        articles: (state: any) => {
            return state.articles;
        },
        article: (state: any) => {
            return state.article;
        }
    },
    actions: {
        fetchArticles: (context: any, locale: string) => {
            console.log(locale)
            axios.get('https://pagebuilder.ultrabold.de/api/getArticles', {
                params: {
                    locale: locale
                }
            })
                .then((response: any) => {
                    context.commit('setArticles', response.data);
                })
                .catch((error: any) => {
                    console.log(error);
                })
        },
        fetchArticle: (context: any, payload) => {
            console.log(payload.locale)
            axios.get('https://pagebuilder.ultrabold.de/api/getArticle', {
                params: {
                    id: payload.id,
                    locale: payload.locale
                }
            })
                .then((response: any) => {
                    context.commit('setArticle', response.data)
                })
                .catch((error: any) => {
                    console.log(error)
                })
        }
    }
})
