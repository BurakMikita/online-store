import { render } from '../..';
import { SEARCH_NAME } from '../../constants/root';
import localStorageUtil from '../../utils/localStorageUtil';
import './SearchName.css';
class SearchName {
    public data: string;
    private localStorage: localStorageUtil;

    constructor() {
        this.data = '';
        this.localStorage = new localStorageUtil();
    }

    private eventListener(): void {
        const elememt: HTMLElement | null = document.getElementById('search-name');
        (elememt as HTMLElement).addEventListener('input', () => {
            this.data = (elememt as HTMLInputElement).value;
            this.localStorage.putSuerch(this.data);
            render();
        });
    }
    public render(): void {
        const html = `
           <div class="search-container">
              <input id='search-name' autofocus="" onfocus="this.setSelectionRange(this.value.length,this.value.length);" type="search" value="${this.data}" placeholder='Поиск по имени'   class="search-value">   
                </inout>
           </div>
        `;

        (SEARCH_NAME as HTMLElement).innerHTML = html;
        this.eventListener();
    }
}

export default SearchName;
