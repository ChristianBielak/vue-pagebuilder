import {Column} from "../models/Column";
import {TranslationService} from "./TranslationService";
import {Translation} from "../models/Translation";

import Vue from 'vue';
import store from "@/store/store";


export abstract class ColumnService {


    public static createNew(columnSize: string): Column {
        const languages = store.getters.getLanguages;
        let column = new Column();

        column.column_size = columnSize;

        languages.forEach((lang: any) => {
            column.translations[lang.id] = new Translation(lang.id);
        });

        return column;
    }

    public static createFromExisting(oldColumn: any): Column {
        const languages = store.getters.getLanguages;
        let column = new Column();
        try {

            column.id = oldColumn.id;
            column.active = oldColumn.active;
            column.sorting = oldColumn.sorting;
            column.row_id = oldColumn.row_id;
            column.element_type_id = oldColumn.element_type_id;
            column.column_size = oldColumn.size;
            column.custom_class = oldColumn.custom_class;

            if (oldColumn.translations && oldColumn.translations.length) {
                languages.forEach((lang: any) => {
                    column.translations[lang.id] = new Translation(lang.id);
                });
                oldColumn.translations.forEach((t: any) => {
                    column.translations[t.language_id] = TranslationService.createFromExisting(t);
                })
            } else {
                languages.forEach((lang: any) => {
                    column.translations[lang.id] = new Translation(lang.id);
                })
            }

            return column;

        } catch (e) {
            console.error(e);
            return column;
        }
    }
}