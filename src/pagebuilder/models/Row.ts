import {BaseModel} from "./BaseModel";
import {Column} from "./Column";

export class Row extends BaseModel{


    constructor() {
        super();
        this.uuid = this.createUUID()
    };

    sorting: number = 0;
    //Default value for developing
    expanded: boolean = false;
    custom_class: string = '';
    columns: Column[] = [];

}