import { render } from '../..';
import localStorageUtil from '../../utils/localStorageUtil';
import './FilterByValue.css';

class FilterByValue {
    public brendValue: string[];
    private localStorageUtil: localStorageUtil;
    public colorValue: string[];
    public typeValue: string[];
    public popularValue: string[];
    constructor() {
        this.localStorageUtil = new localStorageUtil();
        this.brendValue = this.localStorageUtil.getBrendValue();
        this.colorValue = this.localStorageUtil.getcolorValue();
        this.typeValue = this.localStorageUtil.gettypeValue();
        this.popularValue = this.localStorageUtil.getpopularValue();
    }
    public eventListener(): void {
        const buttons = (document.querySelectorAll('.button') as unknown) as HTMLInputElement[];
        buttons.forEach((element) => {
            if (
                this.brendValue.includes(element.value) ||
                this.typeValue.includes(element.value) ||
                this.typeValue.includes(element.value) ||
                this.popularValue.includes(element.value)
            ) {
                element.classList.add('active');
            }
        });
        document.querySelectorAll('.brand-element__btn').forEach((element) => {
            if (this.brendValue.includes((element as HTMLInputElement).value)) {
                element.classList.add('active');
            }
            element.addEventListener('click', (event) => {
                const index = this.brendValue.indexOf((event.target as HTMLInputElement).value);
                console.log(index);
                if (index === -1) {
                    this.brendValue.push((event.target as HTMLInputElement).value);
                    (event.target as HTMLInputElement).classList.add('active');
                    this.localStorageUtil.putBrendValue(this.brendValue);
                    render();
                } else {
                    (event.target as HTMLInputElement).classList.remove('active');
                    this.brendValue.splice(index, 1);
                    this.localStorageUtil.putBrendValue(this.brendValue);
                    render();
                }
            });
        });

        document.querySelectorAll('.color-element__btn').forEach((element) => {
            if (this.colorValue.includes((element as HTMLInputElement).value)) {
                element.classList.add('active');
            }
            element.addEventListener('click', (event) => {
                const index = this.colorValue.indexOf((event.target as HTMLInputElement).value);
                console.log(index);
                if (index === -1) {
                    this.colorValue.push((event.target as HTMLInputElement).value);
                    (event.target as HTMLInputElement).classList.add('active');
                    this.localStorageUtil.putcolorValue(this.colorValue);
                    render();
                } else {
                    (event.target as HTMLInputElement).classList.remove('active');
                    this.colorValue.splice(index, 1);
                    this.localStorageUtil.putcolorValue(this.colorValue);
                    render();
                }
            });
        });
        document.querySelectorAll('.type-element__btn').forEach((element) => {
            if (this.typeValue.includes((element as HTMLInputElement).value)) {
                element.classList.add('active');
            }
            element.addEventListener('click', (event) => {
                const index = this.typeValue.indexOf((event.target as HTMLInputElement).value);
                console.log(index);
                if (index === -1) {
                    this.typeValue.push((event.target as HTMLInputElement).value);
                    (event.target as HTMLInputElement).classList.add('active');
                    this.localStorageUtil.puttypeValue(this.typeValue);
                    render();
                } else {
                    (event.target as HTMLInputElement).classList.remove('active');
                    this.typeValue.splice(index, 1);
                    this.localStorageUtil.puttypeValue(this.typeValue);
                    render();
                }
            });
        });
        document.querySelectorAll('.popular-element__btn').forEach((element) => {
            if (this.popularValue.includes((element as HTMLInputElement).value)) {
                element.classList.add('active');
            }
            element.addEventListener('click', (event) => {
                const index = this.popularValue.indexOf((event.target as HTMLInputElement).value);
                console.log(index);
                if (index === -1) {
                    this.popularValue.push((event.target as HTMLInputElement).value);
                    (event.target as HTMLInputElement).classList.add('active');
                    this.localStorageUtil.putpopularValue(this.popularValue);
                    render();
                } else {
                    (event.target as HTMLInputElement).classList.remove('active');
                    this.popularValue.splice(index, 1);
                    this.localStorageUtil.putpopularValue(this.popularValue);
                    render();
                }
            });
        });
    }
}

export default FilterByValue;
