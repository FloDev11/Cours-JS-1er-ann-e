let fab_1 = document.getElementById('fab_1_container')
let corner_buttons = document.getElementById('corner_buttons')
let overlay_corner = document.getElementById('overlay_coner')

let fab_2_container = document.getElementById('fab_2_container')
let fab_3_container = document.getElementById('fab_3_container')

fab_1.addEventListener('click', function() {
    overlay_corner.classList.add('open')
    corner_buttons.classList.add('open')
    fab_2_container.classList.add('open')
    fab_3_container.classList.add('open')
})

overlay_corner.addEventListener('click', function() {
    overlay_corner.classList.remove('open')
    corner_buttons.classList.remove('open')
    fab_2_container.classList.remove('open')
    fab_3_container.classList.remove('open')

})
