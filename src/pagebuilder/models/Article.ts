import {BaseModel} from "./BaseModel";
import {Translation} from "./Translation";
import {Row} from "./Row";
import moment from 'moment';

export class Article extends BaseModel{

    photo: string = '';
    translations: Translation[] = [];
    name: string = '';
    //@ts-ignore
    published_on: Date = moment().format('YYYY-MM-DDTHH:mm:ss');
    is_published: boolean = false;
    rows: Row[] = [];
    customField: string = '';

}