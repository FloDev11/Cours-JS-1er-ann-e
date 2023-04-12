let texte_saisie = document.getElementById('longueur_text')
let btn_valid = document.getElementById('btn_valid')
let taille_text = null
let message_utilisateur = document.getElementById('message_utilisateur')

btn_valid.addEventListener('click', DetectClick)

function DetectClick(){
    
    taille_text = texte_saisie.textLength
    message_utilisateur.textContent = 'La longueur du texte est de '+ taille_text +' caractères'

    DetectLongueur(taille_text)
}

function DetectLongueur(longueurTexte) {
    if (longueurTexte > 5) {
        message_utilisateur.style.color = 'red'
    }
}