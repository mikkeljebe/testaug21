//model

let winCondition = false;
let valgtImg = '';
let css1 = '';
let css2 = '';
let css3 = '';
let css4 = '';
let css5 = '';
let css6 = '';
let css7 = '';
let css8 = '';
let css9 = '';
let fjerneDiv = '';
let flyttedeDiver = '';

let div1HTML = '';
let div2HTML = '';
let div3HTML = '';
let div4HTML = '';
let div5HTML = '';
let div6HTML = '';
let div7HTML = '';
let div8HTML = '';
let div9HTML = '';

//view
updateView();
function updateView() {
	document.getElementById('app').innerHTML = `

<div id="brikkerUtenfor">
  <div class="enkeltBrikkeUtenfor ${css1 || ''}" onclick="velgBilde(1, this) "><img src="1.jpg"></div>
  <div class="enkeltBrikkeUtenfor ${css2 || ''}" onclick="velgBilde(2, this) "><img src="2.jpg"></div>
  <div class="enkeltBrikkeUtenfor ${css3 || ''}" onclick="velgBilde(3, this) "><img src="3.jpg"></div>
  <div class="enkeltBrikkeUtenfor ${css4 || ''}" onclick="velgBilde(4, this) "><img src="6.jpg"></div>
  <div class="enkeltBrikkeUtenfor ${css5 || ''}" onclick="velgBilde(5, this) "><img src="5.jpg"></div>
  <div class="enkeltBrikkeUtenfor ${css6 || ''}" onclick="velgBilde(6, this) "><img src="4.jpg"></div>
  <div class="enkeltBrikkeUtenfor ${css7 || ''}" onclick="velgBilde(7, this) "><img src="7.jpg"></div>
  <div class="enkeltBrikkeUtenfor ${css8 || ''}" onclick="velgBilde(8, this) "><img src="8.jpg"></div>
  <div class="enkeltBrikkeUtenfor ${css9 || ''}" onclick="velgBilde(9, this) "><img src="9.jpg"></div>
</div>

<div id="brett">
  <div id="R1K1ON" class="sub" onclick="limInn(1)">${div1HTML || ''}</div>
  <div id="R1K2ON" class="sub" onclick="limInn(2)">${div2HTML || ''}</div>
  <div id="R1K3ON" class="sub" onclick="limInn(3)">${div3HTML || ''}</div>
  <div id="R2K1ON" class="sub" onclick="limInn(4)">${div4HTML || ''}</div>
  <div id="R2K2ON" class="sub" onclick="limInn(5)">${div5HTML || ''}</div>
  <div id="R2K3ON" class="sub" onclick="limInn(6)">${div6HTML || ''}</div>
  <div id="R3K1ON" class="sub" onclick="limInn(7)">${div7HTML || ''}</div>
  <div id="R3K2ON" class="sub" onclick="limInn(8)">${div8HTML || ''}</div>
  <div id="R3K3ON" class="sub" onclick="limInn(9)">${div9HTML || ''}</div>
</div>
`;
}


//controller

