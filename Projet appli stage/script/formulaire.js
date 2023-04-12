let formDemo = document.getElementById('form_demo')
let overlayForm = document.getElementById('overlay_form')
let btnOpenForm = document.getElementById('btn_open_form')


btnOpenForm.addEventListener('click', function() {
    overlayForm.classList.add('open')
    formDemo.classList.add('open')
})
overlayForm.addEventListener('click', function() {
    overlayForm.classList.remove('open')
    formDemo.classList.remove('open')
})

//--------------------------------------------------------

var ul_liste_demandes = document.getElementById('Container_list_entreprise')

var formulaire = document.getElementById('form_entreprise')
var input_nom_entreprise = document.getElementById('nom_entreprise')
var input_telephone = document.getElementById('telephone')
var input_adresse = document.getElementById('adresse')
var input_email = document.getElementById('email')
var input_info_entreprise = document.getElementById('info_entreprise')
var input_statut = document.getElementById('statut')



formulaire.addEventListener('submit', function(event) {
    // Annule le comportement par défaut du submit ( raffraichissement la page de base )
    event.preventDefault()

    // récupérer les infos saisie :

    let infoEntreprise = {
        statut : input_statut.value, 
        nomEntreprise: input_nom_entreprise.value,
        infosComp: input_info_entreprise.value,
        coordonnees: {
            tel: input_telephone.value,
            adresse: input_adresse.value,
            email: input_email.value,
        }
    }

    

    let newDiv = create_itemListeEntreprises(infoEntreprise)

    formulaire.reset()

    ul_liste_demandes.appendChild(newDiv)
    setTimeout(() => {
        newDiv.classList.add('visible')
    }, 200);


})


// Animation de l'accordeon

var itemsListe = document.querySelectorAll('.Container-entreprise')

for (let i= 0; i < itemsListe.length; i++) {
    let entrepriseContainer = itemsListe[i]
    
    prepareAnimationAccordeon(entrepriseContainer)
}

function prepareAnimationAccordeon(itemEntreprise){
    let headerEntreprise = null;
    let detailEntreprise = null;

    for( let j = 0; j < itemEntreprise.children.length ; j++ ){
        let child = itemEntreprise.children[j]

        if( child.classList.contains('header-entreprise') ){
            headerEntreprise = child
        } else if( child.classList.contains('detail-entreprise') ){
            detailEntreprise = child
        }
    }

    headerEntreprise.addEventListener('click', function() {
        let hauteurDetail = detailEntreprise.scrollHeight 

        detailEntreprise.classList.toggle('visible')
        if( detailEntreprise.classList.contains('visible') ){
            detailEntreprise.style.height = hauteurDetail + 'px'
        } else {
            detailEntreprise.style.height = 0
        }
    })

}





// Fonction pour créer un nouvelle élément

function create_itemListeEntreprises(infoEntreprise){
    let newDiv = document.createElement('div')
    newDiv.classList.add('Container-entreprise');

    switch(infoEntreprise.statut ){ // Gestion design différent géré sur item-demande.css
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
        <div class="header-entreprise">

            <span class="statut-demande"></span>

            <div>
            
                Nom de l'entreprise : <span class="nom-entreprise">${infoEntreprise.nomEntreprise}</span> 
            
                Adresse de l'entreprise :<span class="adresse-entreprise">${infoEntreprise.coordonnees.adresse}</span>

                
            
            </div>

        </div>


        <div class="detail-entreprise">

            <div>
                
                Téléphone de l'entreprise : <span class="tel-entreprise">${infoEntreprise.coordonnees.tel}</span>
                
                Email de l'entreprise : <span class="email-entreprise">${infoEntreprise.coordonnees.email}</span>

                Informations sur l'entreprise : <p class="note-entreprise">${infoEntreprise.infosComp}</p>
            </div>

        </div>
    `

    prepareAnimationAccordeon(newDiv)

    return newDiv

}