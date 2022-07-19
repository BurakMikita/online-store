import { ROOT_SHOPPING } from '../../constants/root';
import localStorageUtil from '../../utils/localStorageUtil';
import { Ielement } from '../Products/Products';
import './Shopping.css';
const CATALOG = require('../../constants/catalog.json');

class Shopping {
    private localStorage: localStorageUtil;

    constructor() {
        this.localStorage = new localStorageUtil();
    }
    private handleClear(): void {
        (ROOT_SHOPPING as HTMLElement).innerHTML = '';
    }
    private eventListener(): void {
        const element = document.getElementsByClassName('shopping__close');
        element[0].addEventListener('click', () => {
            this.handleClear();
        });
    }
    public render(): void {
        const productsStore = this.localStorage.getProducts();
        let htmlCatalog = '';
        let sumPrices = 0;

        CATALOG.forEach(({ id, name, price }: Ielement) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <div class="shopping__container">
                        <div class="shopping-element__name"> ${name}</div>
                        <div class="shopping-element__price">${price.toLocaleString()} USD</div>
                    </div>
                `;
                sumPrices += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close"></div>
                <div>
				<div class="shopping__container">
                        <div class="shopping-element__name"> Сумма:</div>
                        <div class="shopping-element__price">${sumPrices.toLocaleString()} USD</div>
                    </div>
                    ${htmlCatalog}
                    
                </div>
            </div>
        `;
        (ROOT_SHOPPING as HTMLElement).innerHTML = html;
        this.eventListener();
    }
}

export default Shopping;