function velgBilde(nummer, div) {
	valgtImg = div.innerHTML;
	fjerneDiv = nummer;
	
		if (nummer == '1') {
			if (css1 == '') {
				css1 += 'markering ';
			} else if (!css1.includes('skjult')) {
				css1 = '';
			}
		}
		if (nummer == '2') {
			if (css2 == '') {
				css2 += 'markering ';
			} else if (!css2.includes('skjult')) {
				css2 = '';
			}
		}
		if (nummer == '3') {
			if (css3 == '') {
				css3 += 'markering ';
			} else if (!css3.includes('skjult')) {
				css3 = '';
			}
		}
		if (nummer == '4') {
			if (css4 == '') {
				css4 += 'markering ';
			} else if (!css4.includes('skjult')) {
				css4 = '';
			}
		}
		if (nummer == '5') {
			if (css5 == '') {
				css5 += 'markering ';
			} else if (!css5.includes('skjult')) {
				css5 = '';
			}
		}
		if (nummer == '6') {
			if (css6 == '') {
				css6 += 'markering ';
			} else if (!css6.includes('skjult')) {
				css6 = '';
			}
		}
		if (nummer == '7') {
			if (css7 == '') {
				css7 += 'markering ';
			} else if (!css7.includes('skjult')) {
				css7 = '';
			}
		}
		if (nummer == '8') {
			if (css8 == '') {
				css8 += 'markering ';
			} else if (!css8.includes('skjult')) {
				css8 = '';
			}
		}
		if (nummer == '9') {
			if (css9 == '') {
				css9 += 'markering ';
			} else if (!css9.includes('skjult')) {
				css9 = '';
			}
		}
	
		
			//Fjerne markering fra de som ikke er skjulte
		if (!css1.includes('skjult') && nummer != '1') {
			css1 = '';
		}
		if (!css2.includes('skjult') && nummer != '2') {
			css2 = '';
		}
		if (!css3.includes('skjult') && nummer != '3') {
			css3 = '';
		}
		if (!css4.includes('skjult') && nummer != '4') {
			css4 = '';
		}
		if (!css5.includes('skjult') && nummer != '5') {
			css5 = '';
		}
		if (!css6.includes('skjult') && nummer != '6') {
			css6 = '';
		}
		if (!css7.includes('skjult') && nummer != '7') {
			css7 = '';
		}
		if (!css8.includes('skjult') && nummer != '8') {
			css8 = '';
		}
		if (!css9.includes('skjult') && nummer != '9') {
			css9 = '';
		}
	

	updateView();
}


function limInn(nummer) {
	if (nummer == '1') {
		div1HTML == '' ? (div1HTML = valgtImg) : (fjerneDiv = '');
	}
	if (nummer == '2') {
		div2HTML == '' ? (div2HTML = valgtImg) : (fjerneDiv = '');
	}
	if (nummer == '3') {
		div3HTML == '' ? (div3HTML = valgtImg) : (fjerneDiv = '');
	}
	if (nummer == '4') {
		div4HTML == '' ? (div4HTML = valgtImg) : (fjerneDiv = '');
	}
	if (nummer == '5') {
		div5HTML == '' ? (div5HTML = valgtImg) : (fjerneDiv = '');
	}
	if (nummer == '6') {
		div6HTML == '' ? (div6HTML = valgtImg) : (fjerneDiv = '');
	}
	if (nummer == '7') {
		div7HTML == '' ? (div7HTML = valgtImg) : (fjerneDiv = '');
	}
	if (nummer == '8') {
		div8HTML == '' ? (div8HTML = valgtImg) : (fjerneDiv = '');
	}
	if (nummer == '9') {
		div9HTML == '' ? (div9HTML = valgtImg) : (fjerneDiv = '');
	}

	//fjerne css klasse fra alle divene.
	css1 = css2 = css3 = css4 = css5 = css6 = css7 = css8 = css9 = '';

	leggeTilSkjultCssKlasse();
  testWin();
	updateView();
}


function leggeTilSkjultCssKlasse(){
  // Legge til skjult css klasse på bilder som har blitt flyttet
	flyttedeDiver += fjerneDiv;

	if (flyttedeDiver.includes('1')) {
		css1 = 'skjult ';
	}
	if (flyttedeDiver.includes('2')) {
		css2 = 'skjult ';
	}
	if (flyttedeDiver.includes('3')) {
		css3 = 'skjult ';
	}
	if (flyttedeDiver.includes('4')) {
		css4 = 'skjult ';
	}
	if (flyttedeDiver.includes('5')) {
		css5 = 'skjult ';
	}
	if (flyttedeDiver.includes('6')) {
		css6 = 'skjult ';
	}
	if (flyttedeDiver.includes('7')) {
		css7 = 'skjult ';
	}
	if (flyttedeDiver.includes('8')) {
		css8 = 'skjult ';
	}
	if (flyttedeDiver.includes('9')) {
		css9 = 'skjult ';
	}
}

function testWin(){
  // Test på om du har klart det:
	if (
		div1HTML.includes('9.jpg') &&
		div2HTML.includes('8.jpg') &&
		div3HTML.includes('7.jpg') &&
		div4HTML.includes('6.jpg') &&
		div5HTML.includes('5.jpg') &&
		div6HTML.includes('4.jpg') &&
		div7HTML.includes('3.jpg') &&
		div8HTML.includes('2.jpg') &&
		div9HTML.includes('1.jpg')
	) {
		winCondition = true;
	}
	if (winCondition == true) {
		alert('Du klarte det!');
	}
}