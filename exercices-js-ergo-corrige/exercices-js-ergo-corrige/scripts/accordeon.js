// Accordeon :
// A creuser éventuellement: https://codepen.io/abergin/pen/BaKVWd
document.querySelectorAll('.accordeon-item').forEach(accItem => {
    // console.log('accOteù', accItem);
    accItem.addEventListener('click', function() {
        // version facile mais pas ouf, en mettant une transition sur maxHeight et en mettant maxHeight a 500 en css
        // this.classList.toggle('open')

        // version précise en mettant maxHeight = scrollHeight
        let accordeonContent = null 
        for( let i = 0 ; i < this.childNodes.length ; i++ ){
            if( this.childNodes[i].classList && this.childNodes[i].classList.contains('accordeon-content') ){
                accordeonContent = this.childNodes[i]
                break
            }
        }
        this.classList.toggle('open')
        if( this.classList.contains('open') ){
            accordeonContent.style.maxHeight = accordeonContent.scrollHeight.toString() + 'px'
        } else {
            accordeonContent.style.maxHeight = 0
        }
    })
});