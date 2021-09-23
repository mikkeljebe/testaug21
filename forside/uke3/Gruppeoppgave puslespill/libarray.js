//model

let winCondition = false;
let valgtImg = '';

let velgeNummer = '';
let flyttedeDiver = '';
let leggeTilNummer ='';

let divPåBrett = ['','','','','','','','','',''];
let img = [
	'',
	'<img src="1.jpg">',
	`<img src="2.jpg">`,
	`<img src="3.jpg">`,
	`<img src="4.jpg">`,
	`<img src="5.jpg">`,
	`<img src="6.jpg">`,
	`<img src="7.jpg">`,
	`<img src="8.jpg">`,
	`<img src="9.jpg">`
]

let css = ['','','','','','','','','',''];



//view
updateView();
function updateView() {
	document.getElementById("app").innerHTML = `
	
	<div id="brikkerUtenfor">
	<div class="enkeltBrikkeUtenfor ${css[1]}" onclick="velgBilde(1, this) ">${img[1]}</div>
  <div class="enkeltBrikkeUtenfor ${css[2]}" onclick="velgBilde(2, this) ">${img[2]}</div>
  <div class="enkeltBrikkeUtenfor ${css[3]}" onclick="velgBilde(3, this) ">${img[3]}</div>
  <div class="enkeltBrikkeUtenfor ${css[4]}" onclick="velgBilde(4, this) ">${img[4]}</div>
  <div class="enkeltBrikkeUtenfor ${css[5]}" onclick="velgBilde(5, this) ">${img[5]}</div>
  <div class="enkeltBrikkeUtenfor ${css[6]}" onclick="velgBilde(6, this) ">${img[6]}</div>
  <div class="enkeltBrikkeUtenfor ${css[7]}" onclick="velgBilde(7, this) ">${img[7]}</div>
  <div class="enkeltBrikkeUtenfor ${css[8]}" onclick="velgBilde(8, this) ">${img[8]}</div>
  <div class="enkeltBrikkeUtenfor ${css[9]}" onclick="velgBilde(9, this) ">${img[9]}</div>
</div>

<div id="brett">
  <div id="R1K1ON" class="sub" onclick="limInn(1)">${divPåBrett[1]}</div>
  <div id="R1K2ON" class="sub" onclick="limInn(2)">${divPåBrett[2]}</div>
  <div id="R1K3ON" class="sub" onclick="limInn(3)">${divPåBrett[3]}</div>
  <div id="R2K1ON" class="sub" onclick="limInn(4)">${divPåBrett[4]}</div>
  <div id="R2K2ON" class="sub" onclick="limInn(5)">${divPåBrett[5]}</div>
  <div id="R2K3ON" class="sub" onclick="limInn(6)">${divPåBrett[6]}</div>
  <div id="R3K1ON" class="sub" onclick="limInn(7)">${divPåBrett[7]}</div>
  <div id="R3K2ON" class="sub" onclick="limInn(8)">${divPåBrett[8]}</div>
  <div id="R3K3ON" class="sub" onclick="limInn(9)">${divPåBrett[9]}</div>
</div>
`;
}


//controller

function velgBilde(nummer, div) {
	valgtImg = div.innerHTML;
	velgeNummer = nummer;
	
	css = ['','','','','','','','','',''];
	if (img[nummer] !== '') { 
	css[nummer] += 'markering';
}
	
	updateView();
}

function limInn(nummer) {
		if (divPåBrett[nummer] == '') {
			divPåBrett[nummer] = valgtImg;
			img[velgeNummer] = '';
	} else {velgeNummer = '';
	}
	
leggeTilNummer = nummer;

	//fjerne css klasse fra alle divene.
	css = ['','','','','','','','','',''];

  testWin();
	updateView();
}


function testWin(){
  // Test på om du har klart det:
	if (
		divPåBrett[1].includes('9.jpg') &&
		divPåBrett[2].includes('8.jpg') &&
		divPåBrett[3].includes('7.jpg') &&
		divPåBrett[4].includes('6.jpg') &&
		divPåBrett[5].includes('5.jpg') &&
		divPåBrett[6].includes('4.jpg') &&
		divPåBrett[7].includes('3.jpg') &&
		divPåBrett[8].includes('2.jpg') &&
		divPåBrett[9].includes('1.jpg')
	) {
		winCondition = true;
	}
	if (winCondition == true) {
		alert('Du klarte det!');
	}
}