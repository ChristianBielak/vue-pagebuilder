import {find} from 'lodash';

export default {
    /* Pagebuilder Getters */

    elementTypes: (state: any) => {
        return state.element_types;
    },
    elementTypeById: (state: any) => (id: number) => {
        return state.element_types.find((e: any) => e.id === id)
    },
    languages: (state: any) => {
        return state.languages;
    },
    currentLang: (state: any) => {
        return state.currentLang;
    },
    languageById: (state: any) => (id: any) => {
        return find(state.languages, {'id': id})
    },
    element: (state: any) => (elementId: any, columnId: any, rowId: any) => {

        let row = find(state.rows, {'uniqueId': rowId});

        //@ts-ignore
        let column = find(row.columns, {'uniqueId': columnId});
        //@ts-ignore
        let element = find(column.translations, {'uniqueId': elementId});
        return element;
    },
    article: (state: any) => {
        return state.article;
    },
    articles: (state: any) => {
        return state.articles;
    },
}