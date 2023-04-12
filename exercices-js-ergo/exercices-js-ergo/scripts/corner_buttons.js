let cornersButtons = document.getElementById('corner_buttons')
let fabButton = document.getElementById('fab_1_container')
let overlay = document.getElementById('overlay_corner')

fabButton.addEventListener('click', function() {
    cornersButtons.classList.add('open')
    overlay.classList.add('open')
})

overlay.addEventListener('click', function() {
    cornersButtons.classList.remove('open')
    overlay.classList.remove('open')
})
