
import {Component, Prop, Provide, Vue} from 'vue-property-decorator'
@Component
export default class ImageUploadPreview extends Vue {

    @Prop()
    name: string = '';
    @Prop()
    title: string = '';
    @Prop()
    existing: object = {};
    @Prop()
    deletable: boolean = false;

    photo: object = {
                path: '',
                filename: ''
            };
            file = null;
            removeFile = false;


    mounted() {
        if (this.existing) {
            this.photo = this.existing;
        }
    }

    generateImagePreview(event: Event) {
        this.removeFile = false;
        var inputFile = event.target as HTMLInputElement;
        var reader = new FileReader();

        var files = inputFile.files as any;

        reader.onload = (e: any) => {
            //@ts-ignore
            this.photo.path = e.target.result;
            //@ts-ignore
            this.photo.filename = files[0].name;
        };

        if (inputFile.files != null) {
            reader.readAsDataURL(inputFile.files[0]);
        }

    };

    deleteFile() {
        this.removeFile = true;
        this.photo = {
            path: String,
            filename: String
        }
    };

    get uniqid() {
        return (new Date().getTime()).toString(3);
    };
};
