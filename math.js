//weight_Kg = w
//height_Cm = h
//age = a

function womensCalories (w, h, a) {
	return 655.1 + (9.563 * w) + (1.85 * h) - (4.676 * a);
}

function mensCalories(w, h, a) {
	return 66.5 + (13.75 * w) + (5.003 * h) - (6.775 * a);
}