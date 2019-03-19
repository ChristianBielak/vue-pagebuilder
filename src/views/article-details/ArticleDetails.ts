import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import RowComponent from "@/components/pagebuilder-components/row-component/RowComponent";
import ColumnComponent from "@/components/pagebuilder-components/column-component/ColumnComponent";

@Component({
    components: {
        RowComponent,
        ColumnComponent
    }
})
export default class ArticleDetails extends Vue {

    get article() {
        return this.$store.getters.article;
    }

    get rows() {
        return this.article.rows;
    }

    get articlePhoto() {
        return 'http://pagebuilder.ultrabold.de/storage/images/' + this.article.photo;
    }
}