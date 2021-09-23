function mainView(){
 let html='';
  html += `<div class="mainView">`;
  html += addDivWithLinks('div1', 5, 0); //klasse, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div2', 10, 5); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div3', 2, 15); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div4', 0, 17); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div5', 0, 18); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div6', 0, 19); //divNummer, antallinker, fraIndexNr i linker[].
  
  html += `</div>`; //mainView slutt
	
  return html;
}