function isMail(txt) {
  txtUtenMellomrom = txt.replace(/\s+/g, "");
  del = txtUtenMellomrom.split('@');

  if (
    (txtUtenMellomrom.indexOf(`@`) > -1) && 
    (del[0].indexOf('.') > -1) && 
    (del[1].indexOf('.') > -1)
    ) {
    return true; 
  } else {
    return false;
  }
}