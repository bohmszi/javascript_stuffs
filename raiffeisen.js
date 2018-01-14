// Javascript to calculate credit card balance on hungarian 'Raiffeisen direktnet' page
// Lang: HU

// Raiffeisen - hitelkártya adott havi terhelése
var x = document.getElementsByClassName("billInfoBox");
var aKeret = x[0].rows[1].getElementsByClassName("rightText redText")[0].outerText.replace(/[^\d.]/g, '').slice(0, -2);
var aFelhasznalt = x[0].rows[4].getElementsByClassName("rightText")[0].outerText.replace(/[^\d.]/g, '').slice(0, -2);
var aJovairt = x[1].rows[4].getElementsByClassName("rightText")[0].outerText.replace(/[^\d.]/g, '').slice(0, -2);
if ( aFelhasznalt === aJovairt ) {
  var hitel = aKeret;
} else {
  var hitel = aKeret - aFelhasznalt;
}

// New row to highlight 'egyenleg'
var row = x[0].insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.className += " redText";
cell2.className += " rightText redText";

// Fill new cells:
cell1.innerHTML = "<b>Egyenleg</b>";
cell2.innerHTML = "<b>" + hitel + " HUF</b>";

// Alert - not required since new row addition
//alert("A hitelkártya egyenlege: " + hitel);
