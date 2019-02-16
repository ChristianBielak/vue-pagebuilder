import {TranslationService} from "./TranslationService";
import {Translation} from "../models/Translation";
import {RowService} from "./RowService";
import store from "@/store/store";
import {Article} from "@/pagebuilder/models/Article";


const languages = store.getters.getLanguages;

export abstract class ArticleService {

    public static createNew(): Article {
        const languages = store.getters.getLanguages;
        let article = new Article();

        languages.forEach((lang: any) => {
            article.translations[lang.id] = new Translation(lang.id);
        });

        return article
    }

    public static createFromExisting(oldArticle: any): Article {
        const languages = store.getters.getLanguages;
        let article = new Article();
        try {

            article.name = oldArticle.name;
            article.id = oldArticle.id;
            article.photo = oldArticle.photo;
            article.published_on = oldArticle.published_on;
            article.is_published = oldArticle.is_published;

            if (oldArticle.translations && oldArticle.translations.length) {
                languages.forEach((lang: any) => {
                    article.translations[lang.id] = new Translation(lang.id);
                });
                oldArticle.translations.forEach((t: any) => {
                    article.translations[t.language_id] = TranslationService.createFromExisting(t);
                })
            } else {
                languages.forEach((lang: any) => {
                    article.translations[lang.id] = new Translation(lang.id);
                })
            }

            if (oldArticle.rows && oldArticle.rows.length) {
                oldArticle.rows.forEach((r: any) => {
                    let row = RowService.createFromExisting(r);
                    article.rows.push(row);
                })
            }

            return article;

        } catch (e) {
            console.error(e);
            return article;
        }
    }
}