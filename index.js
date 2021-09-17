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
    link: 'uke2/5_kode_som_kjører_når_siden_lastes.html',
    tittel: 'Loadetider',
  },
  {
    link: 'uke2/Ferdighet_06_Sette sammen_tekst_av_flere_deler_og_bruke_dette_til_å_lage.html',
    tittel: 'Tekst av flere deler',
  },
  {
    link: 'uke2/ferdighet_7_Sette_variabel_til_resultat_av_et_regnestykke.html',
    tittel: 'Variabel som resultat av et regnestykke',
  },
  {
    link: 'uke2/Ferdighet_9_Endre_andre_ting:_classList,_style.html',
    tittel: 'Endre andre ting enn innerHTML',
  },
  {
    link: 'uke2/Funksjoner_med_parametere2.html',
    tittel: 'Funksjoner med parametere',
  },
  {
    link: 'uke2/Ferdighet_12_funksjoner_med_returverdi.html',
    tittel: 'Funksjoner med returverdi',
  },
  {
    overskrift: 'Uke 3',
    link: "uke3/MVC.html",
    tittel: 'MVC',
  },
  {
    link: "uke3/kalkulatormvc.html",
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
let footerText = '';



//view
show();
function show() {
	let html ='';
  html += `
  <div class="navbar">
  <div class="dropdown">
  <div class="dropbtn">
  <Svg width="50" height="50" viewBox="0 0 50 50">
  <rect class="rect" width="20" height="2" x="15" y="18" ></rect>
  <rect class="rect" width="20" height="2" x="15" y="25"></rect>
  <rect class="rect" width="20" height="2" x="15" y="32"></rect>
  </svg>
  </div>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>  
  </div>
  </div>
  
  <div class="main">
  `;
  
  html += addDivWithLinks('div1', 5, 0); //klasse, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div2', 10, 5); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div3', 2, 15); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div4', 0, 17); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div5', 0, 18); //divNummer, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div6', 0, 19); //divNummer, antallinker, fraIndexNr i linker[].
  html += add1Div('footer');
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

function add1Div(klasse){
  let divHTML = `<div class="${klasse}"></div>`;
  return divHTML;
  show();
}