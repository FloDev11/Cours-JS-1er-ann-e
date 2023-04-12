let btn_filters = document.getElementById('btn_filters')
let filters_container = document.getElementById('filters_container')
btn_filters.addEventListener('click', function() {
    filters_container.classList.toggle('open')

    if( filters_container.classList.contains('open') ){
        filters_container.style.height = filters_container.scrollHeight + 'px'
    } else {
        filters_container.style.height = 0
    }
})