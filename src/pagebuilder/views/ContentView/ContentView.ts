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
    components: {
        RowComponent,
        RowSpacerComponent,
        Draggable
    }
})
export default class ContentView extends Vue {

    get article(): Article {
        return this.$store.getters.article;
    }

    @Emit('onImageUpload')
    onImageUpload() {
        this.$store.commit('setArticle', this.article);
    }
}