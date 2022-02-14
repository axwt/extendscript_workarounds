/**
 * Issue description:
 *
 * Curva script: https://videohive.net/item/curva-script-premium-after-effects-script/8694469
 * extends Object's prototypes which may damage your scripts is they are communicating with ExternalObject library
 * or your may get unnecessary data when working with JSON library
 *
 * Workaround description:
 *
 * Check for modified object keys and ask user to close the script and restart AE.
 */

function curvaIsNotRunning() {

  var curvaObject = {};

  if (curvaObject.toSource().indexOf("isStaticText") != -1 && curvaObject.toSource().indexOf("drawHoverBox") != -1) {
    return !!alert('Please, close "Curva" script and restart After Effects.\nUnfortunatelly, "Curva" script corrupts other scripts and required to be closed.')
  }

  return true;

};
