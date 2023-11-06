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