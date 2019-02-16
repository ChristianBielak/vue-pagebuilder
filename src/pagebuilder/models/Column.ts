import {BaseModel} from "./BaseModel";
import {Translation} from "./Translation";

export class Column extends BaseModel{

    constructor() {
        super();
        this.uuid = this.createUUID()
    };

    active: boolean = true;
    translations: Translation[] = [];
    sorting: number = 0;
    row_id: number = 0;
    element_type_id: number = 0;
    //Default value for developing
    column_size: string = "12";
    custom_class: string = '';

}