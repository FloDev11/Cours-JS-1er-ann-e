let modalDemo = document.getElementById('modal')
let overlayModal = document.getElementById('overlay')

let btnOpenModal = document.getElementById('btn_open_modal')

btnOpenModal.addEventListener('click', function() {
    overlayModal.classList.add('open')
    modalDemo.classList.add('open')
})

overlayModal.addEventListener('click', function() {
    overlayModal.classList.remove('open')
    modalDemo.classList.remove('open')
})


let formulaire = document.getElementById('form_entreprise')
let input_nom_entreprise = document.getElementById('nom_entreprise')
let input_numtel = document.getElementById('numtel')
let liste_entreprise = document.getElementById('liste_entreprises')

formulaire.addEventListener('submit', function(event) {
    event.preventDefault()
    
    // Récupérer les infos saisie : 
    let nom_entreprise = input_nom_entreprise.value 
    let numtel = input_numtel.value 
    
    // Créer une nouvelle div 
    let newDiv = document.createElement('div')
    newDiv.classList.add('entreprise-infos-container')
    newDiv.innerHTML = `
        <p class="nom-entreprise">
            ${nom_entreprise}
        </p>

        <p class="numtel-entreprise">
            ${numtel}
        </p>    
    `

    // L'ajouter à la liste 
    liste_entreprise.appendChild(newDiv)
    formulaire.reset()
    modalDemo.classList.remove('open')
    overlayModal.classList.remove('open')
})

