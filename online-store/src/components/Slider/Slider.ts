import localStorageUtil from '../../utils/localStorageUtil';
import * as noUiSlider from 'nouislider';
import './Slider.css';
import { render } from '../..';
import { API } from 'nouislider';
import { SLIDER, SLIDER__OLD } from '../../constants/root';

class Slider {
    private localStorage: localStorageUtil;
    public dataAmt: (string | number)[];
    public dataOLd: (string | number)[];

    constructor() {
        this.localStorage = new localStorageUtil();
        this.dataAmt = this.localStorage.getAmt();
        this.dataOLd = this.localStorage.getOld();
    }

    public eventListener(): void {
        (<API>SLIDER.noUiSlider).on('change', (values: (string | number)[]) => {
            this.dataAmt = values;
            this.localStorage.putAmt(values);
            render();
        });
    }
    public eventListenerOld(): void {
        (<API>SLIDER__OLD.noUiSlider).on('change', (values: (string | number)[]) => {
            this.dataOLd = values;
            this.localStorage.putOld(values);
            render();
        });
    }
    public eventRest(): void {
        (<API>SLIDER.noUiSlider).set([0, 22]);
        (<API>SLIDER__OLD.noUiSlider).set([1989, 2022]);
    }

    public render(): void {
        noUiSlider.create(SLIDER as HTMLElement, {
            start: this.dataAmt.length ? this.dataAmt : [0, 22],
            tooltips: true,
            connect: true,
            step: 1,
            range: {
                min: 0,
                max: 22,
            },
            format: {
                to: function (value) {
                    return Math.floor(value);
                },

                from: function (value) {
                    return Number(value.replace(',-', ''));
                },
            },
        });
        noUiSlider.create(SLIDER__OLD as HTMLElement, {
            start: this.dataOLd.length ? this.dataOLd : [1989, 2022],
            tooltips: true,
            connect: true,
            step: 1,
            range: {
                min: 1989,
                max: 2022,
            },
            format: {
                to: function (value) {
                    return Math.floor(value);
                },

                from: function (value) {
                    return Number(value.replace(',-', ''));
                },
            },
        });
    }
}

export default Slider;
