var fruits_disponibles = [ 'Pommes', 'Poires', 'Bananes', 'Oranges', 'Papayes', 'Kiwi']

let listeFruits = document.getElementById('liste_fruits')
let input_fruitChoisi= document.getElementById('fruit_desire')
let btnValidChoix = document.getElementById('valid_choice')
let messageFruit = document.getElementById('message_exercice_fruit')

for (let i = 0; i < fruits_disponibles.length; i++) {
    
    let newLi = document.createElement('li')
    newLi.textContent = fruits_disponibles[i]
    listeFruits.appendChild(newLi)
}


btnValidChoix.addEventListener('click', function(event) {
    
    Vérifierfruit()
         
} )


function Vérifierfruit() {

    fruitChoisi = input_fruitChoisi.value

    let verifFruit = 0

    for (let i = 0; i < fruits_disponibles.length; i++) {
        if (fruits_disponibles[i] == fruitChoisi) {
            verifFruit = 1
            break 
        } else if (fruits_disponibles[i] != fruitChoisi) {
            verifFruit = 0
        }
        
    }

    if (verifFruit == 1) {
        messageFruit.textContent = 'disponible'
    } else if (verifFruit == 0) {
        messageFruit.textContent = 'non disponible'
    }
}