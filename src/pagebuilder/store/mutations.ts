import {Article} from "../models/Article";

export default {


    /* Pagebuilder mutations */
    setElementTypes: (state: any, elementTypes: any) => {
        state.element_types = elementTypes;
    },
    setLanguages: (state: any, languages: any) => {
        state.languages = languages;
    },
    setCurrentLang: (state: any, lang: any) => {
        state.currentLang = lang;
    },
    setArticle: (state: any, article: Article) => {
        state.article = article;
    },
    setRoute: (state: any, route: string) => {
        state.route = route;
    }
}