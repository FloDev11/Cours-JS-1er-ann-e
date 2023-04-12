var itemsListe = document.querySelectorAll('.demande-container')

for( let i = 0; i < itemsListe.length ; i++ ){
    let demandeContainer = itemsListe[i]

    prepareAnimationAccordeon(demandeContainer)
}

function prepareAnimationAccordeon(itemDemande){
    let headerDemande = null;
    let detailDemande = null;

    for( let j = 0; j < itemDemande.children.length ; j++ ){
        let child = itemDemande.children[j]

        if( child.classList.contains('header-demande') ){
            headerDemande = child
        } else if( child.classList.contains('details-demande') ){
            detailDemande = child
        }
    }

    headerDemande.addEventListener('click', function() {
        let hauteurDetail = detailDemande.scrollHeight 

        detailDemande.classList.toggle('visible')
        if( detailDemande.classList.contains('visible') ){
            detailDemande.style.height = hauteurDetail + 'px'
        } else {
            detailDemande.style.height = 0
        }
    })
}

//#region Elements utiles
    var ul_liste_demandes = document.getElementById('liste_demandes')
//#endregion

//#region Logique Modal
var btn_open_modal_form = document.getElementById('btn_open_modal_form')
var overlay = document.getElementById('overlay')
var modal_form_adder = document.getElementById('modal_form_adder')
// var modal_form_update = document.getElementById('modal_form_adder')
// var modal_details = document.getElementById('modal_details')

btn_open_modal_form.addEventListener('click', openDialFormAdder)

overlay.addEventListener('click', closeModals)

function openDialFormAdder(){
    overlay.classList.add('open')
    modal_form_adder.classList.add('open')
}
function closeModals(){
    overlay.classList.remove('open')
    // Ferme toutes les modals potentiellement ouvertes
    modal_form_adder.classList.remove('open')
}

//#endregion logique dials


//#region form_adder
    var formulaire_adder = document.getElementById('form_adder')

    var input_adder_nom_entreprise = document.getElementById('adder_nom_entreprise')
    var input_adder_adresse_entreprise = document.getElementById('adder_adresse_entreprise')
    var input_adder_infos_complementaires_demande = document.getElementById('adder_infos_complementaires_demande')
    var input_adder_urlLogo = document.getElementById('adder_urlLogo')
    var input_adder_website = document.getElementById('adder_website')
    var input_adder_numtel = document.getElementById('adder_numtel')
    var input_adder_statut_demande = document.getElementById('adder_statut_demande') // Par défaut draf au adder


    // Gestion du formulaire
    formulaire_adder.addEventListener('submit', function(event){
        // Annule le comportement par défaut du submit ( raffraichissement la page de base )
        event.preventDefault()
        
        // Initialisation de l'objet nécessaire pour le fonctionnement de la function createNewEntreprise
        let infosDemande = {
            statut: input_adder_statut_demande.value,
            nomEntreprise: input_adder_nom_entreprise.value,

            urlLogo: input_adder_urlLogo.value ? input_adder_urlLogo.value : 'https://picsum.photos/202',
            // Ternaire = (trouver un lien explicatif)
            
            infosComp: input_adder_infos_complementaires_demande.value,
            coordonnees: {
                tel: input_adder_numtel.value,
                adresse: input_adder_adresse_entreprise.value,
                email_principal: '',
                site_internet: '',
            },
            
            reseaux_sociaux: {
                facebook: '',
                linkedin: '',
                twitter: ''
            },
            missionsProposees: [
                // Pour form updater aussi
            ]
        }
        console.log('infosDemande', infosDemande);

        // Puis création de la div (caché par défaut pour faire l'animation)
        let newDiv = create_itemListeDemandes(infosDemande)
                
        closeModals()
        formulaire_adder.reset()

        ul_liste_demandes.appendChild(newDiv)
        setTimeout(() => {
            newDiv.classList.add('visible')
        }, 200);
    })

//#endregion form_adder

// Mise en place d'index en paramètre pour retrouver facilement l'élément dans la liste_demandes;
// Attention quand delete à mettre à jour les ids et les eventListener... ou trick en remplaçant les infos par un 'deleted' dans le tableau pour garder la logique index.. à voir quand delete logique et backup sur localStorage.
function create_itemListeDemandes(demandeInfos){
    let newDiv = document.createElement('div')
    newDiv.classList.add('demande-container');

    switch( demandeInfos.statut ){ // Gestion design différent géré sur item-demande.css
        case 'draft':
            newDiv.classList.add('draft')
        break;

        case 'sended':
            newDiv.classList.add('envoye')
        break;
        
        case 'waiting':
            newDiv.classList.add('waiting')
        break;

        case 'refused':
            newDiv.classList.add('refused')
        break;
    }

    newDiv.innerHTML = `
        <div class="header-demande">
            <span class="statut-demande"></span>

            <div class="image-container">
                <img class="logo-entreprise" src="${demandeInfos.urlLogo}" alt="">
            </div>
            
            <div class="header-info-entreprise">
                
                <span class="nom-entreprise">
                    ${demandeInfos.nomEntreprise}
                </span>
                <span class="adresse-entreprise">
                    ${demandeInfos.coordonnees.adresse}
                </span>
                
            </div>

        </div>

        <div id="detail_demande" class="details-demande">
            <h2>
                Détails de la demande
            </h2>
            <span class="date-envoie">
            
            </span>

            <div class="coordonnees">
                <span class="tel-entreprise">
                    ${demandeInfos.coordonnees.tel}
                </span>

                <span class="email-entreprise">
                    ${demandeInfos.coordonnees.email_principal}
                </span>
            </div>

            <p class="notes-divers">
                ${demandeInfos.infosComp}
            </p>

        </div>
    `

    prepareAnimationAccordeon(newDiv)

    return newDiv
}
//#endregion



//#region form_updater
    // Todo 
//#endregion
