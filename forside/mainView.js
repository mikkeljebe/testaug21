function mainView(){
  let html='';
  html += `<div class="mainView">`;
  html += addDivWithLinks('div1', 5, 0);  //divclass, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div2', 10, 5); //divclass, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div3', 2, 15); //divclass, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div4', 0, 17); //divclass, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div5', 0, 18); //divclass, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div6', 0, 19); //divclass, antallinker, fraIndexNr i linker[].
  
  html += `</div>`; 
	
  return html;
}