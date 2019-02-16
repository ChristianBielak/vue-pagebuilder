import Vue from "vue";

//@ts-ignore

import {Component, Prop, Watch} from "vue-property-decorator";
import {Getter, Mutation} from "vuex-class";
import {Translation} from "../../models/Translation";
//@ts-ignore
import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueQuillEditor);

@Component
export default class VHeadlineText extends Vue {

    @Prop()
    oldTranslations: Array<Translation>;

    @Getter('getLanguages') getLanguages:any;

    translations: Array<Translation> = [];
    options: object = {
        theme: 'bubble',
        placeholder: 'Text (' + this.$store.getters.getCurrentLang.locale + ')',
        modules: {
            toolbar: [
                ["bold", "italic", "underline"],
                [{list: "ordered"}, {list: "bullet"}],
                ["link", "clean"]
            ]
        }
    };

    beforeMount(){
        this.translations = this.oldTranslations;
    }

};
