const motsPossibles = [
    'digital',
    'informatique',
    'javascript'
];
let input_lettre_saisie = document.getElementById('lettre_saisie')
let div_mot_a_trouver = document.getElementById('mot_a_trouver')
let btn_valid = document.getElementById('btn_valid')
let span_message_utilisateur = document.getElementById('message_utilisateur')
let motATrouver = null
let lettres_tester = document.getElementById('lettres_testees')
let recap_lettres_testees = document.getElementById('recap_lettres_testees')


initializePartie()
input_lettre_saisie.focus()

btn_valid.addEventListener('click',handleNewLettre)

// ...
// Peaufinage : Faire en sorte de cacher le bouton par défaut, et l'afficher si l'input est rempli uniquement;

function initializePartie(){
    console.log('initializePartie todo');
    /*
        random select mot parmi les mots possible,

        préparation zone de jeu
    */

    let max = motsPossibles.length - 1 
    let min = 0
    let indiceDuMotATrouver = Math.floor(Math.random() * (max - min + 1)) + min;

    motATrouver = motsPossibles[indiceDuMotATrouver]

    for (let i = 0; i < motATrouver.length; i++) {
    //    let lettreCourante = motsPossibles[i]
       
    //    Créer un span
       let newSpan = document.createElement('span')
    //    attribuer la classe "lettre-a-trouver"
       newSpan.classList.add('lettre-a-trouver')
    //    L'afficher dans la div "mot_a_trouver"
       div_mot_a_trouver.appendChild(newSpan)
        
    }


}

function handleNewLettre(){
    // Todo : au click sur bouton, ou quand la touche entrée est tapée quand l'utilisateur est dans l'input,

    // console.log(input_lettre_saisie.value)

    let lettreSaisie = input_lettre_saisie.value

    if(lettreSaisie){
        // La lettre a bien été saisie
        
        console.log('motATrouver',motATrouver)

        span_message_utilisateur.classList.add('hidden')
        let newLi = document.createElement('li')
        newLi.textContent = lettreSaisie
        lettres_tester.appendChild(newLi)
        recap_lettres_testees.classList.remove('hidden')

        console.log(lettres_tester)

        // for (let i = 0; i < array.length; i++) {
            
            
        // }

        // if (condition) {
            
        // }


    } else {
        //  pas de lettre saisie, envoie de message à l'utilisateur
        //  = écrire dans le span qui à l'id "message_utilisateur"

        span_message_utilisateur.textContent = 'Saisir une lettre avant de valider'
        span_message_utilisateur.classList.remove('hidden')
    }





    

    



    /* - detect si la lettre saisie a déjà été saisie,
            Si déjà saisie : afficher un message à l'utilisateur        
            Si pas le cas: 
                vérifier si la lettre est présente à un ou plusieurs endroit du mot,
                    Si présent: Afficher les lettres 
                    Si non, mettre à jour l'image
                    ... + detect si partie terminée, 
    */
}