import Vue from 'vue';
import {Component} from "vue-property-decorator";

//@ts-ignore
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
//@ts-ignore
import DatePicker from 'vue-bootstrap-datetimepicker';
import {Getter} from "vuex-class";
import {Article} from "@/pagebuilder/models/Article";

@Component({
    components: {
        vueDropzone: vue2Dropzone,
        DatePicker,
    }
})
export default class SettingsView extends Vue {

    @Getter('getArticle') getArticle: Article;

    dropzoneOptions: object = {
        url: '/pagebuilder/upload-photo',
        thumbnailWidth: 150,
        maxFilesize: 3,
        maxFiles: 1,
        uploadMultiple: false,
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='glyphicon glyphicon-cloud-upload dropzone-icon'></i>",
        paramName: 'photo',
       /* headers: {
            //@ts-ignore
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }*/
    };

    config: object = {
        locale: 'de',
        format: 'YYYY-MM-DDTHH:mm:ss',
        sideBySide: false
    };

    get article(): Article {
        return this.getArticle;
    }

    mounted() {
        if (this.article && this.article.photo && this.article.photo.length !== 0) {
            let file = {size: 123, name: this.article.photo, type: '/image.*/'};
            let url = '/storage/images/' + file.name;
            //@ts-ignore
            this.$refs.singleDropzone.manuallyAddFile(file, url)
        }
    }


    onSuccess(file: any, response: any) {
        this.article.photo = response.filename;

    };

    onFileRemove(file: any, error: any, xhr: any) {
        this.article.photo = '';
    }
}