import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home'
import store from './store';
import ArticleDetails from "@/views/article-details/ArticleDetails";
import Articles from "@/views/articles/Articles";

Vue.use(Router);
import {i18n} from "@/i18n/i18n";

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/:lang/articles',
            name: 'articles',
            component: Articles,
            beforeEnter(to, from, next) {
                console.log('yups')
                const lang = to.params.locale;
                store.dispatch('fetchArticles', i18n.locale);
                next();
            }
        }, {
            path: '/:lang/articles/:id',
            name: 'article-details',
            component: ArticleDetails,
            beforeEnter(to, from, next) {
                const lang = to.params.locale;
                store.dispatch('fetchArticle', {id: to.params.id, locale: i18n.locale});
                next();
            }
        }
    ]
})
