import Vue from "vue";


import {Component, Prop} from "vue-property-decorator";

import 'bootstrap/dist/css/bootstrap.css';
//@ts-ignore
import datePicker from 'vue-bootstrap-datetimepicker';

@Component({
    components:{
        datePicker
    }
})
export default class VueDatePicker extends Vue {

    @Prop()
    oldDate: string;

    @Prop()
    name: string;


    date: Date = new Date();
    config: object = {
        locale: 'de',
        format: 'YYYY-MM-DD HH:mm:ss',
        sideBySide: true
    };

    mounted() {
        if (this.oldDate) {
            this.date = new Date(this.oldDate);
        } else {
            this.date = new Date();
        }
    }

};
