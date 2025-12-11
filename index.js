// la valeur d'affichage

function appendToDisplay(values) {
  display.value += values;

  console.log(display.value);
}
// efaccer l'affichage
function clearDisplay() {
  document.getElementById("display").value = "";
}
// obtenir le resultat
function resultat() {
  display.value = eval(display.value);
}
// supprimer le dernier caractere
function supprimer() {
  let sup = display.value - display.value.slice(-1);
  display.value = sup;
}
// changer le signe
function changerSigne() {
  display.value = -1 * Number(display.value);
}
