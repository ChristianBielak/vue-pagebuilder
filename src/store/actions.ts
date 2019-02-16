import axios from "axios";
import {Row} from "@/pagebuilder/models/Row";
import {ArticleService} from "@/pagebuilder/services/ArticleService";
import {Article} from "@/pagebuilder/models/Article";

const routePrefix: string = '/pagebuilder/';


const token: any = document.querySelector('meta[name="csrf-token"]');

let headers = {};
if (token) {
    console.log(token);
    headers = {
        headers: {"Content-Type": "multipart/json"},
        'X-CSRF-TOKEN': token.getAttribute('content')
    }
} else {
    headers = {}
}

export default {
    /* Auth stuff */
    login(context: any) {
        context.commit("login");
    },

    /* Pagebuilder stuff */

    createElement(store: any) {
        let article = store.getters.getArticle;

        axios.post(routePrefix + 'articles', article, headers).then(response => {
        })

    },

    updateElement(store: any) {
        let article = store.getters.getArticle;

        axios.put(routePrefix + 'articles/' + article.id, article, headers).then(response => {
            //window.location.href = response.data.return_url;
        }).catch(error => {
        });

    },

    deleteRow(store: any, row: Row) {
        axios.delete(routePrefix + 'delete-row', {params: {id: row.id}})
            .then((response) => {
                store.state.article.rows.splice(row.sorting, 1);
            }).catch((error) => {
            console.log(error)
        });
    },

    fetchElementTypes(store: any) {
        let elementTypes = axios.get('https://pagebuilder.ultrabold.de/api/getElements')
            .then((response: any) => {
                store.state.element_types = response.data;
            }).catch((error: any) => {
                console.log(error);
            })
    },

    fetchArticles(store: any) {
        let articles: Array<Article> = [];
        axios.get('https://pagebuilder.ultrabold.de/api/getArticles')
            .then((response: any) => {
                store.state.articles = articles;
            }).catch((error: any) => {
            console.log(error);
        })
    },

    fetchLanguages(store: any) {
        axios.get('https://pagebuilder.ultrabold.de/api/getLanguages')
            .then((response: any) => {
                store.state.languages = response.data;
            }).catch((error: any) => {
            console.log(error);
        })
    }
}