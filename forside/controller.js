function addDivWithLinks(klasse, antall, fraIndexNr){
  let divWithlinksHTML = '';
  divWithlinksHTML += `<div class="${klasse} ruter">${linker[fraIndexNr].overskrift}<ul>`;
  
  if (!linker[fraIndexNr].link){
    divWithlinksHTML += '</ul></div>';
    return divWithlinksHTML;
  } else {
     for (let i = fraIndexNr; i < fraIndexNr+antall; i++) {
       divWithlinksHTML += `<li><a href=${linker[i].link}>${linker[i].tittel}</a></li>`;
     };
   divWithlinksHTML += '</ul></div>';
   return divWithlinksHTML;
  };
};

function add1Div(klasse){
  let divHTML = `<div class="${klasse}"></div>`;
  return divHTML;
};

function navBar(){

   let navHtml = `
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
    <a onclick="toHome()">Home</a>
    
    <a onclick="toAbout()">About</a>
    </div>  
    </div>
    
    <section onclick="toAbout()">Mikkel</section>
    
    <div id="searchWrapper" class="searchWrapper">
   <div class="searchBar">
   <input class="searchQueryInput" type="text" autocomplete="off" onclick="removeSearch()" oninput="search(this.value)" placeholder="Søk.." value="${model.searchQuery}"/>
     <button class="searchQuerySubmit" type="submit">
       <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
       </svg>
     </button>
     </div>
     <div class="searchDropdown-content">${model.result}</div>
     </div>
    </div>

    `;
    
    return navHtml;
};

function search(searchTerm){
  model.searchQuery = searchTerm;
    let filteredData = linker
    .filter(elements => elements.tittel && elements.link)
    .filter(element => 
      element.link.toLowerCase().includes(searchTerm.toLowerCase())|| 
      element.tittel.toLowerCase().includes(searchTerm.toLowerCase()));

  model.result = `<ul id="myUL">Trykk 'esc' for å fjerne søk`;
  for (let i = 0; i < filteredData.length; i++) {
    model.result +=  `<li class="a"><a href="${filteredData[i].link}">${filteredData[i].tittel}</a></li>`;
  };
  
  if (filteredData.length == 0) {
    model.result +=  `<li">Ingen treff</li>`;
  };

  model.result += `</ul>`;
  show();
};

function removeSearch(){
  if (model.result.length > 4) {
    model.result = '';
    show();
  }
}

function toHome(){
  model.currentPage = 'Home';
  show();
}

function toAbout(){
  model.currentPage = 'Om';
  show();
}