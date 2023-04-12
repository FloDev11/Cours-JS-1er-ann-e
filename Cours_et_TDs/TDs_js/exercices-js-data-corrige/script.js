/*
    Exercice 1 : 
        1) Afficher la liste des multiples de 10 jusqu'à 100 dans la console 
        2) Afficher ces multiples dans l'ul qui a un id "liste_multiples_10"
        3) Afficher ces multiples sous la forme " x * 10 = résultat "
*/
let ulListeMultiple10 = document.getElementById('liste_multiples_10')
for( let i = 0 ; i <= 10 ; i++ ){
    let resultat = i * 10;
    console.log(resultat);
    let newLi = document.createElement('li')
    newLi.textContent = i + ' * 10 = ' + resultat 
    // Si je voulais ajouter du style, il faudrait utiliser innerHTML pour que mes balises soient interprétées
    // newLi.innerHTML = '<span style="color:red"> ' + resultat + '</span>' 
    ulListeMultiple10.appendChild(newLi)
}


/*
    Exercice 2 : 
        Mettre en page les informations de l'objet Javascript ci-dessous sous la forme 
        _nom _prenom possède un véhicule _vehicule immatriculé _immatriculation

        dans le <p> qui a un id "infos_conducteur"
*/
let infosConducteur = {
    nom: 'Doe',
    prenom: 'Jane',
    vehicule: 'Citroên C4',
    immatriculation: 'AB 123 CD'
}

// Indice : 
console.log('prenom du conducteur : ', infosConducteur.prenom);
let pInfosConducteur = document.getElementById('infos_conducteur') 
pInfosConducteur.textContent = infosConducteur.nom + ' ' + infosConducteur.prenom + ' possède un véhicule ' + infosConducteur.vehicule + ' immatriculé ' + infosConducteur.immatriculation 
// pInfosConducteur.innerHTML = '<span style="color:red">' + infosConducteur.nom + ' ' + infosConducteur.prenom + ' possède un véhicule ' + infosConducteur.vehicule + ' immatriculé ' + infosConducteur.immatriculation + '</span>'


/* Exercice 3
    A partir du tableau de notes ci-dessous, afficher dans les spans correspondant :
        - La moyenne,
        - Le nombre de notes,
        - La meilleure note,
        - La moins bonne note

    Moyenne = somme des notes / nombre de notes
*/
let notes = [ 12, 15, 16, 9, 14 ]
let nbNotes = notes.length
let sommeDesNotes = 0
let meilleureNote = null;
let moinsBonneNote = null;

let spanNbNotes = document.getElementById('nb_notes')
let spanMoyenneNotes = document.getElementById('moyenne_notes')
let spanMeilleureNote = document.getElementById('meilleure_note')
let spanMoinsBonneNote = document.getElementById('moins_bonne_note')

notes.forEach( note => {
    // sommeDesNotes = sommeDesNotes + note
    sommeDesNotes += note

    if( !meilleureNote ){ // Premier tour, la meilleure note est inconnue.
        // Je l'initialise avec ma valeur actuelle
        meilleureNote = note 
    } else {
        // A partir du deuxième tour, ma meilleure note est attribuée, je compare la note actuelle avec
        if( note > meilleureNote ){
            // Si la note actuelle est supérieure à la meilleureNote préalablement défini
            // Je met à jour la meilleure note 
            meilleureNote = note 
        }
    }

    // idem
    if( !moinsBonneNote ){
        moinsBonneNote = note
    } else {
        if( note < moinsBonneNote ){
            moinsBonneNote = note 
        }
    }
})
spanMoyenneNotes.textContent = sommeDesNotes / nbNotes
spanNbNotes.textContent = nbNotes
spanMeilleureNote.textContent = meilleureNote
spanMoinsBonneNote.textContent = moinsBonneNote


/*
    Exercice 4 : 
        1) A partir du tableau de données ci dessous afficher les informations de chaque utilisateur dans la liste_conducteurs
        2) Quand exercice 5 ok, faire en sorte de retrouver la listeInfosConducteurs depuis le localStorage et d'afficher la liste des infos enregistrées
*/

