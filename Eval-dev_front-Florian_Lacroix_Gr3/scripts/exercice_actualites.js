/*
    L'input de type date renvoie une date au format américain 2023-03-28, 
    Si vous voulez la convertir à la française inspirez-vous de cet exemple : 
*/
var date_americaine = '2023-03-28';
var date_a_convertir = new Date(date_americaine);
var date_francaise = date_a_convertir.toLocaleDateString("fr-FR")
console.log('date_francaise : ', date_francaise);
