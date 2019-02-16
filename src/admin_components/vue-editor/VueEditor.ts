import Vue from "vue";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//@ts-ignore
import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueQuillEditor);

import {Component, Prop} from "vue-property-decorator";


@Component
export default class VueEditor extends Vue {

    @Prop()
    content:string;

    @Prop()
    name: string;

    text: any = this.content;

    options: object = {
        modules: {
            toolbar: [
                ["bold", "italic", "underline"],
                [{list: "ordered"}, {list: "bullet"}],
                ["link", "clean"]
            ]
        }
    };

    //@ts-ignore
    onEditorChange({quill, html, text}) {
        this.text = html
    }
};