// Si je veux récupérer la listeInfosConducteurs depuis mon localStorage : 
// 1. Je vérifie qu'elle existe : 
let listeInfosConducteurs = localStorage.getItem('listeInfosConducteurs')
if( listeInfosConducteurs ){
    listeInfosConducteurs = JSON.parse(listeInfosConducteurs)
} else {
    listeInfosConducteurs = [
        {
            nom: 'Doe',
            prenom: 'Jane',
            vehicule: 'Peugeot 308',
            immatriculation: 'AB 123 CD'
        },
        {
            nom: 'Doe',
            prenom: 'John',
            vehicule: 'Renault Mégane',
            immatriculation: 'EF 456 GH'
        },
        {
            nom: 'Louveau',
            prenom: 'Elliot',
            vehicule: 'Citroën C4',
            immatriculation: 'IJ 789 KL'
        }
    ]
} 
let ulListeConducteurs = document.getElementById('liste_conducteurs')
afficheInfosConducteurs()

function afficheInfosConducteurs(){
    ulListeConducteurs.innerHTML = '' // Pour refresh correctement pour l'exercice 5. Tester d'enlever pour comprendre ce qui se passe autrement.
    
    listeInfosConducteurs.forEach( infosConducteur => {
        let newLi = document.createElement('li')
        newLi.textContent = infosConducteur.nom + ' ' + infosConducteur.prenom + ' possède un véhicule ' + infosConducteur.vehicule + ' immatriculé ' + infosConducteur.immatriculation 
        ulListeConducteurs.appendChild(newLi)
    })
}


/*
    Exercice 5 
        - Récupérer les valeurs du formulaire pour ajouter les infos du conducteur à la liste de l'exercice 4
        - Une fois ajouté, vider les champs du formulaire et redonner le focus sur le nom

        // Quand ok
        - enregistrer les infos dans le localStorage à chaque ajout.
        // https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage 
*/

let formConducteur = document.getElementById('form_conducteur')
let input_nomConducteur = document.getElementById('nom_conducteur')
let input_prenomConducteur = document.getElementById('prenom_conducteur')
let input_vehiculeConducteur = document.getElementById('vehicule_conducteur')
let input_immatriculationConducteur = document.getElementById('immatriculation_conducteur')
let btnSubmitConducteur = document.getElementById('btn_submit_conducteur')

btnSubmitConducteur.addEventListener('click', function(event) {
    event.preventDefault() // Sans ça la page ce refresh au clic sur le bouton valid
    handleNewConducteur()
})

function handleNewConducteur(){
    let newConducteurInfos = {}
    // todo : 
    // 1. Définir les propriété nom, prenom, vehicule et immatriculation de l'objet "newConducteurInfos" en fonction des valeurs saisies dans le formulaire
    newConducteurInfos.nom = input_nomConducteur.value 
    newConducteurInfos.prenom = input_prenomConducteur.value 
    newConducteurInfos.vehicule = input_vehiculeConducteur.value 
    newConducteurInfos.immatriculation = input_immatriculationConducteur.value 

    // 2. Ajouter cet objet à la listeInfosConducteurs de l'exercice 4
    listeInfosConducteurs.push(newConducteurInfos)

    // 3. Mettre à jour l'affichage de l'exercice 4
    afficheInfosConducteurs()
    input_nomConducteur.focus()

    // 4. clear le formulaire
    formConducteur.reset()

    // Quand ok, je vous montrerai comment enregistrer la liste dans le localStorage
    /* Pour les curieux :
        https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage

        ⚠️ Le localStorage stock les infos sous forme de chaîne de caractères. 
        Ici nous avons besoin de stocker un tableau. 
            - Nous allons donc utiliser le format JSON pour convertir notre tableau en chaine de caractères via la fonction JSON.stringify avant de l'enregistrer dans le localStorage 
            - Lors de la récupération des données, nous allons utiliser la fonction JSON.parse pour convertir la chaîne de caractères stockée en tableau.
        https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON
        + https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
        + https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    */
    // 5. Stocker le tableaux listeInfosConducteurs dans le localStorage
    localStorage.setItem('listeInfosConducteurs', JSON.stringify(listeInfosConducteurs))
}

// Pour refresh si besoin le localStorage
let btnClearLocalStorage = document.getElementById('clear_localStorage')
btnClearLocalStorage.addEventListener('click', function() {
    localStorage.removeItem('listeInfosConducteurs')
    // Relance la page pour rafraichir l'affichage
    window.location.reload()
})