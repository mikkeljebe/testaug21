//model
let rute = [7, 1, 2, 5, 0, 3, 8, 4, 6];


//view
show();
function show() {
  let html = '';
  
  for (let i = 0; i < rute.length; i++) {
      let nummerText = rute[i];
    
      html += `
        <div>${nummerText}</div>
        `;
    }
  document.getElementById("app").innerHTML = html;
}


//controller

for (let element of rute){
  console.log(`Her er et tall: ${element}`);
}

for (let i = 0; i < rute.length; i++) {
  const element = rute[i];
  console.log(`Her er en index: ${i} og et tall: ${element}`);
}



