import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class ArticleCardComponent extends Vue {

    @Prop()
    article: any;

    mounted(){
        this.$emit('articleLoaded');
    }

    get photo(){
        return 'https://pagebuilder.ultrabold.de/storage/images/' + this.article.photo;
    }
}