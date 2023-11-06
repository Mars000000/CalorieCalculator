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

});
	console.log(result);