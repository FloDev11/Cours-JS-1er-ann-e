//#region Elements utiles
    var ul_liste_demandes = document.getElementById('liste_demandes')
    var main_main = document.getElementById('main_main')
//#endregion



//#region seed de la liste
var liste_demandes = [
    {
        statut: 'draft',
        nomEntreprise: 'Entreprise de Com lambda',
        urlLogo: 'https://picsum.photos/200',
        infosComp: 'Entreprise en forte croissance, qui fais des campagnes de recrutement régulièrement. Surment une alternance voir un job possible si stage se passe bien.',
        coordonnees: {
            tel: '0607080910',
            adresse: '10 rue dune adresse, 49000 ANGERS',
            email_principal: '',
            site_internet: '',
        },
        reseaux_sociaux: {
            facebook: '',
            linkedin: '',
            twitter: ''
        },
        missionsProposees: [
            {   title: 'Refonte de site wordPress',
                description: 'Amélioration du responsive en travaillant les fichiers CSS; Changement du menu version mobile; Travail sur les images, typos, couleurs...'
            },
            {   title: 'Gestion de réseaux sociaux pour quelques clients',
                description: 'Création de posts (textes + visuels); réponses aux commentaires...'
            },
        ]
    },

    {
        statut: 'sended',
        nomEntreprise: 'Entreprise Locale',
        urlLogo: 'https://picsum.photos/201',
        infosComp: '',
        coordonnees: {
            tel: '0607080910',
            adresse: '34bis rue dacote, 49000 ANGERS',
            email_principal: '',
            site_internet: '',
        },
        reseaux_sociaux: {
            facebook: '',
            linkedin: '',
            twitter: ''
        },
        missionsProposees: [
            {   title: "Réalisation de vidéos promotionnelles",
                description: 'Vidéos pour animer un stand pour des salons + mettre en avant sur le site internet + quelques vidéos tutos pour acommpagner la vente des produits.'
            }
        ]
    },
];

for( let i = 0; i < liste_demandes.length ; i++ ){
    let infosDemande = liste_demandes[i]
    
    let newDiv = create_itemListeDemandes(infosDemande, i)
    appendAndAnimateNewElement(newDiv, i * 100)
}

// Mise en place d'index en paramètre pour retrouver facilement l'élément dans la liste_demandes;
// Attention quand delete à mettre à jour les ids et les eventListener... ou trick en remplaçant les infos par un 'deleted' dans le tableau pour garder la logique index.. à voir quand delete logique et backup sur localStorage.
function create_itemListeDemandes(demandeInfos, index){
    let newDiv = document.createElement('div')
    newDiv.classList.add('demande-container');
    newDiv.id = 'demande__' + index 

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
            <div class="actions-demandes">  
                <span class="mdi mdi-pen cursor-pointer" 
                    onclick="openModalUpdateDemande(${index})"
                >
                </span>
            </div>

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

            <div>
                <button onclick="openModalDetailsDemande(${index})" id="btn_more__${index}">Voir +</button>
            </div>
        </div>
    `

    let header = null 
    let details = null 

    // Detection header / details
    for( let i = 0; i < newDiv.children.length ; i++){
        let child = newDiv.children[i]
    
        if( child.classList.contains('header-demande') ){
            header = child
        }

        if( child.classList.contains('details-demande') ){
            details = child
        }
    }

    // Ajout eventListener pour ouvrir l'accordéon au click
    // cf item-demande.css
    header.addEventListener('click', function() {
        let detailsHeight = details.scrollHeight

        this.classList.toggle('visible')
        details.classList.toggle('visible')

        if( details.classList.contains('visible') ){
            details.style.height = detailsHeight + 'px'
        } else {
            details.style.height = 0
        }
    })

    return newDiv
}

function appendAndAnimateNewElement(newDiv, delay = 300){
    ul_liste_demandes.appendChild(newDiv)

    // Attend .3s
    setTimeout( () => {
        newDiv.classList.add('visible')
    }, delay)
}
//#endregion


//#region Logique Modal
var btn_open_modal_form = document.getElementById('btn_open_modal_form')
var overlay = document.getElementById('overlay')
var modal_form_adder = document.getElementById('modal_form_adder')
var modal_form_update = document.getElementById('modal_form_adder')
var modal_details = document.getElementById('modal_details')

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
    modal_form_update.classList.remove('open')
    modal_details.classList.remove('open')
}
function openDialDetailsDemande(indexDemandeInListe){
    prepareModalDetails(indexDemandeInListe)
    overlay.classList.add('open')
        modal_details.classList.add('open')
}

function prepareModalDetails(indexDemandeInListe){
    let demandeInfos = liste_demandes[indexDemandeInListe]

    console.log('demandeInfos modal détails TODO : ', demandeInfos);
}

function openModalUpdateDemande(indexDemandeInListe){
    prepareModalDetails(indexDemandeInListe)
    // overlay.classList.add('open')
    // modal_update.classList.add('open')
}
function prepareModalUpdate(indexDemandeInListe){
    let demandeInfos = liste_demandes[indexDemandeInListe]
    console.log('demandeInfos modal update TODO : ', demandeInfos);
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
    // var input_statut_demande = document.getElementById('statut_demande') // Par défaut draf au adder


    // Gestion du formulaire
    formulaire_adder.addEventListener('submit', function(event){
        // Annule le comportement par défaut du submit ( raffraichissement la page de base )
        event.preventDefault()
        recupereInfosForm()
    })

    /*
        Function qui récupère les valeurs saisie dans le formulaire d'ajout et qui effectue les vérifications éventuelles
    */
    function recupereInfosForm(){
        // Initialisation de l'objet nécessaire pour le fonctionnement de la function createNewEntreprise
        let infosDemande = {
            statut: 'draft', // A la création toujours draft, changement sur updater par la suite
            nomEntreprise: input_adder_nom_entreprise.value,
            urlLogo: input_adder_urlLogo.value ? input_adder_urlLogo.value : 'https://picsum.photos/202',
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

        // Ajout au tableau de la liste entreprise pour faire fonctionner les listeners correctement :
        liste_demandes.push(infosDemande)
        // Puis création de la div (caché par défaut pour faire l'animation)
        let newDiv = create_itemListeDemandes(infosDemande)
        
        closeModals()
        formulaire_adder.reset()
        appendAndAnimateNewElement(newDiv)
        // Scroll to bottom liste
        main_main.scrollTo({
            top: main_main.scrollHeight, // L'item fais 270 pour le moment, pour être sur que le scroll arrive en bas
            left: 0, 
            behavior: "smooth",
        });

        // Pour peaufiner ajouter un bouton adder et gérer avec querySelectorAll('.btn-add-form')
    }
//#endregion form_adder

//#region form_updater
    // Todo 
//#endregion
