import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class ChooseElementComponent extends Vue {
    @Prop()
    column: any;
    @Prop()
    initialValues: any;

    angleOffset: number = -90;
    chartData: any = [];
    colors: any = ["#6495ED", "goldenrod", "#cd5c5c", "thistle", "lightgray"];
    cx: number = 150;
    cy: number = 150;
    radius: number = 100;
    sortedValues: any = [];
    strokeWidth: number = 75;

    mounted() {
        this.sortInitialValues();
        this.calculateChartData();
    }

    // adjust the circumference to add small white gaps
    get adjustedCircumference() {
        return this.circumference - 2
    };

    get circumference() {
        return 2 * Math.PI * this.radius
    };

    get dataTotal() {
        return this.elementsCount;
    };

    get elements() {
        return this.$store.getters.elementTypes;
    }

    get elementsCount() {
        return this.elements.length;
    }

    get elementValue() {
        return this.elementsCount / this.elementsCount;
    }

    calculateChartData() {
        this.elements.forEach((element: any, index: any) => {
            const {x, y} = this.calculateTextCoords(this.elementValue, this.angleOffset);
            // start at -90deg so that the largest segment is perpendicular to top
            const data = {
                degrees: this.angleOffset,
                textX: x,
                textY: y
            };
            this.chartData.push(data);
            this.angleOffset = this.dataPercentage(this.elementValue) * 360 + this.angleOffset
        })
    };

    sortInitialValues() {
        return this.sortedValues = this.elements;
    };

    calculateStrokeDashOffset(dataVal: any, circumference: any) {
        const strokeDiff = this.dataPercentage(dataVal) * circumference;
        return circumference - strokeDiff
    }


    calculateTextCoords(dataVal: any, angleOffset: any) {
        // t must be radians
        // x(t) = r cos(t) + j
        // y(t) = r sin(t) + j

        const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset;
        const radians = this.degreesToRadians(angle);

        const textCoords = {
            x: this.radius * Math.cos(radians) + this.cx,
            y: this.radius * Math.sin(radians) + this.cy
        };
        return textCoords
    };

    degreesToRadians(angle: any) {
        return angle * (Math.PI / 180)
    };

    dataPercentage(dataVal: any) {
        return dataVal / this.dataTotal
    };

    percentageString(dataVal: any) {
        return `${Math.round(this.dataPercentage(dataVal) * 100)}%`
    };

    returnCircleTransformValue(index: any) {
        if (this.chartData[index]) return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`
    };

    segmentBigEnough(dataVal: any) {
        return Math.round(this.dataPercentage(dataVal) * 100) > 5;
    };

    addElement(id: number) {
        this.$emit('addElement', id);
    }
}