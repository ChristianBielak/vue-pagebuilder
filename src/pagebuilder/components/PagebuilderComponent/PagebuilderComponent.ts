import Vue from "vue";

//@ts-ignore
import {Component, Prop, Watch} from "vue-property-decorator";

import {forEach} from 'lodash';

//@ts-ignore
import Sticky from 'vue-sticky-directive';
//@ts-ignore
import TextElementIcon from "@/pagebuilder/svgs/ElementIcons/TextElementIcon.vue";
//@ts-ignore
import ImageElementIcon from "@/pagebuilder/svgs/ElementIcons/ImageElementIcon.vue";
//@ts-ignore
import HeadlineTextElementIcon from "@/pagebuilder/svgs/ElementIcons/HeadlineTextElementIcon.vue";
//@ts-ignore
import Arrow from "@/pagebuilder/svgs/ArrowIcon.vue";
import {ArticleService} from "@/pagebuilder/services/ArticleService";
import ContentView from "@/pagebuilder/views/ContentView/ContentView";
import {Article} from "@/pagebuilder/models/Article";
import SettingsView from "@/pagebuilder/views/SettingsView/SettingsView";
import VueDatePicker from "@/pagebuilder/components/VueDatePicker/VueDatePicker";
import VueEditor from "@/pagebuilder/components/VueEditor/VueEditor";
//@ts-ignore
import Unicon from 'vue-unicons'
//@ts-ignore
import { uniTrash, uniCloudUpload } from 'vue-unicons/src/icons'

Unicon.add([uniTrash, uniCloudUpload]);
Vue.use(Unicon);


Vue.use(Sticky);

// Import date picker css


@Component({
    components: {
        ContentView,
        SettingsView,
        Arrow,
        ImageElementIcon,
        TextElementIcon,
        HeadlineTextElementIcon,
        VueEditor,
        VueDatePicker

    },
})
export default class PagebuilderComponent extends Vue {

    @Prop()
    oldElement: any;
    @Prop({
            default: function () {
                return [
                    {
                        id: 1,
                        name: "Headline + Text",
                        component: "v-headline-text",
                        icon: "headline-text-element-icon",
                        sorting: 1,
                    },
                    {
                        id: 2,
                        name: "Text",
                        component: "v-text",
                        icon: "text-element-icon",
                        sorting: 2,
                    },
                    {
                        id: 3,
                        name: "Photo + Description",
                        component: "v-photo-description",
                        icon: "image-element-icon",
                        sorting: 3,
                    }
                ]
            }
        }
    )
    elementTypes: Array<any>;
    @Prop({
            default: function () {
                return [
                    {
                        id: 1, name: 'english', locale: 'en'
                    },
                    {
                        id: 2, name: 'german', locale: 'de'
                    }
                ]
            }
        }
    )
    languages: Array<any>;

    @Prop({
        default: function () {
            return '/admin/pagebuilder/articles'
        }
    })
    route: string;
    @Prop()
    storagePath: string;
    @Prop({default: 'dark-theme'})
    defaultTheme: string;

    article: Article = new Article();
    currentView: string = 'Content';
    theme: string = this.defaultTheme;

    elements: any = {
        body: document.querySelector('body'),
        contentWrapper: document.querySelector('.content-view'),
        columns: document.getElementsByClassName('pagebuilder-column')
    };

    beforeMount() {
        this.$store.commit('setRoute', this.route);
        if (localStorage.pagebuilderTheme) {
            this.theme = localStorage.pagebuilderTheme;
        }

        this.setTheme();

        this.$store.commit('setLanguages', this.languages);
        this.$store.commit('setCurrentLang', this.languages[0]);
        this.$store.commit('setElementTypes', this.elementTypes);

        if (this.oldElement) {
            this.article = ArticleService.createFromExisting(this.oldElement);
            // @ts-ignore
            this.$store.commit('setArticle', this.article);

            return this.$store.getters.article;
        } else {
            return this.article = ArticleService.createNew();
        }
    }

    setTheme() {
        this.elements.body.classList.add(this.theme);
    }

    setCurrentLang(lang:any){
        this.$store.commit('setCurrentLang', lang);
    }

    changeTheme() {
        if (this.theme === 'dark-theme') {
            this.elements.body.classList.remove('dark-theme');
            this.elements.body.classList.add('light-theme');
            this.theme = 'light-theme';
            localStorage.pagebuilderTheme = 'light-theme';
        } else {
            this.elements.body.classList.remove('light-theme');
            this.elements.body.classList.add('dark-theme');
            this.theme = 'dark-theme';
            localStorage.pagebuilderTheme = 'dark-theme';
        }
    }

    //@Todo: Rest column size for desktop and tablet

    setDesktop() {
        this.elements.contentWrapper.style.maxWidth = '1200px';
    }

    setTablet() {
        this.elements.contentWrapper.style.maxWidth = '768px';
    }

    setMobile() {
        this.elements.contentWrapper.style.maxWidth = '375px';

       /* forEach(this.elements.columns, (c: HTMLElement) => {

            forEach(c.classList, (size: string) => {
                if (size.includes('col-')) {
                    c.classList.remove(size);
                    c.classList.add('col-xs-12')
                }
            })
        })*/
    }

    get currentLanguage() {
        return this.$store.getters.currentLang;
    }


    @Watch('article', {immediate: true, deep: true})
    onArticleChanged(val: Article, oldVal: Article) {
        this.$store.commit('setArticle', this.article);
    }
};
