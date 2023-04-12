let input_categorie_produit = document.getElementById('categorie_produit')

let div_categorie_autre = document.getElementById('categorie_autre')
let div_sub_form_cosmetique = document.getElementById('sub_form_cosmetique')
let div_sub_form_alimentaire = document.getElementById('sub_form_alimentaire')

input_categorie_produit.addEventListener('change', function() {
    // console.log('value :: ', this.value);
    
    switch( this.value ){
        case 'autre':
            div_sub_form_cosmetique.style.display = 'none'
            div_sub_form_alimentaire.style.display = 'none'
            div_categorie_autre.style.display = 'block'
        break;

        case 'cosmetique':
            div_sub_form_cosmetique.style.display = 'block'
            div_sub_form_alimentaire.style.display = 'none'
            div_categorie_autre.style.display = 'none'
        break;

        case 'alimentaire':
            div_sub_form_cosmetique.style.display = 'none'
            div_sub_form_alimentaire.style.display = 'block'
            div_categorie_autre.style.display = 'none'
        break;

        default: 
            div_sub_form_cosmetique.style.display = 'none'
            div_sub_form_alimentaire.style.display = 'none'
            div_categorie_autre.style.display = 'none'
        break;
    }
  
})

let checkBoxTest = document.getElementById('test_checkbox')
checkBoxTest.addEventListener('change', function() {
    if( this.checked ){
        console.log('checked');
    } else {
        console.log('unchecked');
    }
})