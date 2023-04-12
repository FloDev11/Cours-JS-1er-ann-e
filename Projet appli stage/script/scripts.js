let fab_1 = document.getElementById('fab_1_container')
let corner_buttons = document.getElementById('corner_buttons')
let overlay_corner = document.getElementById('overlay_coner')

fab_1.addEventListener('click', function() {
    overlay_corner.classList.add('open')
    corner_buttons.classList.add('open')
})

overlay_corner.addEventListener('click', function() {
    overlay_corner.classList.remove('open')
    corner_buttons.classList.remove('open')
})

// Sélectionnez l'élément à animer
const mainWrapper = document.querySelector("#main_wrapper");

// Définissez une fonction pour l'animation
function animate() {
  mainWrapper.style.transform = "rotate(360deg)";
}

// Ajoutez un écouteur d'événements pour déclencher l'animation
mainWrapper.addEventListener("click", animate);
