import Vue from "vue";

//@ts-ignore

import {Component, Prop, Watch, Emit} from "vue-property-decorator";
import {Getter, Mutation} from "vuex-class";

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

    @Getter('getLanguages') getLanguages: any;
    @Getter('getCurrentLang') getCurrentLang: any;

    translations: Array<Translation> = [];
    dropzoneOptions: object = {
        url: '/pagebuilder/upload-photo',
        thumbnailWidth: null,
        thumbnailHeight: null,
        maxFilesize: 3,
        maxFiles: 1,
        uploadMultiple: false,
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='glyphicon glyphicon-cloud-upload dropzone-icon'></i>",
        paramName: 'photo',
        /*headers: {
            //@ts-ignore
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }*/
    };

    quillOptions: object = {
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
        return this.getLanguages;
    }

    get currentLang() {
        return this.getCurrentLang;
    }

};
