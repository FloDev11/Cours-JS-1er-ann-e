// Exercice 1

console.log('Fichier main.js en place.');

let message = document.getElementById('message_a_remplacer')

message.innerText = 'Texte remplacé via main.js'

// Exercice 2

let compteur = 0;   

let afficheCompteur = document.getElementById('compteur')
let btnCompteur = document.getElementById('ajout_compteur')

afficheCompteur.textContent = compteur

btnCompteur.addEventListener('click', function() {
    compteur++

    if (compteur<= 10) {
        afficheCompteur.textContent = compteur
    } else if (compteur > 10) {
        compteur = 1;
        afficheCompteur.textContent = compteur
    }   
})


// Exercice 3

let sectionJourNuit = document.getElementById('exercice_jour_nuit')
let btnJourNuit = document.getElementById('light_dark')


btnJourNuit.addEventListener('click',function () {

    if (sectionJourNuit.classList.contains('jour')) {
        sectionJourNuit.classList.remove('jour')
        sectionJourNuit.classList.add('nuit')
        btnJourNuit.innerHTML = 'Mode jour'
    } else if (sectionJourNuit.classList.contains('nuit')) {
        sectionJourNuit.classList.remove('nuit')
        sectionJourNuit.classList.add('jour')
        btnJourNuit.innerHTML = 'Mode nuit'
    }

})


// Exercice actus 2

let formModal = document.getElementById('form_modal')
let overlayForm = document.getElementById('overlay_form')
let btnOpenForm = document.getElementById('ajout_article')


btnOpenForm.addEventListener('click', function() {
    overlayForm.classList.add('open')
    formModal.classList.add('open')
})
overlayForm.addEventListener('click', function() {
    overlayForm.classList.remove('open')
    formModal.classList.remove('open')
})
