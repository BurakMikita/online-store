import { ROOT_HEADER } from '../../constants/root';
import Shopping from '../Shopping/Shopping';
import './header.css';

class Header {
    shop: Shopping;

    constructor() {
        this.shop = new Shopping();
    }
    private handlerOpenShoppingPage() {
        this.shop.render();
    }

    public eventListener(): void {
        const element = document.getElementsByClassName('header-counter');
        element[0].addEventListener('click', () => {
            this.handlerOpenShoppingPage();
        });
    }
    public render(count: number): void {
        const html = `
           <div class="header-container">
                <div class="header-counter" id='asd'>
				🛒 ${count ? count : 0}
                </div>
           </div>
        `;

        (ROOT_HEADER as HTMLElement).innerHTML = html;
        this.eventListener();
    }
}

export default Header;
