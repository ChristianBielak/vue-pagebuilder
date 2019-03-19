import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import ColumnComponent from "@/components/pagebuilder-components/column-component/ColumnComponent";

@Component({
    components: {
        ColumnComponent
    }
})
export default class RowComponent extends Vue {
    @Prop()
    row: any;

    get columns(){
        return this.row.columns;
    }
}