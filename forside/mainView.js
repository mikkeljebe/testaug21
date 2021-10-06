function mainView(){
    let html='';
  html += `<div class="mainView">`;
  html += addDivWithLinks('div1', 5, 0);  //divclass, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div2', 10, 5); //divclass, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div3', 2, 15); //divclass, antallinker, fraIndexNr i linker[].
  html += addDivWithLinks('div4', 0, 17); //divclass, antallinker, fraIndexNr i linker[].
  html += add1Div('div5');
  html += `
  <div id="quote-section" class="quote-section">
  <div class="quote-container" id="quote-container">
  
  <div class="quote-text">
      <i class="fas fa-quote-left"></i>
      <span id="quote-span"></span>
  </div>
  
  <div class="quote-author">
      <span id="author"></span>
  </div>
  
  <div class="button-container">
      <button class="twitter-button" id="twitter" title="Tweet this!" onclick="tweetQuote()">
          <i class="fab fa-twitter"></i>
      </button>
      <button id="new-quote" onclick="newQuote()">New Quote</button>
  </div>

</div>

<div id="loader" class="loader"></div></div>` 
  
  html += `</div>`; 

   
	
  return html;
}


