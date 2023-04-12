let listeAccordeonItems = document.querySelectorAll('.accordeon-item')

listeAccordeonItems.forEach( accordeonItem => {

    let children = accordeonItem.childNodes
    let accordeonHeader = null
    let accordeonContent = null
    children.forEach( child => {
        if (child.classList) {
            if(child.classList.contains('accordeon-header') ){
                accordeonHeader = child;
            }
            else if(child.classList.contains('accordeon-content') ){
                accordeonContent = child;
            }
        }

    });

    let heightContent = accordeonContent.scrollHeight

    accordeonHeader.addEventListener('click', function() {
        accordeonContent.classList.toggle('open')

        if (accordeonContent.classList.) {
            
        }
    })
 
});

