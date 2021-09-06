//model
let antallSirkler = 25;
let selectedLampIndex = 12;
let startTime = '';
let finishTime = '';
let spentMilliseconds = '';
let spentSeconds = '';
let antallTrykk = 0;

//view

updateView();
function updateView() {
  let html = "";
  startTime = new Date().getTime();

  for (let i = 0; i < antallSirkler; i++) {
    let valgtLampe = '';
    let skruPå = '';
    let divText = '';
    let førstPåLinja = i % 5 == 0 ? 'førstPåLinja' : '';
    if (i == selectedLampIndex) {
      valgtLampe = 'lightOn';
      skruPå = 'onOff()';

      if (antallTrykk == 0) {
        divText = '<br><br>Trykk her';
      } else if (antallTrykk <= 5) {
        divText = '<br><br>Fort deg!';
      } else if (antallTrykk <= 15) { divText = '<br>Enda fortere!'
      } else  divText = '<br><br>Trykk her';
    }
    html += `
      <div onclick='${skruPå}' class="lamp ${valgtLampe} ${førstPåLinja}">${divText}</div>  
      `;
   document.getElementById("app").innerHTML = html;
  }
}

//controller
function onOff() {
  selectedLampIndex = Math.floor(Math.random() * 25);
  finishTime = new Date().getTime();
  let spentMilliseconds = Math.floor(finishTime - startTime);
  let spentSeconds = spentMilliseconds / 1000;
  antallTrykk++;
  console.log(`Du brukte ${spentSeconds} sekunder`);
  updateView();
}