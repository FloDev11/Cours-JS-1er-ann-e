
console.log('Jeux du plus ou moins');

// Créer une fonction qui s'appelle metAuCarre, qui prend en paramètre un nombre et qui retourne sa valeur au carré

// Afficher le résultat dans un console.log




function multipliePar( nbDeBase, multiplicateur ){
   let resultat = nbDeBase * multiplicateur; 
   
   return resultat
}

let resultat = multipliePar(5, 7);


function metAuCarre(nbDeBase){
    let resultat = nbDeBase * nbDeBase
    return resultat
}

// let valeurAMettreAuCarre = prompt('Une valeure svp')

// let res = metAuCarre(valeurAMettreAuCarre)
// console.log('resultat de met au carré : ', res);
// console.log('resultat de multiplie par ', resultat);









let btnSubmit = document.getElementById('btn_submit')
btnSubmit.addEventListener('click', function() {
    let inputValeurSaisie = document.getElementById('valeur_saisie');
    let valeurSaisie = inputValeurSaisie.value 

    console.log( metAuCarre(valeurSaisie) );
})

// Consigne : 
/*
    - Mettre en place un input text pour récupérer le nom du visiteur,
    - Ajouter un bouton pour valider
    - Au clic sur ce bouton, afficher la valeur de l'input dans un console.log


    Etape 2: 
    - Afficher le nom du joueur dans un span sur votre html
*/ 











// Conseil pour ceux qui sont allé jusqu'ici, allez vous entrainer sur edabit.com