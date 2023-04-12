// Accordeon :
document.querySelectorAll('.accordeon-item').forEach(accItem => {
    let accordeonContent = null 
    let accordeonHeader = null
    for( let i = 0 ; i < accItem.children.length ; i++ ){
        if( accItem.children[i].classList.contains('accordeon-header') ){
            accordeonHeader = accItem.children[i]
        } 
        else if( accItem.children[i].classList.contains('accordeon-content') ){
            accordeonContent = accItem.children[i]
        } 
    }

    accordeonHeader.addEventListener('click', function() {
        accordeonContent.classList.toggle('open')
        if( accordeonContent.classList.contains('open') ){
            accordeonContent.style.height = accordeonContent.scrollHeight + 'px'
        } else {
            accordeonContent.style.height = 0
        }
    })
});