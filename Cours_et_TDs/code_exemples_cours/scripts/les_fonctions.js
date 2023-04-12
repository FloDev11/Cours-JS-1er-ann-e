var liste_notes = [ 9, 12, 15, 18 ];
var moyenneNotes = moyenneFromArray(liste_notes)
console.log('moyenneNotes : ', moyenneNotes );

function moyenneFromArray(liste_notes){
    let sommeTotal = 0;
    liste_notes.forEach( note => {
        sommeTotal = somme(sommeTotal, note)
    });

    let moyenne = sommeTotal / liste_notes.length;
    return moyenne;
}

function somme(nb1, nb2){
    return nb1 + nb2 
}



