import {BaseModel} from "./BaseModel";

export class Translation extends BaseModel{

    constructor(lang: number){
        super();
        this.language_id = lang;
    }

    content: object = {};
    language_id: number = 0;
    translatable_id: number;
    translatable_type: string = '';

}