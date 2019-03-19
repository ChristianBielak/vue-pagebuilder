import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
//@ts-ignore
import pbConfig from '../config/config.json'


@Component
export default class ColumnComponent extends Vue {
    @Prop()
    column: any;

    created() {
        if (this.element_type) {
            Vue.component(
                this.element_type,
                () => import( /*webpackChunkName: "pagebuilder-element"*/ "../elements/" + this.element_type + '/' + this.element_type)
            );
        }
    }

    get columnSize() {
        return pbConfig.foundation[this.column.column_size];
    }

    get element_type() {
        return this.column.element_type.component
    }
}