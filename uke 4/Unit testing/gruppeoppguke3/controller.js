

function velgBilde(nummer, div) {
	valgtImg = div;
	fjerneDiv = nummer;
	
		//Fjerne markering fra de som ikke er skjulte
		if (!css1.includes('skjult') && nummer != '1') {
			css1 = '';
		}
	
	
	updateView();
	}


