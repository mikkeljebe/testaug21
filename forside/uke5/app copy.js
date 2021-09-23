//model
let rute = [7, 1, 2, 5, 0, 3, 8, 4, 6];
let teller = 0



//view
show();
function show() {
  let html = '';
  
  for (let i = 0; i < rute.length; i++) {
    let nummer = rute[i];
    let tom = nummer === 0
    let nummerText = tom ? '' : nummer;
    let førstPåLinje = i % 3 == 0 ? 'førstPåLinje' : '';
      html += `
        <div class="${førstPåLinje}" onclick="trykk(${i});">${nummerText}</div>
        `;
    }
  document.getElementById("app").innerHTML = html;
}


//controller

function trykk(index) {
  let blankIndex = findBlankIndex(index);
  if (blankIndex == null) return;
  teller++;
  rute[blankIndex] = rute[index];
  rute[index] = 0;
  show();
}

function findBlankIndex(index) {

  for (let element of [-3, -1, 1, 3]) {
      let newIndex = index + element;
      console.log(newIndex);
      
      if (newIndex < 0 || newIndex >= rute.length) continue;
      if (rute[newIndex] === 0) {
          return newIndex;
      }
  }
  return null;
}