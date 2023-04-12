let modalDemo = document.getElementById('modal_demo')
let overlayModal = document.getElementById('overlay_modal')

let btnOpenModal = document.getElementById('btn_open_modal')

btnOpenModal.addEventListener('click', function() {
    overlayModal.classList.add('open')
    modalDemo.classList.add('open')
})

overlayModal.addEventListener('click', function() {
    overlayModal.classList.remove('open')
    modalDemo.classList.remove('open')
})
