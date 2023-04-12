console.log('Jeux du plus ou moins');

// Récupération de tous les éléments nécéssaires au fonctionnement du jeux :
var spanNbCoupsJoues = document.getElementById('nb_coups_joues')
var spanNbCoupsMax = document.getElementById('nb_coups_max')
var spanMessage = document.getElementById('message_jeu')
var inputValeurSaisie = document.getElementById('valeur_saisie')
var zoneValeurSaisie = document.getElementById('zone_saisie')
var btnSubmit = document.getElementById('btn_submit')
var ulListeValeursSaisies = document.getElementById('liste_valeurs_saisies')
var btn_rejouer = document.getElementById('btn_rejouer')

// Définition des variables nécessaires au fonctionnement
const min = 0;
const max = 20;
var valeurCible = null; // Définie dans la fonction d'initialisation
var nbCoupsJoues = 0;
var nbCoupsMax = 10; // Mis en var si plus tard volonté de rendre cette valeur paramétrable via un input avant de lancer la partie..
var arrayValeursSaisies = []
var partieGagnee = false  

// Déroulement du jeu
initialisationPartie()

// Détection de la saisie dans l'input ( l'event 'input' se lance à chaque modification de l'input)
inputValeurSaisie.addEventListener('input', function() {
    if( this.value ){ // this correspond à l'élement sur lequel l'eventListener s'effectue, ici le inputValeurSaisie
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
})

// Détecter la valeur saisie au clique sur le btn_submit ou quand la touche entrée est préssée, si le btn n'est pas disable
btnSubmit.addEventListener('click', detectValeurSaisie )
inputValeurSaisie.addEventListener('keydown', function(event) {
    if( !btnSubmit.disabled ){
        if( event.key == 'Enter' ){
            detectValeurSaisie();
        }
    }
})

// Relance la partie au click sur le btn_rejouer
btn_rejouer.addEventListener('click', function() {
    initialisationPartie()
})

function initialisationPartie(){ // Utilisez aussi pour redémarrer la partie
    valeurCible = Math.floor( Math.random() * (max - min + 1)) + min;
    nbCoupsJoues = 0;
    arrayValeursSaisies = [];
    partieGagnee = false;

    // Afficher les valeurs :
    spanNbCoupsJoues.textContent = nbCoupsJoues;
    spanNbCoupsMax.textContent = nbCoupsMax;

    // Refresh de la liste des valeurs saisies :
    ulListeValeursSaisies.innerHTML = '';

    // Remise en place de la zone saisie et cacher le btn_rejouer
    btn_rejouer.classList.remove('visible');
    zoneValeurSaisie.classList.remove('cachee');

    // Donne le focus sur la zone de saisie : 
    inputValeurSaisie.value = '';
    spanMessage.textContent = 'Nouvelle partie'
    inputValeurSaisie.focus()
}


function detectValeurSaisie(){
    let valeurSaisie = parseInt(inputValeurSaisie.value); // Transforme la chaîne de caractère en valeur numérique entière
    // valeurSaisie devient false si la value est vide ou si ça n'est pas un
    if( valeurSaisie ){ 
        if( valeurSaisie >= min && valeurSaisie <= max ){
            if( arrayValeursSaisies.indexOf(valeurSaisie) != -1 ){
                // La valeur cible est déjà présente dans le tableau 
                clearInputAndShowMessage("Vous avez déjà saisie cette valeur");
            } else {
                arrayValeursSaisies.push(valeurSaisie);
                // Ajoute un li a la liste des valeurs saisies
                let newLi = document.createElement('li');
                newLi.textContent = valeurSaisie;
                ulListeValeursSaisies.appendChild(newLi);

                // Met à jour le nombre de coups joués
                nbCoupsJoues++ 
                spanNbCoupsJoues.textContent = nbCoupsJoues;

                if( valeurSaisie < valeurCible ){
                    clearInputAndShowMessage("C'est plus");
                } else if( valeurSaisie > valeurCible ){
                    clearInputAndShowMessage("C'est moins");
                } else {
                    partieGagnee = true;
                }
                

                if( partieGagnee ){
                    spanMessage.textContent = "Vous avez gagné en " + nbCoupsJoues + ' coups.';
                    btn_rejouer.classList.add('visible');
                    zoneValeurSaisie.classList.add('cachee');
                } else {
                    if( nbCoupsJoues == nbCoupsMax ){
                        spanMessage.textContent = "Vous avez perdu"
                        zoneValeurSaisie.classList.add('cachee');
                        btn_rejouer.classList.add('visible');
                    } else if( nbCoupsJoues >= (nbCoupsMax - 2) ){
                        spanNbCoupsJoues.style.color = 'red'
                        spanNbCoupsMax.style.color = 'red'
                    } else if ( nbCoupsJoues >= (nbCoupsMax - 5) ){
                        spanNbCoupsJoues.style.color = 'orange'
                        spanNbCoupsJoues.style.fontWeight = 'bold'
                        spanNbCoupsMax.style.color = 'orange'
                        spanNbCoupsMax.style.fontWeight = 'bold'
                    }
                } 
            }
             
        } else {
            clearInputAndShowMessage('La valeur saisie doit être entre ' + min + ' et ' + max)
        }
        // ...
    } else {
        clearInputAndShowMessage('La valeur saisie doit être un nombre')
    }
}

function clearInputAndShowMessage(message){
    spanMessage.textContent = message 
    inputValeurSaisie.value = ''
    inputValeurSaisie.focus()
}

/* Algorithme
    1. Récupérer la valeur saisie 
    1. Vérifier que la valeur est bien un nombre 
        - Si oui 
            - Vérifier qu'il est bien entre min et max
                - Si oui 

                    1. Vérifier si la valeur a déjà été tentée
                    - Si oui : 
                        écrire a l'utilisateur
                    - Si non
                        1. Afficher la valeur saisie dans la liste liste_valeurs_saisies 
                        1. Incrémenter le nombre de coups joués. 
        
                        1. Comparer cette valeur à la valeur cible. 

                            1. Si la valeur est inférieur à la valeur cible 
                                - écrire "c'est plus"
                            1. Si la valeur est supérieur à la valeur cible 
                                - écrire "c'est moins"
                            1. Si la valeur est égale à la valeur cible 
                                - écrire "c'est gagné"
                                - mettre fin à la partie = cacher la zone de saisie
                        
                        1. Si la partie n'est pas gagnée et que le nombre de coups max est atteint
                            - écrire "c'est perdu"
                            - mettre fin à la partie = cacher la zone de saisie

                - Si non 
                    écrire : La valeur attendu doit être entre min et max
            ... 
        - Si non 
            écrire : La valeur attendu doit être un nombre    

*/