import { ERROR } from '../../constants/root';
import './Error.css';

class Errors {
    private handleClear(): void {
        (ERROR as HTMLElement).innerHTML = '';
    }
    private eventListener(): void {
        const element = document.getElementsByClassName('modal__close-button');
        element[0].addEventListener('click', () => {
            this.handleClear();
        });
    }
    public render(value: string): void {
        const html = `
		
	  <div class="modal">
	  <div class="modal__content">
		<div class="modal__close-button"></div>
		${value}
	
	  </div>
	</div>
	  
        `;
        (ERROR as HTMLElement).innerHTML = html;
        this.eventListener();
    }
}

export default Errors;
