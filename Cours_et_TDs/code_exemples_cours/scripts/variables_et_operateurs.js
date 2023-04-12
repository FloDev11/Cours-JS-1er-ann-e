/*
    Dans ce code vous allez voir des commentaires avec "region" et "endregion"
        => installer le module "region folding for VS Code" vous permettra de "replier" les zone entre regions pour faciliter la lecture.

    J'utilise le mot clé var pour définir mes variables ici, car je vais potentiellement nommer des variables dans d'autres fichiers de la même manière. Si j'utilisait le mot clé let, cela créerait une erreur car let ne peut pas être redéfini (cf cours)
        => De manière générale, utilisez le mot clé var pour des variables que vous déclarer en dehors de fonction, et let pour les variables que vous déclarez dans des fonctions.
*/
// Variables classiques :
var variable_String = "String = chaîne de caractères. Définie entre simple ou double guillemets";
var variable_Number = 33;
var variable_Number_2 = -31.27;
var variable_Boolean = true;
var variable_Boolean_2 = false;
var variable_Boolean_3 = variable_Number < 100; // la condition sera directement vérifier et traduite par true ou false 
var variable_Boolean_4 = variable_String.length > 15; // .length sur une chaîne de caractères indique le nombre de caractères

//#region Les opérations de bases

    // Sur des variables nombres :
    var varDivise = variable_Number / 12 
    var varDivisionEntiere = Math.floor(variable_Number / 12) // math floor, retire les chiffres après la virgule
    var varSoustrait = variable_Number - 15
    var varAddition = variable_Number + 15
    var varMultiple = variable_Number * 3 
    var varExposant = variable_Number ** 2
    var varModulo = variable_Number % 2 // Trouve le reste de la division entière

    console.log('variables', {
        varDivise : varDivise, 
        varDivisionEntiere: varDivisionEntiere,
        varSoustrait : varSoustrait,
        varAddition : varAddition,
        varMultiple : varMultiple, 
        varExposant : varExposant,
        varModulo : varModulo,
    });

    
    // Sur les variables textes :
    var debutText = 'Début du texte';
    var finDuText = 'Fin du texte';
    var concatenee = debutText + ' texte au milieu ' + finDuText;
    var autreConcat = `Avec les backtiks il est possible d'afficher ${debutText} directement grâce au dollar accolades. 
        Et même d'écrire sur plusieurs lignes sans problème.
        => sur window : Alt Gr + 7 puis espace (ou deux fois 7)
        => sur mac : la touche est à gauche de la touche entrée 
        ${finDuText}
    `
    console.log('concatenee ', concatenee);
    console.log('autreConcat : ', autreConcat);
//#endregion

//#region Les objets
    var exemple_objet = {
        nom: 'LOUVEAU',
        prenom: 'Elliot',
        age: 32,
        'autre_propriete': 'Possible de nommer les propriétés entre guillemet aussi pour info',
        'propriete possible': 'il est même possible lorsque vous utilisez des guillemets de mettre un espace',
        'propriété possible': 'même des accents si besoin dans le nom des propriétés.',
        'mais pas recommandé': "Mais à n'utiliser qu'en cas de réelle nécessité. Sources d'erreurs",
        animaux: {
            chats: 2,
            chiens: 0
        } // Une propriété d'un objet peut avoir pour valeur un autre objet
    };
    console.log('valeur de la propriété nom de exemple_objet : ', exemple_objet.nom);
    // On accède aux propriétés d'un objet en utilisant le nom de sa variable point le nom de la propriété.
    console.log("valeur d'une propriété défini avec guillemet : ", exemple_objet['propriété possible']);

    // Fonctions pratiques :
        // Ajouter une propriété :
            exemple_objet.newProp = 'Nouvelle propriété'

        // Lister les propriétés dans un tableau
            console.log('Liste des propriétés de exemple_objet : ', Object.keys(exemple_objet));
        
        // Boucler sur les clés / valeurs d'un tableau
            for( const [key, value] of Object.entries(exemple_objet) ){
                console.log(`key value : ${key}: ${value}`);
            }
    //
//#endregion


//#region les tableaux
    var tableau_1 = [ 14, 20, 43, 67, -12.4, 32 ];
    var tableau_2 = [ 21, 'text', 'un tableau peut contenir tout type de données à la fois', true ];
    var tableau_3 = [ "il peut même contenir d'autre tableau", [ 34, 45, "qui contienne d'autres tableau...", [ 9, 34 ] ] ];
    var tableau_4 = [ { nom: 'LOUVEAU', prenom: 'Elliot' }, { nom: 'MELOCCO', prenom: 'Vincent' } ]
    // Un tableau peut aussi contenir des objets

    var nombreItemsPremierNiveau = tableau_3.length; 
    // .length sur un tableau permet de connaitre le nombre d'éléments de premier niveau.
    // si le tableau contient d'autres tableaux, les items des sous tableau ne seront pas comptabilisé.
    console.log('Première item du tableau_1', tableau_1[0]);
    console.log('Deuxième item du tableau_1', tableau_1[1]);
    console.log('Dernier item du tableau_1', tableau_1[tableau_1.length - 1]);
    // Les items d'un tableau sont accessibles via leur "index" qui commence à 0.


    // Fonctions pratiques : 
        tableau_1.push(99) // Ajouter un élément : 
        var indexExemple = tableau_1.indexOf(67); // retrouver l'index d'un élément ( retourne -1 si pas trouvé )
        if( indexExemple != -1 ){ // Vérifie si l'élément est présent dans le tableau
            tableau_1.splice(indexExemple, 1) // Supprime l'élément via son index.
        } 

//#endregion

//#region Les elements du DOM :
var ul_liste_basique = document.getElementById('liste_basique');
var h2sInPage = document.querySelectorAll('h2');

console.log('ul_liste_basique', ul_liste_basique);
console.log('élements enfant de ul_liste_basique', ul_liste_basique.children);
console.log('h2sInPage', h2sInPage);
console.log('Premier H2 de la page', h2sInPage[0]);

//#endregion