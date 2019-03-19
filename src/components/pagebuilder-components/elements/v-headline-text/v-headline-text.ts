import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class VHeadlineText extends Vue {
    @Prop()
    content: any;
}