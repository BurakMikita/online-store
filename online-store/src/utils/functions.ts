import { render } from "..";


export const FilterByValues = (brend: string[], LocalSave: (arg0: string[]) => void, str: string ) => {
	document.querySelectorAll(str).forEach((element) => {
		if (brend.includes((element as HTMLInputElement).value)) {
			element.classList.add('active');
		}
		element.addEventListener('click', (event) => {
			const index = brend.indexOf((event.target as HTMLInputElement).value);
			console.log(index);
			if (index === -1) {
				brend.push((event.target as HTMLInputElement).value);
				(event.target as HTMLInputElement).classList.add('active');
				LocalSave(brend);
				render();
			} else {
				(event.target as HTMLInputElement).classList.remove('active');
				brend.splice(index, 1);
				console.log(brend)
				LocalSave(brend);
				render();
			}
		});
	});
}