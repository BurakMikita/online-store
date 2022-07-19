import './Products.css';
import { ROOT_PRODUCTS } from '../../constants/root';
import localStorageUtil from '../../utils/localStorageUtil';
import Header from '../Header/Header';
const CATALOG = require('../../constants/catalog.json');
export interface Ielement {
    id: string;
    name: string;
    img: string;
    price: number;
    color: string;
    age: number;
    brand: string;
    amt: number;
    type: string;
    popular: string;
}

class Products {
    private products: localStorageUtil;
    private classNameActive: string;
    private labelAdd: string;
    private labelRemove: string;
    private Header: Header;
    private searchName: string;
    private dataAmt: (string | number)[];
    private old: (string | number)[];
    public brendValue: string[];
    public colorValue: string[];
    public typeValue: string[];
    public popularValue: string[];
    constructor() {
        this.popularValue = [];
        this.typeValue = [];
        this.colorValue = [];
        this.brendValue = [];
        this.searchName = '';
        this.dataAmt = [];
        this.old = [];
        this.Header = new Header();
        this.products = new localStorageUtil();
        this.classNameActive = 'btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    private handleSetLocationStorage(element: HTMLInputElement, id: string): void {
        const { pushProduct, products } = this.products.putProducts(id);
        this.Header.render(products.length);
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }

    private eventListener(): void {
        document.querySelectorAll('.products__btn').forEach((element) => {
            const uri = element.getAttribute('data-uri') as string;
            element.addEventListener('click', (event) => {
                this.handleSetLocationStorage(event.target as HTMLInputElement, uri);
                this.Header.eventListener();
            });
        });
    }
    public search(value: string): void {
        this.searchName = value;
    }
    public getAmt(value: (string | number)[]): void {
        if (value.length) {
            this.dataAmt = value;
        } else {
            this.dataAmt = [0, 22];
        }
    }
    public getOld(value: (string | number)[]): void {
        if (value.length) {
            this.old = value;
        } else {
            this.old = [1989, 2022];
        }
    }
    public render(): void {
        const firstAmt: number | string = this.dataAmt[0];
        const secondAmt: number | string = this.dataAmt[1];
        const firstOld: number | string = this.old[0];
        const secondOld: number | string = this.old[1];
        const productsStore = this.products.getProducts();
        let htmlCatalog = '';
        CATALOG.filter((el: Ielement) => (this.brendValue.length ? this.brendValue.includes(el.brand) : el))
            .filter((el: Ielement) => (this.colorValue.length ? this.colorValue.includes(el.color) : el))
            .filter((el: Ielement) => (this.typeValue.length ? this.typeValue.includes(el.type) : el))
            .filter((el: Ielement) => (this.popularValue.length ? this.popularValue.includes(el.popular) : el))
            .forEach(({ id, name, price, img, age, brand, color, amt, type }: Ielement) => {
                let activeClass = '';
                let activeText = '';
                const oneName = [];
                oneName.push(name);
                const filter = this.searchName;
                if (productsStore.indexOf(id) === -1) {
                    activeText = this.labelAdd;
                } else {
                    activeClass = ' ' + this.classNameActive;
                    activeText = this.labelRemove;
                }
                const arrCheck = oneName.filter((x) => x.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
                if (arrCheck.length) {
                    if (firstAmt <= amt && amt <= secondAmt && firstOld <= age && age <= secondOld) {
                        htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products__img" src="${img}" />
					<div class="products-element__div"><span>Количество на складе: </span>${amt} </div>
					<div class="products-element__div"><span>Цвет: </span>${color} </div>
					<div class="products-element__div"><span>Бренд: </span>${brand} </div>
					<div class="products-element__div"><span>Год выпуска: </span>${age} </div>
					<div class="products-element__div"><span>Тип: </span>${type} </div>
                    <span class="products-element__price">
                         ${price.toLocaleString()} USD
                    </span>
                    <button data-uri=${id} class="products__btn${activeClass}">
                        ${activeText}
                    </button>
                </li>
            `;
                    }
                }
            });

        const html = `
            <ul class="products-container">
                ${htmlCatalog ? htmlCatalog : `<span class='no_matches'> Извините, совпадений не обнаружено</span>`}
            </ul>
        `;

        (ROOT_PRODUCTS as HTMLElement).innerHTML = html;
        this.eventListener();
    }
}

export default Products;
