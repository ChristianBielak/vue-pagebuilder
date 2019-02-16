import Vue from "vue";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default class VueEditor extends Vue {
    content: string;
    name: string;
    text: any;
    options: object;
    onEditorChange({ quill, html, text }: {
        quill: any;
        html: any;
        text: any;
    }): void;
}
