import Vue from "vue";

//@ts-ignore
import {Component, Prop, Watch} from "vue-property-decorator";

import {forEach} from 'lodash';

import {Getter, Mutation} from 'vuex-class';


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
    @Prop()
    storagePath: string;
    @Prop({default: 'dark-theme'})
    defaultTheme: string;

    @Mutation('setElementTypes') setElementTypes: any;
    @Mutation('setLanguages') setLanguages: any;
    @Mutation('setArticle') setArticle: any;
    @Mutation('setCurrentLang') setCurrentLang: any;

    @Getter('getLanguages') getLanguages: any;
    @Getter('getCurrentLang') getCurrentLanguage: any;
    @Getter('getArticle') getArticle: Article;

    article: Article = new Article();
    currentView: string = 'Content';
    theme: string = this.defaultTheme;

    elements: any = {
        body: document.querySelector('body'),
        contentWrapper: document.querySelector('.content-view'),
        columns: document.getElementsByClassName('pagebuilder-column')
    };

    mounted() {

        this.setTheme();
        this.setLanguages(this.languages);
        this.setCurrentLang(this.getLanguages[0]);
        this.setElementTypes(this.elementTypes);

        if (this.oldElement) {
            this.article = ArticleService.createFromExisting(this.oldElement);
            // @ts-ignore
            this.$store.commit('setArticle', this.article);
        } else {
            this.article = ArticleService.createNew();
        }

    }

    setTheme() {
        this.elements.body.classList.add(this.theme);
    }

    changeTheme() {
        if (this.theme === 'dark-theme') {
            this.elements.body.classList.remove('dark-theme');
            this.elements.body.classList.add('light-theme');
            this.theme = 'light-theme';
        } else {
            this.elements.body.classList.remove('light-theme');
            this.elements.body.classList.add('dark-theme');
            this.theme = 'dark-theme';
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

        forEach(this.elements.columns, (c: HTMLElement) => {

            forEach(c.classList, (size: string) => {
                if (size.includes('col-')) {
                    c.classList.remove(size);
                    c.classList.add('col-xs-12')
                }
            })
        })
    }

    get currentLanguage() {
        return this.getCurrentLanguage;
    }

    @Watch('article', {immediate: true, deep: true})
    onArticleChanged(val: Article, oldVal: Article) {
        this.setArticle(this.article);
    }
};
