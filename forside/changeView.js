function show() {
  const app = document.getElementById('app'); 
 
// Navbar
  let html = navBar();
  
  //main
  switch (model.currentPage) {
    case 'Home': html += mainView(); break;
    case 'Om': html += omMikkelView(); break;
    case 'MB': html += moneyButtonView(); break;
  };
  

  // Footer
  html += `<div class="footerDiv">${add1Div('footer')}</div>`;
  app.innerHTML = html;

  let footerText = `Dette er en footer`;
  const footer = document.getElementsByClassName('footer')[0];
  footer.innerText = footerText;

  // Set focus on searchbar
  let searchQueryInput = document.getElementsByClassName("searchQueryInput")[0];
  setCaretPosition(searchQueryInput, searchQueryInput.value.length);

  
  if (model.currentPage == 'Home'){
    getQuotesFromApi();
    
  }
};




