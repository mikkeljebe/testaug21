 //controller

 function addDivWithLinks(klasse, antall, fraIndexNr){
  let linkerHtml = '';
  linkerHtml += `<div class="${klasse} ruter">${linker[fraIndexNr].overskrift}<ul>`;
  
  if (!linker[fraIndexNr].link){
    linkerHtml += '</ul></div>';
    return linkerHtml;
  } else {
     for (let i = fraIndexNr; i < fraIndexNr+antall; i++) {
       linkerHtml += `<li><a href=${linker[i].link}>${linker[i].tittel}</a></li>`;
     };
   linkerHtml += '</ul></div>';
   return linkerHtml;
   };
}

 function add1Div(klasse){
  let divHTML = `<div class="${klasse}"></div>`;
  return divHTML;
 }



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
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>  
    </div>
    
    <section>Mikkel</section>
    
   <div class="searchBar">
   <input id="searchQueryInput" type="text" onkeyup="model.searchInput = this.value, model.currentPage = 'Search'"onclick="search()" name="searchQueryInput" placeholder="Søk.." value="${model.searchInput}" />
     <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
       <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
       </svg>
     </button>
     </div>
     <div id="searchDropdown" class="searchDropdown-content ${model.classList}">${model.result}</div>


    </div>
    
    `;
    
    return navHtml;
  }

 function search(){
  model.result = `
<ul id="myUL">`

  for (let i = 0; i < model.filteredList.length; i++) {
  model.result +=  `<li class="a"><a href="${model.filteredList[i].link}">${model.filteredList[i].tittel}</a></li>`
  }
  model.result += `</ul>`;


  let a = document.getElementsByClassName("a");
  for (let i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;


      txtValue.toUpperCase().indexOf(model.searchInput) > -1 ? a[i].style.display = "" : a[i].style.display = "none";
  }
  toggleClasslistShow();
  
}

 const toggleClasslistShow = () => {
     (model.classList == '') ? model.classList = 'show' : model.classList = '';
     console.log(model.classList);
     
     show();
 };