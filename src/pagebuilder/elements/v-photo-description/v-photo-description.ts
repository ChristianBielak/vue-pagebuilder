import Vue from "vue";

//@ts-ignore

import {Component, Prop, Watch, Emit} from "vue-property-decorator";

//@ts-ignore
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import {Translation} from "../../models/Translation";
//@ts-ignore
import VueQuillEditor from 'vue-quill-editor';

Vue.use(VueQuillEditor);

@Component({
    components: {
        vueDropzone: vue2Dropzone
    }
})
export default class VPhotoDescription extends Vue {

    @Prop()
    oldTranslations: Array<Translation>;

    translations: Array<Translation> = [];
    dropzoneOptions: object = {
        url: '/pagebuilder/upload-photo',
        thumbnailWidth: null,
        thumbnailHeight: null,
        maxFilesize: 3,
        maxFiles: 1,
        uploadMultiple: false,
        addRemoveLinks: true,
        dictDefaultMessage: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="#495057"><path d="M18.42,8.22A7,7,0,0,0,5.06,10.11,4,4,0,0,0,6,18a1,1,0,0,0,0-2,2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,0,0,.5,1.94,5,5,0,0,0,.17-9.62Zm-5.71,2.07a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L11,13.41V19a1,1,0,0,0,2,0V13.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>`,
        paramName: 'photo',
        headers: {
            //@ts-ignore
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    };

    quillOptions: object = {
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

    mounted() {

        this.languages.forEach((l: any) => {
            //@ts-ignore
            if (this.translations[l.id] && this.translations[l.id].content.photo && this.translations[l.id].content.photo.length !== 0) {
                //@ts-ignore
                let file = {size: 123, name: this.translations[l.id].content.photo, type: '/image.*/'};
                let url = '/storage/images/' + file.name;
                //@ts-ignore
                this.$refs['photoDescription' + l.id][0].manuallyAddFile(file, url)
            }
        })
    }

    beforeMount() {
        this.translations = this.oldTranslations;
    }

    @Emit('onImageUpload')
    onSuccess(file: any, response: any) {
        //@ts-ignore
        this.translations[this.currentLang.id].content.photo = response.filename;
        this.$forceUpdate();

    };

    onFileRemove(file: any, error: any, xhr: any) {
        //@ts-ignore
        this.translations[this.currentLang.id].content.photo = '';
    }

    get languages() {
        return this.$store.getters.languages;
    }

    get currentLang() {
        return this.$store.getters.currentLang;
    }

    get route() {
        return this.$store.getters.route;
    }

};
