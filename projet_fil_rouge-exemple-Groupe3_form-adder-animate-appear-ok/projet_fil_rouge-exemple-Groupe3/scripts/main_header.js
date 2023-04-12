var btn_open_filters = document.getElementById('btn_open_filters')
var filtres_container = document.getElementById('filtres_container')
var main_header = document.getElementById('main_header')

btn_open_filters.addEventListener('click', function() {
    main_header.classList.toggle('open')
    filtres_container.classList.toggle('open')

    if( filtres_container.classList.contains('open') ){
        filtres_container.style.height = filtres_container.scrollHeight + 'px' 
    } else {
        filtres_container.style.height = 0
    }
})