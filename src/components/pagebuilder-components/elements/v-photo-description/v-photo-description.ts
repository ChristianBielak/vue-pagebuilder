import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class VPhotoDescription extends Vue {
    @Prop()
    content: any;

    get photo(){
        return 'http://pagebuilder.ultrabold.de/storage/images/' + this.content.photo;
    }
}