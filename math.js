//weight_Kg = w
//height_Cm = h
//age = a

function womensCalories (w, h, a) {
	return 655.1 + (9.563 * w) + (1.85 * h) - (4.676 * a);
}

function mensCalories(w, h, a) {
	return 66.5 + (13.75 * w) + (5.003 * h) - (6.775 * a);
}

const OPERATIONS = {
    Women: 'Women',
    Men: 'Men',
}


function calculate({ w, h, a, operation }) {
	let result = 0;

	switch (operation) {
		case OPERATIONS.Women:
			result = womensCalories( w, h, a)
			break
		
		case OPERATIONS.Men:
			result = mensCalories( w, h, a)
			break
		
		default:
			break
	}
	return result
}

const inputWnode = document.querySelector('.js-number-w')
const inputHnode = document.querySelector('.js-number-h')
const inputAnode = document.querySelector('.js-number-a')
const selectOperationNode = document.querySelector('.js-select-operation')
const btnResultNode = document.querySelector('.js-btn-result')
const outputNode = document.querySelector('.js-output')


btnResultNode.addEventListener('click', function () {
    const w = Number(inputWnode.value);
    const h = Number(inputHnode.value);
    const a = Number(inputAnode.value);
    const operation = selectOperationNode.value;

	const result = calculate({ w, h, a, operation });
	outputNode.innerHTML = result
});
