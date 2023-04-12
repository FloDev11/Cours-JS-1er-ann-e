const motsPossibles = [
    'digital',
    'informatique',
    'javascript',
    'école'
];
var motATrouver = null
var lettresDejaSaisies = []
var compteurCoupsRates = 0
// Pour définir quand la partie est gagnée
var partieGagnee = false
var lettresRestantsATrouver = null 

// éléments à manipuler pour notre jeu
var div_mot_a_trouver = document.getElementById('mot_a_trouver')
var ul_lettres_testees = document.getElementById('lettres_testees')
var div_recap_lettres_testees = document.getElementById('recap_lettres_testees')
var span_message_utilisateur = document.getElementById('message_utilisateur')
var image_pendu = document.getElementById('image_du_pendu')
var zone_saisie = document.getElementById('zone_saisie')
var input_lettre_saisie = document.getElementById('lettre_saisie')
var btn_valid = document.getElementById('btn_valid')
var btn_reset = document.getElementById('btn_reset')

initializePartie()

input_lettre_saisie.addEventListener('keydown', function(event) {
    if( event.code == 'Enter' ){
        handleNewLettre()
    }
})

btn_valid.addEventListener('click', handleNewLettre)

btn_reset.addEventListener('click', initializePartie)

function initializePartie(){

    // Cherche le mot à trouver
        let max = motsPossibles.length - 1 
        let min = 0
        let indiceDuMotATrouver = Math.floor(Math.random() * (max - min + 1)) + min;
        motATrouver = motsPossibles[indiceDuMotATrouver]
        lettresRestantsATrouver = motATrouver.length
    //

    // Reset quand recommencé
        span_message_utilisateur.classList.add('hidden')
        span_message_utilisateur.textContent = ''

        lettresDejaSaisies = []
        compteurCoupsRates = 0;

        image_pendu.src = './_ressources/1.png'

        div_mot_a_trouver.innerHTML = ''
        zone_saisie.style.display = 'block'
        ul_lettres_testees.innerHTML = ''
        div_recap_lettres_testees.classList.add('hidden')
        btn_reset.classList.add('hidden')
    //

    // 
    for( let i = 0; i <= motATrouver.length - 1; i++ ){
        /*
            Ajouter un span avec la class "lettre-a-trouver" pour chacune des lettres du motATrouver 
                dans la div mot_a_trouver     
        */
        let newSpan = document.createElement('span')
        newSpan.classList.add('lettre-a-trouver')
        // Met un id contenant l'index de la lettre pour la retrouver plus facilement dans le handleNewLettre
        newSpan.id = 'lettre__' + i
        div_mot_a_trouver.appendChild(newSpan)
    }

    clearAndFocusInputSaisie()

}

function clearAndFocusInputSaisie(){
    input_lettre_saisie.value = ''
    input_lettre_saisie.focus()
}


function handleNewLettre(){
    let lettreSaisie = input_lettre_saisie.value
    if( lettreSaisie ){ // Detect si une valeur a bien été saisie
        lettreSaisie = lettreSaisie.toUpperCase() // La met en majuscule pour faciliter les comparaisons

        // Cache le message utilisateur au cas ou il été visible
        span_message_utilisateur.classList.add('hidden')

        // Vérifie si la lettre a déjà été saisie
        if( lettresDejaSaisies.indexOf(lettreSaisie) != -1 ){
            // Déjà présent 
            // Envoyer un message à l'utilisateur
            span_message_utilisateur.textContent = 'Vous avez déjà testé cette lettre.'
            span_message_utilisateur.classList.remove('hidden')
        } else {
            // L'ajouter au tableau,
            lettresDejaSaisies.push(lettreSaisie)
            // L'afficher dans l'ul lettres_testees
            let newLi = document.createElement('li')
            newLi.textContent = lettreSaisie.toUpperCase()
            ul_lettres_testees.appendChild(newLi)
    
            div_recap_lettres_testees.classList.remove('hidden')
            span_message_utilisateur.classList.add('hidden')
    
            // Vérifier si la lettre est présente dans le motATrouver
                // Si oui : Afficher la lettre :   
                    // -> Remplir le span de la bonne position + ajouter la class trouvee
                // Si non : Modifier l'image 
            let lettreTrouvee = false 
            for( let i = 0; i <= motATrouver.length - 1; i++ ){
                if( lettreSaisie == motATrouver[i].toUpperCase() ){
                    lettreTrouvee = true 
                    lettresRestantsATrouver--
                    let span_lettre = document.getElementById('lettre__' + i)
                    span_lettre.textContent = lettreSaisie
                    span_lettre.classList.add('trouvee')
                }
            }
            if( !lettreTrouvee ){
                compteurCoupsRates++
                image_pendu.src = './_ressources/' + compteurCoupsRates + '.png'
                if( compteurCoupsRates == 8 ){
                    span_message_utilisateur.textContent = 'Vous avez perdu.'
                    span_message_utilisateur.classList.remove('hidden')
                    hideZoneSaisie()
                }
            } else {
                if( lettresRestantsATrouver == 0 ){
                    span_message_utilisateur.textContent = "C'est gagné."
                    span_message_utilisateur.classList.remove('hidden')
                    hideZoneSaisie()
                }
            }
        }
    
        clearAndFocusInputSaisie()
    
        // console.log('handleNewLettre', input_lettre_saisie.value);
        // Todo : au click sur bouton, ou quand la touche entrée est tapée quand l'utilisateur est dans l'input,
        /* - detect si la lettre saisie a déjà été saisie,
                Si déjà saisie : afficher un message à l'utilisateur        
                Si pas le cas: 
                    vérifier si la lettre est présente à un ou plusieurs endroit du mot,
                        Si présent: Afficher les lettres 
                        Si non, mettre à jour l'image
                        ... + detect si partie terminée, 
        */
    } else {
        span_message_utilisateur.textContent = 'Merci de saisir une lettre.'
        span_message_utilisateur.classList.remove('hidden')
    }
}

function hideZoneSaisie(){
    zone_saisie.style.display = 'none'
    // zone_saisie.classList.add('hidden')
    btn_reset.classList.remove('hidden')
}
