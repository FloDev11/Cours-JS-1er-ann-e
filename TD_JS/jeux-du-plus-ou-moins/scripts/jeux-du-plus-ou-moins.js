// console.log('Jeux du plus ou moins');

// function metAuCarre(nbDeBase){
//     let resultat = nbDeBase*nbDeBase;

//     return resultat;
// }

//let nb = prompt('Entrer le nombre a multiplier au carré :')

//let resultat = metAuCarre(nb);

//console.log('resultat de metAuCarre = ', resultat);


// let btnSubmit = document.getElementById('btn_submit');
// btnSubmit.addEventListener('click', function() {
//     let inputNbSaisie = document.getElementById('valeur_saisie');
//     let NbSaisie = inputNbSaisie.value;

    

//     console.log('La valeur saisie est ',NbSaisie);

//     return NbSaisie;
// })

// let spanMessage = document.getElementById('reponse_jeu');
// spanMessage = btnSubmit ;


let spanNbCoupJoues = document.getElementById('nb_coups_joues')
let spanNBMaxCoups = document.getElementById('nb_max_coups')
let spanReponseJeu = document.getElementById('reponse_jeu')
let inputValeurSaisie = document.getElementById('valeur_saisie')
let btnSubmit = document.getElementById('btn_submit')
let listeValeursSaisies = document.getElementById('liste_valeurs_saisies')
let arrayValeursSaisies = []

let min = 1 ;
let max = 20 ;
let valeurATrouver = Math.floor(Math.random() * (max - min)) + min;

let nbCoupsJoues = 0 ;
let nbCoupsMaxAutorise = 10 ;

spanNBMaxCoups.textContent = nbCoupsMaxAutorise;



btnSubmit.addEventListener('click', detecteValeurSaisie)

inputValeurSaisie.addEventListener('keydown', function(event) {
    if( event.key == 'Enter') {
        detecteValeurSaisie()
    }
})

function clearInputAndShowMessage(message){
    spanReponseJeu.textContent = message
     // Clear l'input valeur saisie
    inputValeurSaisie.value = ''
    // Redonne le focus
    inputValeurSaisie.focus()
}
    
function detecteValeurSaisie() {
    let valeurSaisie = parseInt(inputValeurSaisie.value);
    
    if ( valeurSaisie ) {
        if ( valeurSaisie >= min && valeurSaisie <= max ){
            // Detecte si la valeur saisie est présente dans mon tableau.
            if( arrayValeursSaisies.indexOf(valeurSaisie) != -1){
                clearInputAndShowMessage("La valeur saisie a déjà été tester .") 
            }
            else {
                // Non présent dans le tableu, je l'ajoute
                arrayValeursSaisies.push(valeurSaisie)
                let newLi = document.createElement('li')
                newLi.textContent = valeurSaisie ;
                listeValeursSaisies.appendChild(newLi)

                nbCoupsJoues++
                spanNbCoupJoues.textContent = nbCoupsJoues

                if (valeurSaisie > valeurATrouver){
                    clearInputAndShowMessage("C'est moins")
                }
                else if( valeurSaisie < valeurATrouver){
                    clearInputAndShowMessage("C'est plus")
                }
                else if( valeurSaisie == valeurATrouver){
                    clearInputAndShowMessage("C'est gagné")
                }
            }
        }
        else {
            clearInputAndShowMessage("La valeur saisie doit être entre " + min + " et " + max)   
        }
    }
    else {
        clearInputAndShowMessage("La valeur saisie doit être un nombre")
    }
    
}

