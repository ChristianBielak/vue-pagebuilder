import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
//@ts-ignore
import ScrollMagic from 'ScrollMagic';

require('TweenMax');
//@ts-ignore
import TimelineMax from 'TimelineMax';

import 'debug.addIndicators';
import 'animation.gsap';
import TweenMax = gsap.TweenMax;
import ArticleCardComponent from "@/components/article-card-component/ArticleCardComponent";
@Component({
    components:{
        ArticleCardComponent
    }
})
export default class Articles extends Vue {

    articleFadeInAnimation(){

        let tl = new TimelineMax();

        tl.staggerFromTo('.article-card-component', 0.5,{
            opacity: 0,
            y: 20
        },{
            opacity: 1,
            y: 1
        }, 0.2)
    }

    get articles(){
        return this.$store.getters.articles;
    }
}