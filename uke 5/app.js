//model
let rute = [7, 1, 2, 5, 0, 3, 8, 4, 6];

//view
show();
function show() {
  document.getElementById("app").innerHTML = `

    <div id="r1k1" onclick="trykk(0,1,3,'_','_')">${rute[0]}</div>
    <div id="r1k2" onclick="trykk(1,0,2,4,'_')">${rute[1]}</div>
    <div id="r1k3" onclick="trykk(2,1,5,'_','_')">${rute[2]}</div>
    <div id="r2k1" class="førstPåLinja" onclick="trykk(3,0,4,6,'_')">${rute[3]}</div>
    <div id="r2k2" onclick="trykk(4,1,3,5,7)">${rute[4]}</div>
    <div id="r2k3" onclick="trykk(5,2,4,8,'_')">${rute[5]}</div>
    <div id="r3k1" class="førstPåLinja" onclick="trykk(6,3,7,'_','_')">${rute[6]}</div>
    <div id="r3k2" onclick="trykk(7,6,4,8,'_')">${rute[7]}</div>
    <div id="r3k3" onclick="trykk(8,5,7,'_','_')">${rute[8]}</div>
  `;
}
//controller

function trykk(tagElement, alt1, alt2, alt3, alt4) {
  if (rute[alt1] == 0) {
    rute[alt1] = rute[tagElement];
    rute[tagElement] = 0;
    console.log(rute);
    
  }
  if (rute[alt2] == 0) {
    rute[alt2] = rute[tagElement];
    rute[tagElement] = 0;
  }
  if (rute[alt3] == 0) {
    rute[alt3] = rute[tagElement];
    rute[tagElement] = 0;
  }
  if (rute[alt4] == 0) {
    rute[alt4] = rute[tagElement];
    rute[tagElement] = 0;
  }
  

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let numberText = isBlank ? '' : number;
    let isBlank = number === 0;
  }


  show();
}
