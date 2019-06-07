import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {

    switchLang(locale: string) {
        this.$i18n.locale = locale;
        this.$route.params.lang = locale;
        this.$router.push({
            name: this.$route.name,
            params: {
                lang: locale
            }
        });
    }
}