import Vue from "vue";

import {Component, Prop} from "vue-property-decorator";

@Component
export default class VueRepeatable extends Vue {

    @Prop()
    value: Array<any>;

    repeaterFields: Array<any> = this.value || [];

    open: boolean = true;

    addField(field: object = {}) {
        this.repeaterFields.push(field);
        this.$emit("added", field);
        this.$emit('input', this.repeaterFields);
    }

    removeField(field: object, i: number) {
        this.$delete(this.repeaterFields, i);
        this.$emit("removed", field);
        this.$emit('input', this.repeaterFields);

/*        if(!this.repeaterFields.length) {
            this.$emit('empty');
        }*/
    }

};
