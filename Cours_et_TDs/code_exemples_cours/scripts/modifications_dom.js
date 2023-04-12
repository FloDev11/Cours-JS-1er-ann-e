//#region Modification de contenu : 
var ul_liste_basique = document.getElementById('liste_basique');
var premierLi = ul_liste_basique.children[0];
var secondLi = ul_liste_basique.children[1];
var troisiemeLi = ul_liste_basique.children[2];
premierLi.textContent = 'Contenu modifié via JS';
secondLi.innerHTML = '<b>Modifié aussi via JS</b>';
troisiemeLi.innerText = 'Contenu avec innerText '

var newLi = document.createElement('li')
newLi.textContent = 'li créé via JS'
ul_liste_basique.appendChild(newLi)

//#endregion

/*
    Menu drawer
*/
var div_overlay = document.getElementById('overlay');
var div_menu_drawer = document.getElementById('menu_drawer');
var btn_open_menu = document.getElementById('btn_open_menu');
var btn_close_menu = document.getElementById('btn_close_menu');

btn_open_menu.addEventListener('click', function(){
    div_overlay.classList.add('visible')
    div_menu_drawer.classList.add('open')
})
btn_close_menu.addEventListener('click', function() {
    div_overlay.classList.remove('visible')
    div_menu_drawer.classList.remove('open')
})
// Ajout d'un evenement au click sur l'overlay pour fermer le menu
div_overlay.addEventListener('click', function() {
    this.classList.remove('visible') // ici this réfère à la div_overlay
    div_menu_drawer.classList.remove('open')
})



// Accordeon :
document.querySelectorAll('.accordeon-item').forEach(accItem => {
    // Récupération de tous les éléments ayant la class accordeon-item et bouclage sur chacun d'entre eux 
    /*
        Objectif de l'animation : 
            Si le contenu est caché : 
                au click sur le header, définir une hauteur au content pour le rendre visible
            Si le contenu est visible :
                au click sur le header, définir la hauteur du content à 0 pour le cacher
    */

    // Récupération du header et du content dans deux variable en bouclant sur les enfants de accItem
    let header = null;
    let content = null;
    for( let i = 0; i < accItem.children.length ; i++ ){
        let child = accItem.children[i]
        if( child.classList.contains('accordeon-header') ){
            header = child
        } else if( child.classList.contains('accordeon-content') ){
            content = child
        }
    }

    // Puis ajout de l'eventListener sur le header
    header.addEventListener('click', function() {
        content.classList.toggle('open') 
        // toggle d'une class open pour faire fonctionner facilement le if suivant
        if( content.classList.contains('open') ){
            content.style.height = content.scrollHeight + 'px' 
            // scrollHeight donne la valeur sans unité, style.height à besoin de l'unité on rajoute 'px' 
        } else {
            content.style.height = 0
        }
    })
});


