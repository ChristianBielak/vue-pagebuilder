import Vue from 'vue';
import {Component, Emit} from "vue-property-decorator";
import RowComponent from "../../components/RowComponent/RowComponent";
import {Getter, Mutation} from "vuex-class";
import RowSpacerComponent from "../../components/RowSpacerComponent/RowSpacerComponent";

//@ts-ignore
import Draggable from 'vuedraggable';
import {indexOf} from 'lodash';
import {Article} from "@/pagebuilder/models/Article";

@Component({
    components:{
        RowComponent,
        RowSpacerComponent,
        Draggable
    }
})
export default class ContentView extends Vue{

    @Getter('getArticle') getArticle: Article;
    @Mutation('setArticle') setArticle: any;

    get article(): Article{
        return this.getArticle;
    }

    @Emit('onImageUpload')
    onImageUpload(){
        this.setArticle(this.article);
    }
}