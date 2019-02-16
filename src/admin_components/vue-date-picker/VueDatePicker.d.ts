import Vue from "vue";
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
export default class VueDatePicker extends Vue {
    oldDate: string;
    name: string;
    date: Date;
    config: object;
    mounted(): void;
}
