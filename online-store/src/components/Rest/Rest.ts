import { render, renderMenu } from '../..';
import localStorageUtil from '../../utils/localStorageUtil';
import './Rest.css';
import Slider from '../Slider/Slider';

class Rest {
    private localStorageUtil: localStorageUtil;
    private Slider: Slider;
    constructor() {
        this.Slider = new Slider();
        this.localStorageUtil = new localStorageUtil();
    }

    public eventListener(): void {
        const rest = document.querySelectorAll('.rest-element__btn');
        const rest__sting = document.querySelectorAll('.rest-stting-element__btn');

        rest[0].addEventListener('click', () => {
            const buttons = document.querySelectorAll('.button');
            buttons.forEach((e) => e.classList.remove('active'));
            this.localStorageUtil.putSuerch('');
            this.localStorageUtil.putcolorValue([]);
            this.localStorageUtil.putpopularValue([]);
            this.localStorageUtil.puttypeValue([]);
            this.localStorageUtil.putBrendValue([]);
            this.localStorageUtil.putAmt([]);
            this.localStorageUtil.putOld([]);
            this.Slider.eventRest();
            renderMenu();
            render();
        });

        rest__sting[0].addEventListener('click', () => {
            localStorage.clear();
            window.location.reload();
        });
    }
}

export default Rest;
