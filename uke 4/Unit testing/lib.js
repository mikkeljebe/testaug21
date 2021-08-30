function fixText(txt) {
   txttrim = txt.trim().toLowerCase();
  if (typeof txttrim.charAt(0) === 'string') {
    return txttrim.charAt(0).toUpperCase() + txttrim.slice(1);
  } else {
  return txttrim;
  }
}