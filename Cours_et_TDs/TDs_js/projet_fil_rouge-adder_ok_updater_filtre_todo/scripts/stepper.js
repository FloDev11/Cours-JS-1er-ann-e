var steppers = document.querySelectorAll('.stepper-skylight')

for( let i = 0; i < steppers.length ; i++ ){
    let stepper = steppers[i]

    let stepsContainer = null 
    let actionsStepper = null 

    for( let j = 0; j < stepper.children.length ; j++ ){
        let child = stepper.children[j]

        if( child.classList.contains('steps-container')){
            stepsContainer = child 
        } else if( child.classList.contains('actions-stepper') ){
            actionsStepper = child
        }
    }

    if( stepsContainer ){
        init_stepsContainer(stepsContainer)

        if( actionsStepper ){
            init_actionsStepper(actionsStepper, stepsContainer)
        } else {
            console.log('error stepper,actions-stepper miss');
        }
        // Prévoir une function pour logique goto step-x directement à l'occase
        // via data in baliste html surement.
    } else {
        console.log('error stepper, steps-container miss');
    }
}


function init_stepsContainer(steps_container){
    let children = steps_container.children;
    let nbChildren = children.length

    steps_container.style.width = nbChildren * 100 + '%';

    for( let j = 0; j < children.length ; j++ ){
        let child = children[j]

        // Pour que chaque image fasse 100%
        child.style.width = 100 / nbChildren + '%'

        // Si j'ai besoin de deux "images" par step
        // child.style.width = 100 / ( nbChildren * 2 )+ '%'
    }
}


function init_actionsStepper(actionsStepper, stepsContainer){
    let btnNext = null 
    let btnPrev = null 
    let currentMarginLeft = stepsContainer.style.marginLeft;
    
    for( let i = 0; i < actionsStepper.children.length ; i++ ){
        let child = actionsStepper.children[i]
        if( child.classList.contains('prev-step') ){
            btnPrev = child 
        } else if( child.classList.contains('next-step') ){
            btnNext = child
        }
    }
    
    if( !currentMarginLeft ){
        btnPrev.style.visibility = 'hidden'
    }

    btnNext.addEventListener('click', function(){
        let currentMarginLeft = stepsContainer.style.marginLeft;
        let nbStep = stepsContainer.children.length;
        let currentStep = 0;
        // Voir plus tard pour opti avec data in html attribute + logique infinite
        
        if( !currentMarginLeft ){
            stepsContainer.style.marginLeft = '-100%'
        } else {
            let valeurMargin = Math.abs(currentMarginLeft.replace('%', '')); // enleve le % pour retrouver la valeur absolue
            stepsContainer.style.marginLeft = '-' + (valeurMargin + 100) + '%'
            
            currentStep = ( valeurMargin / 100 ) + 1
        }

        if( currentStep == nbStep - 1 ){
            this.style.visibility = 'hidden'
        }
        btnPrev.style.visibility = 'visible';
    })

    btnPrev.addEventListener('click', function(e){
        let currentMarginLeft = stepsContainer.style.marginLeft;
        let valeurMargin = Math.abs(currentMarginLeft.replace('%', '')); // enleve le % pour retrouver la valeur absolue
        let currentStep = ( valeurMargin / 100 ) - 1

        stepsContainer.style.marginLeft = '-' + (valeurMargin - 100) + '%'
        
        if( currentStep == 0 ){
            this.style.visibility = 'hidden'
        } 
        btnNext.style.visibility = 'visible' 
    })
}