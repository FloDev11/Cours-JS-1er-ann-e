let btnOpen = document.getElementById('btn_open_drawer')
let btnClose = document.getElementById('btn_close_drawer')
let overlay = document.getElementById('overlay')
let navigationDrawer = document.getElementById('navigation_drawer')

function openDrawer(){
    navigationDrawer.classList.add('open');
    overlay.classList.remove('hidden');
    overlay.classList.add('visible');
}

function closeDrawer(){
    navigationDrawer.classList.remove('open');
    overlay.classList.add('hidden');
    overlay.classList.remove('visible');
}

btnOpen.addEventListener('click', openDrawer)

btnClose.addEventListener('click', closeDrawer)

overlay.addEventListener('click', closeDrawer)