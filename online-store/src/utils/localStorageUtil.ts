import Errors from '../components/Error/Errors';
interface IputProducts {
    pushProduct: boolean;
    products: string;
}
class LocalStorageUtil {
    private keyName: string;
    private keySuerch: string;
    private error: Errors;
    private sort: string;
    private amt: string;
    private old: string;
    private brendValue: string;
    private colorValue: string;
    private typeValue: string;
    private popularValue: string;
    constructor() {
        this.keyName = 'products';
        this.keySuerch = 'suerch';
        this.error = new Errors();
        this.sort = 'sort';
        this.amt = 'amt';
        this.old = 'old';
        this.brendValue = 'brendValue';
        this.colorValue = 'colorValue';
        this.typeValue = 'typeValue';
        this.popularValue = 'popularValue';
    }
    public getpopularValue(): Array<string> {
        const popularLocalStore = localStorage.getItem(this.popularValue);
        if (popularLocalStore !== null) {
            return JSON.parse(popularLocalStore);
        }
        return [];
    }
    public putpopularValue(arr: Array<string>): void {
        localStorage.setItem("popularValue", JSON.stringify(arr));
    }
    public gettypeValue(): Array<string> {
        const typeLocalStore = localStorage.getItem(this.typeValue);
        if (typeLocalStore !== null) {
            return JSON.parse(typeLocalStore);
        }
        return [];
    }
    public puttypeValue(arr: Array<string>): void {
        localStorage.setItem("typeValue", JSON.stringify(arr));
    }
    public getcolorValue(): Array<string> {
        const colorLocalStore = localStorage.getItem(this.colorValue);
        if (colorLocalStore !== null) {
            return JSON.parse(colorLocalStore);
        }
        return [];
    }
    public putcolorValue(arr: Array<string>): void {
        localStorage.setItem("colorValue", JSON.stringify(arr));
    }
    public getBrendValue(): Array<string> {
        const brendLocalStore = localStorage.getItem(this.brendValue);
        if (brendLocalStore !== null) {
            return JSON.parse(brendLocalStore);
        }
        return [];
    }
    public putBrendValue(arr: Array<string>): void {
        localStorage.setItem('brendValue', JSON.stringify(arr));
    }
    public getOld(): (string | number)[] {
        const oldLocalStore = localStorage.getItem(this.old);
        if (oldLocalStore !== null) {
            return JSON.parse(oldLocalStore);
        }
        return [];
    }
    public putOld(arr: (string | number)[]): void {
        localStorage.setItem(this.old, JSON.stringify(arr));
    }

    public getAmt(): (string | number)[] {
        const amtLocalStore = localStorage.getItem(this.amt);
        if (amtLocalStore !== null) {
            return JSON.parse(amtLocalStore);
        }
        return [];
    }
    public putAmt(arr: (string | number)[]): void {
        localStorage.setItem(this.amt, JSON.stringify(arr));
    }
    public getSort(): string {
        const str = localStorage.getItem(this.sort);
        if (str !== null) {
            return str;
        }
        return '';
    }
    public putSort(value: string): void {
        localStorage.setItem(this.sort, value);
    }
    public getSuerch() {
        const str = localStorage.getItem(this.keySuerch);
        if (str !== null) {
            return str;
        }
        return '';
    }
    public putSuerch(value: string): void {
        localStorage.setItem(this.keySuerch, value);
    }
    public getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    public putProducts(id: string): IputProducts {
        const products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            if (products.length > 19) {
                this.error.render('Извините, все слоты заполнены');
            } else {
                products.push(id);
                pushProduct = true;
            }
        } else {
            products.splice(index, 1);
            pushProduct = false;
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products };
    }
}

export default LocalStorageUtil;
