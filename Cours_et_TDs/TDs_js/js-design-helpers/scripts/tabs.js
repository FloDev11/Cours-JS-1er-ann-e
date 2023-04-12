let tabsPanelsContainer = document.getElementById('tabs_panels_container')
let tabNavHome = document.getElementById('tabnav_home')
let tabNavListe = document.getElementById('tabnav_liste')

tabNavHome.addEventListener('click', function() {
    tabsPanelsContainer.style.marginLeft = 0
})

tabNavListe.addEventListener('click', function() {
    tabsPanelsContainer.style.marginLeft = '-100%'
})