//#region Conditions
var temperature_du_jour = 16; // Changer cette valeur pour tester
var sensation = null; // Déclaration de la variable sensation avant le if et initialisation à null car sera déterminée par la suite


/* L'ordre des if / else if à son importance,
    chaque condition sera testé les unes à la suite des autres 
    jusqu'à la première qui retournera vrai
*/
if( temperature_du_jour <= -20 || temperature_du_jour >= 45 ){
    sensation = 'extrême';
} else if( temperature_du_jour <= 0 ){
    sensation = 'très froid';
} else if ( temperature_du_jour > 0 && temperature_du_jour <= 10 ){
    sensation = 'froid';
} else if( temperature_du_jour > 10 && temperature_du_jour <= 25 ){
    sensation = 'doux';
} else if( temperature_du_jour > 25 && temperature_du_jour <= 35 ){
    sensation = 'chaud';
} else {
    sensation = 'très chaud';
}

console.log('sensation température : ', sensation);

var fruits = 'Papayes';
switch (fruits) {
  case 'Oranges':
    console.log('Les oranges coûtent 1,39€ le kilo.');
    break;
  case 'Mangues':
  case 'Papayes':
    console.log('Les mangues et les papayes coûtent 3,39€ le kilo');
    break;
  default:
    console.log(`Désolé nous n'avons pas de ${fruits}.`);
}
//#endregion Conditions


//#region Boucles

var tableau_notes = [ 14, 20, 11, 9, 12 ];
var sommeNotes = 0;
for( let i = 0 ; i < tableau_notes.length ; i++ ){
    let note = tableau_notes[i]
    sommeNotes += note // Raccourcis équivalent à somme = somme + note
}
// Peut s'écrire avec un foreach :
sommeNotes = 0; // remise à zéro de la somme pour démo boucle avec forEach
tableau_notes.forEach( note => { 
    sommeNotes += note 
})
console.log('la moyenne des notes et de : ', sommeNotes / tableau_notes.length );


var testString = 'Une chaine de caractère'
for( let i = 0; i < testString.length ; i++ ){
    let lettre = testString[i];
    console.log('lettre : ', lettre);
    if( lettre == ' '){ // Il est possible de stopper une boucle grâce à l'instruction "break"
        break
    }
}
// Ne peut pas s'écrire par avec un foreach.

var ul_liste_basique = document.getElementById('liste_basique')
var ulChildren = ul_liste_basique.children
for( let i = 0; i < ulChildren.length ; i++ ){
   let child = ulChildren[i]
   console.log('child ul : ', child);
} // Ne peut pas s'écrire par un forEach

var h2sInPage = document.querySelectorAll('h2')
for( let i = 0; i < h2sInPage.length ; i++ ){
    let h2 = h2sInPage[i]
    // console.log('h2 in page : ', h2);
}
// Peut aussi s'écrire par un forEach:
var h2sInPage = document.querySelectorAll('h2')
h2sInPage.forEach( h2 => {
    console.log('h2 in page : ', h2);
})










//#endregion Boucles