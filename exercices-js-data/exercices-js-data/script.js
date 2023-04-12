/*
    Exercice 1 : 
        1) Afficher la liste des multiples de 10 jusqu'à 100 dans la console 
        2) Afficher ces multiples dans l'ul qui a un id "liste_multiples_10"
        3) Afficher ces multiples sous la forme " x * 10 = résultat "
*/
let ulListeMultiple10 = document.getElementById('liste_multiples_10')
// Votre code ici
for( let i = 0; i <= 10; i++){
    console.log( i * 10);
    let resultat = i * 10
    let newLi = document.createElement('li')
    newLi.textContent = i + ' * 10 = ' + resultat
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
// Votre code ici
pInfosConducteur.textContent = infosConducteur.nom +' '+infosConducteur.prenom + ' possède un véhicule ' + infosConducteur.vehicule + ' immatriculé ' + infosConducteur.immatriculation ;


/* Exercice 3
    A partir du tableau de notes ci-dessous, afficher dans les spans correspondant :
        - La moyenne,
        - Le nombre de notes,
        - La meilleure note,
        - La moins bonne note

    Moyenne = somme des notes / nombre de notes
*/
let notes = [ 12, 15, 9, 14 ]
let nbNotes = notes.length 
let sommeDesNotes = 0
let meilleureNote = null;
let moinsBonneNote = null;

let spanNbNotes = document.getElementById('nb_notes')
let spanMoyenneNotes = document.getElementById('moyenne_notes')
let spanMeilleureNote = document.getElementById('meilleure_note')
let spanMoinsBonneNote = document.getElementById('moins_bonne_note')
// Votre code ici
spanNbNotes.textContent = nbNotes ;



/*
    Exercice 4 : 
        1) A partir du tableau de données ci dessous afficher les informations de chaque utilisateur dans la liste_conducteurs
        2) Quand exercice 5 ok, faire en sorte de retrouver la listeInfosConducteurs depuis le localStorage et d'afficher la liste des infos enregistrées
*/
let listeInfosConducteurs = localStorage.getItem('listeConducteurs')
if(listeInfosConducteurs){
    console.log('list avant parse', listeInfosConducteurs);
    listeInfosConducteurs = JSON.parse(listeInfosConducteurs);
    console.log(listeInfosConducteurs);
} else {
    let listeInfosConducteurs = [
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
        // Votre code ici
        let newLi = document.createElement('li')
        newLi.textContent = infosConducteur.nom +' '+infosConducteur.prenom + ' possède un véhicule ' + infosConducteur.vehicule + ' immatriculé ' + infosConducteur.immatriculation ;

        ulListeConducteurs.appendChild(newLi);
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

    newConducteurInfos.nom = input_nomConducteur.value ;
    newConducteurInfos.prenom = input_prenomConducteur.value ;
    newConducteurInfos.vehicule = input_vehiculeConducteur.value ;
    newConducteurInfos.immatriculation = input_immatriculationConducteur.value ;

    // 2. Ajouter cet objet à la listeInfosConducteurs de l'exercice 4

    listeInfosConducteurs.push(newConducteurInfos);
    console.log(listeInfosConducteurs);

    // 3. Mettre à jour l'affichage de l'exercice 4
    afficheInfosConducteurs()


    // 4. clear le formulaire
    formConducteur.reset();
    input_nomConducteur.focus()


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
   localStorage.setItem('listeConducteurs', JSON.stringify(listeInfosConducteurs))
}

let btnClearLocalStorage = document.getElementById('clear_localStorage')
btnClearLocalStorage.addEventListener('click', function() {
    localStorage.removeItem('listeConducteurs');
})