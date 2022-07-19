import Header from './components/Header/Header';
import Products from './components/Products/Products';
import SearchName from './components/SearchName/SearchName';
import Slider from './components/Slider/Slider';
import SortItems from './components/Sort-items/Sort-items';
import FilterByValue from './components/FilterByValue/FilterByValue';
import './global.css';
import localStorageUtil from './utils/localStorageUtil';
import Rest from './components/Rest/Rest';

export const productsPage = new Products();
const headerPage = new Header();
const products = new localStorageUtil();
const search = new SearchName();
const sortItems = new SortItems();
const slider = new Slider();
const filerByValue = new FilterByValue();
const rest = new Rest();
sortItems.sort = products.getSort();
productsPage.brendValue = products.getBrendValue();
productsPage.colorValue = products.getcolorValue();
productsPage.typeValue = products.gettypeValue();
productsPage.popularValue = products.getpopularValue();

sortItems.render();
filerByValue.eventListener();
slider.render();
rest.eventListener();
slider.eventListener();
slider.eventListenerOld();

export function renderMenu() {
    slider.dataAmt = products.getAmt();
    slider.dataOLd = products.getOld();
    search.data = products.getSuerch();
    filerByValue.colorValue = products.getcolorValue();
    filerByValue.popularValue = products.getpopularValue();
    filerByValue.typeValue = products.gettypeValue();
    filerByValue.brendValue = products.getBrendValue();
    search.render();
}
renderMenu();
export function render() {
    sortItems.handlerOpenShoppingPage();
    productsPage.colorValue = products.getcolorValue();
    productsPage.brendValue = products.getBrendValue();
    productsPage.typeValue = products.gettypeValue();
    productsPage.popularValue = products.getpopularValue();
    productsPage.search(search.data);
    productsPage.getAmt(slider.dataAmt);
    productsPage.getOld(slider.dataOLd);
    productsPage.render();
    headerPage.render(products.getProducts().length);
}

render();
