import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
//@ts-ignore
const Raphael = require('raphael/raphael');
//@ts-ignore
window.Raphael = Raphael;

//@ts-ignore
require('wheelnav');

@Component
export default class ChooseElementComponent extends Vue {
    @Prop()
    elements: Array<any>;
    @Prop()
    id: string;

    beforeMount() {
    }

    mounted() {
        //@ts-ignore
        let wheel = new wheelnav("divWheel");

        let clickElement: any = document.querySelector('.hiho');

        if (clickElement) {
            clickElement.addEventListener('click', (e: any) => {
                console.log('dfdf')
            })
        }

    }

    get elementTypes() {
        return this.$store.getters.getElementTypes;
    }

}