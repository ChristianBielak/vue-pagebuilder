import {Translation} from "../models/Translation";

export abstract class TranslationService {

    public static createFromExisting(oldTranslation: any): Translation {
        let trans = new Translation(oldTranslation.language_id);
        try {
            trans.id = oldTranslation.id;
            trans.content = oldTranslation.content;
            trans.translatable_id = oldTranslation.translatable_id;
            trans.translatable_type = oldTranslation.translatable_type;

            return trans;
        } catch (e) {
            console.error(e);
            return trans;
        }
    }
}