import Vue from "vue";

//@ts-ignore

import {Component, Prop, Watch} from "vue-property-decorator";

//@ts-ignore
import VueQuillEditor from 'vue-quill-editor';
import {Translation} from "../../models/Translation";

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme

Vue.use(VueQuillEditor);


@Component
export default class VText extends Vue {

    @Prop()
    oldTranslations: Array<Translation>;

    translations: Array<Translation> = [];
    options: object = {
        theme: 'bubble',
        placeholder: 'Text (' + this.currentLang.locale + ')',
        modules: {
            toolbar: [
                ["bold", "italic", "underline"],
                [{list: "ordered"}, {list: "bullet"}],
                ["link", "clean"]
            ]
        }
    };

    beforeMount() {
        this.translations = this.oldTranslations;
    };

    get languages(){
        return this.$store.getters.languages;
    }

    get currentLang(){
        return this.$store.getters.currentLang;
    }


};
