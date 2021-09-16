//model
const linker =[
  {
    overskrift: 'Uke 1',
    link: 'svgsnømann.html',
    tittel: 'Svg snømann',
  },
  {
    link: 'cssgrid/cssgrid.html',
    tittel: 'Css grid',
  },
  {
    link: "cssgrid/cssgrid2.html",
    tittel: 'Css grid2',
  },
  {
    link: 'ludo/ludo.html',
    tittel: 'Ludo css',
  },
  {
    link: 'photoblog.html',
    tittel: 'Photoblog',
  },
  {
    overskrift: 'Uke 2',
    link: "uke2/onclick.html",
    tittel: 'Onclick',
  },
  {
    link: 'uke2/onclick2.html',
    tittel: 'Onclick 2',
  },
  {
    link: 'uke2/eventhandlere.html',
    tittel: 'Andre eventhandlere',
  },
  {
    link: 'uke2/this.html',
    tittel: 'Musovercelle this',
  },
  {
    link: 'uke2/5 kode som kjører når siden lastes.html',
    tittel: 'Loadetider',
  },
  {
    link: 'uke2/Ferdighet 06 - Sette sammen tekst av flere deler og bruke dette til å lage.html',
    tittel: 'Tekst av flere deler',
  },
  {
    link: 'uke2/ferdighet 7 - Sette variabel til resultat av et regnestykke.html',
    tittel: 'Variabel som resultat av et regnestykke',
  },
  {
    link: 'uke2/Ferdighet 9 - Endre andre ting: classList, style.html',
    tittel: 'Endre andre ting enn innerHTML',
  },
  {
    link: 'uke2/Funksjoner med parametere2.html',
    tittel: 'Funksjoner med parametere',
  },
  {
    link: 'uke2/Ferdighet 12 - funksjoner med returverdi.html',
    tittel: 'Funksjoner med returverdi',
  },
  {
    overskrift: 'Uke 3',
    link: "uke 3/MVC.html",
    tittel: 'MVC',
  },
  {
    link: "uke 3/kalkulatormvc.html",
    tittel: 'Kalkulator MVC',
  },
  {
    overskrift: 'Uke 4',
    link: '',
    tittel: '',
  },
  {
    overskrift: 'Uke 5',
    link: '',
    tittel: '',
  },
  {
    overskrift: 'Uke 6',
    link: '',
    tittel: '',
  },
];

let linkerHtml ='';
let cssClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
let footerText = '';



//view
show();
function show() {
	let html ='';
  html += `
  <div class="header"><h1>Mikkels testside!</h1></div>
  <div class="main">
  `;
  
  html += addDivWithLinks('div1', 5, 0); //klasse, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div2', 10, 5); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div3', 2, 15); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div4', 0, 17); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div5', 0, 18); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div6', 0, 19); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDiv('footer');
  footerText += `Dette er en footer`;
      
  html += `



</div>

	
	`;

	document.getElementById('app').innerHTML = html;
	document.getElementsByClassName('footer')[0].innerHTML = footerText;

};

 //controller

 function addDivWithLinks(klasse, antall, fraIndexNr){
   linkerHtml = '';
   linkerHtml += `<div class="${klasse} ruter">${linker[fraIndexNr].overskrift}<ul>`;
   
   if (linker[fraIndexNr].link === '' || undefined ){
     linkerHtml += '</ul></div>';
     return linkerHtml;
   } else {
      for (let i = fraIndexNr; i < fraIndexNr+antall; i++) {
        linkerHtml += `<li><a href=${linker[i].link}>${linker[i].tittel}</a></li>`;
      }
      linkerHtml += '</ul></div>';
  return linkerHtml;
  };
  show();
};

function addDiv(klasse, antall){
  
  let divHTML = `<div class="${klasse}"></div>`

return divHTML;

  show();
}