import Vue from "vue";


import {Component, Prop, Watch, Emit} from "vue-property-decorator";
import ColumnComponent from '../ColumnComponent/ColumnComponent';
import {Row} from "../../models/Row";
import RowSpacerComponent from "../RowSpacerComponent/RowSpacerComponent";

@Component({
    components: {
        ColumnComponent,
        RowSpacerComponent
    }
})
export default class RowComponent extends Vue {

    @Prop()
    row: Row;
    @Prop()
    arrayIndex: number;

    columnLimit: number = 1;

    @Emit('onImageUpload')
    onImageUpload(){
    }


    get sorting(){
        return this.arrayIndex;
    }

    @Watch('arrayIndex', {deep: true, immediate: true})
    onSortingChange(val:number, oldVal:number){
        this.row.sorting = val;
    }
};