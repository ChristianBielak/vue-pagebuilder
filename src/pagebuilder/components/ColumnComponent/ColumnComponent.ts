import Vue from "vue";

//@ts-ignore
import {Component, Prop, Watch, Emit} from "vue-property-decorator";
import {Getter, Mutation} from "vuex-class";
import axios from "axios";
import {Column} from "../../models/Column";
import {forEach} from 'lodash';
//@ts-ignore
import Plus from '../../svgs/PlusIcon.vue'
//@ts-ignore
import ImageElementIcon from '../../svgs/ElementIcons/ImageElementIcon.vue'
//@ts-ignore
import TextElementIcon from '../../svgs/ElementIcons/TextElementIcon.vue'
//@ts-ignore
import HeadlineTextElementIcon from '../../svgs/ElementIcons/HeadlineTextElementIcon.vue'

//@ts-ignore
import pbConfig from '../../config/config.json';
import ChooseElementComponent from "../ChooseElementComponent/ChooseElementComponent";

@Component({
    components: {
        Plus,
        ImageElementIcon,
        TextElementIcon,
        HeadlineTextElementIcon,
        ChooseElementComponent,
    }
})
export default class ColumnComponent extends Vue {

    @Prop()
    column: Column;
    @Getter('getElementTypeById') getElementTypeById: any;
    @Getter('getLanguages') getLanguages: any;
    @Getter('getElementTypes') getElementTypes: any;

    component: string = '';
    columnSize: string = '';
    toolTipActive: boolean = false;


    beforeMount() {
    }

    mounted() {

        this.addElement();
        this.createColumnLayout();


    }

    addElement(id: number = this.column.element_type_id) {
        this.column.element_type_id = id;

        if (this.column.element_type_id !== 0) {
            let element = this.getElementTypeById(this.column.element_type_id);

            this.component = element.component;
            Vue.component(
                this.component,
                () => import('../../elements/' + this.component + '/' + this.component )
            );

            this.toolTipActive = false;
        }
    }

    updateElementTypeId(id: number) {
        this.column.element_type_id = id;
        this.addElement();
    }

    createColumnLayout() {
        let classes = pbConfig[pbConfig.framework.current];

        if (this.column.column_size) {
            forEach(classes, (c: any) => {
                this.column.column_size = this.column.column_size.replace(c.pb, c.fw);
            });
        } else {
            this.column.column_size = 'pb-large-12';
            this.createColumnLayout();
        }
    }

    @Emit('onImageUpload')
    onImageUpload() {
    }
};
