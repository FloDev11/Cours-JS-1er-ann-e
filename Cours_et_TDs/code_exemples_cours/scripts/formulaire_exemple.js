var formulaire_exemple = document.getElementById('form_exemple');
var input_nom = document.getElementById('nom');
var input_prenom = document.getElementById('prenom');
var ul_liste_users = document.getElementById('liste_users'); // pour afficher les infos saisies

var liste_users = [];
if( localStorage.getItem('liste_users') ){
    liste_users = JSON.parse(localStorage.getItem('liste_users'));
    liste_users.forEach( userInfos => {
        createNewItem(userInfos)
    })
}

formulaire_exemple.addEventListener('submit', function(event) {
    event.preventDefault() // Annule le rafraichissement par défaut de la page

    // Création d'une variable objet pour stocker les informations saisies par le visiteur
    let infosSaisies = {
        nom: input_nom.value,
        prenom: input_nom.value
    }
    liste_users.push(infosSaisies)

    // Puis envoie de ces infos dans la fonction createNewItem à défnir
    createNewItem(infosSaisies)

    // Une fois créé, vide le formulaire et redonne le focus sur l'input nom
    formulaire_exemple.reset();
    input_nom.focus()

    localStorage.setItem('liste_users', JSON.stringify(liste_users))
})


function createNewItem(infosUser){
    let newLi = document.createElement('li')
    newLi.innerHTML = `nom : ${infosUser.nom}, prenom : ${infosUser.prenom}`
    ul_liste_users.appendChild(newLi)
}



