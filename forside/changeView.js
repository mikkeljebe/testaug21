function show() {
   let html = navBar();

  
  switch (model.currentPage) {
    case 'Home':
        html += mainView();
       break;
    // case 'Search':
    //     html += ();
    //    break;
// //     case 'Contact':
// //         html += contactView();
// //         break;
// //     default:
// //         html = noPageFound();  
}
  


let footerText = `Dette er en footer`;
html += `<div class="footerDiv">${add1Div('footer')}</div>`;


const app = document.getElementById('app');
app.innerHTML = html;


const footer = document.getElementsByClassName('footer')[0];
footer.innerText = footerText;

  
};

