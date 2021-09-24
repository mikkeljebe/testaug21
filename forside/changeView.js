function show() {
  const app = document.getElementById('app'); 
 
// Navbar
  let html = navBar();

  switch (model.currentPage) {
    case 'Home': html += mainView(); break;
    case 'Om': html += omMikkelView(); break;
  };

  html += `<div class="footerDiv">${add1Div('footer')}</div>`;
  app.innerHTML = html;

// Footer
  let footerText = `Dette er en footer`;
  const footer = document.getElementsByClassName('footer')[0];
  footer.innerText = footerText;

  // Set focus on searchbar
  let input = document.getElementsByClassName("searchQueryInput")[0];
  setCaretPosition(input, input.value.length);
};

function setCaretPosition(input, pos) {
  if (input.setSelectionRange) {
  input.focus();
  input.setSelectionRange(pos, pos);
  };
};

// 'Esc' key to close search. 
window.onkeydown = function(event) {
  if ( event.keyCode == 27 ) {
      model.result = '';
      model.searchQuery =" ";
      show();
  }
};


