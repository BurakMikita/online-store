import { FilterByValues } from '../../utils/functions';
import localStorageUtil from '../../utils/localStorageUtil';
import './FilterByValue.css';

class FilterByValue {
    public brendValue: string[];
    private localStorageUtil: localStorageUtil;
    public colorValue: string[];
    public typeValue: string[];
    public popularValue: string[];
	localStorageUtilPut: (arr: string[]) => void;
    constructor() {
        this.localStorageUtil = new localStorageUtil();
        this.brendValue = this.localStorageUtil.getBrendValue();
        this.colorValue = this.localStorageUtil.getcolorValue();
        this.typeValue = this.localStorageUtil.gettypeValue();
        this.popularValue = this.localStorageUtil.getpopularValue();
		this.localStorageUtilPut = this.localStorageUtil.putBrendValue
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
		FilterByValues(this.brendValue, this.localStorageUtil.putBrendValue, '.brand-element__btn')
		FilterByValues(this.colorValue, this.localStorageUtil.putcolorValue, '.color-element__btn')
		FilterByValues(this.typeValue, this.localStorageUtil.puttypeValue, '.type-element__btn')
		FilterByValues(this.popularValue, this.localStorageUtil.putpopularValue, '.popular-element__btn')

      
    }
}

export default FilterByValue;
