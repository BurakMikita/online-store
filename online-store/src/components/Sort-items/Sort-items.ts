import { render } from '../..';
import { SORT__ITEM } from '../../constants/root';
import localStorageUtil from '../../utils/localStorageUtil';
import { Ielement } from '../Products/Products';
import './Sort-items.css';
const CATALOG = require('../../constants/catalog.json');

class SortItems {
    public sort: string;
    private localStorage: localStorageUtil;
    constructor() {
        this.localStorage = new localStorageUtil();
        this.sort = '';
    }
    public handlerOpenShoppingPage(): void {
        if (this.sort === 'ageDown') {
            CATALOG.sort(function (obj1: Ielement, obj2: Ielement) {
                // Ascending: first age less than the previous
                return obj2.age - obj1.age;
            });
        } else if (this.sort === 'ageUp') {
            CATALOG.sort(function (obj1: Ielement, obj2: Ielement) {
                // Ascending: first age less than the previous
                return obj1.age - obj2.age;
            });
        } else if (this.sort === 'az') {
            CATALOG.sort(SortArray);
            function SortArray(x: Ielement, y: Ielement) {
                if (x.name < y.name) {
                    return -1;
                }
                if (x.name > y.name) {
                    return 1;
                }
                return 0;
            }
        } else if (this.sort === 'za') {
            CATALOG.sort(SortArray);
            function SortArray(x: Ielement, y: Ielement) {
                if (x.name < y.name) {
                    return 1;
                }
                if (x.name > y.name) {
                    return -1;
                }
                return 0;
            }
        }
    }
    private addSelected(): void {
        const element = <HTMLElement>document.getElementById(`${this.sort}`);
        element.setAttribute('selected', 'true');
    }

    private eventListener(): void {
        const element = document.getElementsByClassName('source__item');
        element[0].addEventListener('change', (e) => {
            this.localStorage.putSort((e.target as HTMLInputElement).value);
            this.sort = (e.target as HTMLInputElement).value;
            render();
        });
    }
    public render(): void {
        const html = `
		<select id="sort__item" class="source__item">
		<option  selected disabled hidden>Выбрать сортировку</option>
		<option value="ageUp" id="ageUp">По году,по возрастания</option>
		<option value="ageDown" id="ageDown" >По году,по убывнию</option>
		<option value="az" id="az">По названию от А до Z</option>
		<option value="za" id="za">По названию от Z до А</option>
		</select>
        `;

        (SORT__ITEM as HTMLElement).innerHTML = html;
        this.eventListener();
        this.sort ? this.addSelected() : (this.sort = 'ageUp');
    }
}

export default SortItems;
