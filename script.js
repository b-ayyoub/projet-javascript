

/**let pointsDeVie = Number(prompt("Combien as-tu de points de vie ?"));

if (pointsDeVie > 50) {
    console.log("Tu attaques avec toute ta puissance !");
} else if (pointsDeVie >= 20 && pointsDeVie <= 50) {
    console.log("Tu attaques faiblement... ");
} else {
    console.log("Tu es trop faible, tu dois fuir !");
} if (pointsDeVie > 80) {
    console.log("tu rentre chez toi")
} if (pointsDeVie > 150) {
    console.log("je suis le plus for");
    
} else if(pointsDeVie >= 200 && pointsDeVie <= 300) {
    console.log("cour vite vite!!!!!!")
}

/**let prix = prompt ("quel est le prix de l'article")
let pourcentage = prompt ("quel est le pourcentage de réduction")
let reduction = prix * (pourcentage/100)
console.log("reduction");**/


//le héro doit s’entrainer un certain nombre d’entrainement dans l’exemple de l’exercice c’est 5 entrainement ensuite le hero va combattre des ennemis jusqu’a 
// tous les vaincres puis le héros trouve des coffre au trésor ou il y a plusieurs trésort une épé une potio et un bouclier

/**  alerte avec FOR
for (let entrainement = 1; entrainement <= 5; entrainement++) {
    alert("Entraînement numéro " + entrainement);
}
alert("entrainement terminer")

// alerte avec WHILE

alert("Le combat commence !");
let ennemis = 3; // Nombre d'ennemis à combattre

while (ennemis > 0) {
    alert("Le héros attaque un ennemi !");
    ennemis--; // Un ennemi est vaincu le -- veut dire on soustrait 1 a la variable LET
    if (ennemis > 0) {// if signifie "si, (ennemis > 0) est la condition, Si le nombre d'ennemis (ennemis) est supérieur à 0, alors le code à l'intérieur des {} s'exécute.
        alert("Il reste 2 ennemis " + ennemis + "!");
        alert("Tous les ennemis sont vaincus !");
        alert("Fin du combat");
    }
}

alert(" Tous les ennemis sont vaincus !");
alert(" Fin du combat");

//  Récupération des trésors
alert(" Le héros ouvre les coffres aux trésors !");
let tresors = ["Épée légendaire", "Potion magique", "Bouclier en or"]; //les crochets servent à ouvrir un tableau

tresors.forEach(function(tresor) {//trésor et le tableau qui contien la liste des trésor, forEach veut dire parcour chaque élément du tableau et la function c'est le paramètre (comme mixin)
    alert(" Le héros a trouvé :" + tresor + "!"); //je concatène la chaine avec le + et variable(trésor)
});

alert(" L'aventure du héros est terminée !");**/


// exercice pain avec forEach et fonction

// let magasin = [
//     { nom: "Pain ", prix: "2 euro " , stock: 10 },
//     { nom: "Croissant ", prix: "1 euro ", stock: 15 },
//     { nom: "Baguette ", prix: "1 euro ", stock: 20 }
// ];
// magasin.forEach(function(magasin) {
//     let message = magasin.nom + magasin.prix + magasin.stock;
//     console.log(message);
// });

// EXEMPLE de PIZZA

// function preparerPate(){
//     let reponse = prompt("As-tu péparer la pate? (oui/non)");        
//     if(reponse === "oui"){
//     console.log("Oui, la pate est prête");
//     return true;
//     }
//     console.log("La pate n'est pas prête!");
//     return false;
// };

// function ajouterIngredients(){
//     let reponse = prompt("As-tu ajouter les inghredients? (oui/non)");
//     if(reponse === "oui"){
//     console.log("Oui, les ingredients sont bien ajoutés");
//     return true;
//     }
//     console.log("Non, ils ne sont pas ajoutés");
//     return false;
// }

// function cuirePizza(){
//     let reponse = prompt("As-tu mis la pizza au four? (oui/non)");
//     if(reponse === "oui"){
//     console.log("Oui, la pizza est dans le four");
//     return true;
//     }
//     console.log("Non, elle n'y est pas");
//     return false;
// }

// function fairePizza(nbpizza){
//     console.log("Je pépare la pizza n" + nbpizza);

//     if(!preparerPate()){
//         console.log("La pate a pizza de la pizza numéro " + nbpizza +" n'espas faites");
//         return;
//     }

//     if(!ajouterIngredients()){
//         console.log("Les ingredients de la pizza numéro " + nbpizza +" ne sont pas ajouter");
//         return;
//     }

//     if(!cuirePizza()){
//         console.log("La pizza numéro " + nbpizza +" n'est pas dans le four");
//         return;
//     }

// console.log("La pizza numéro " - nbpizza + " est prête!");
// }

// for( let i = 1; i <= 3; i++){
//     fairePizza(i);
// }

// console.log("Toutes les pizzas sont prêtes!");


// exercices

// function achat(prixbon, argentenfant){
//     let reponse = prompt("si l'enfant à assez d'argent ");        
//     if(reponse === "oui"){
//     console.log("tu peux acheter le bonbon");
//     return;
//     }
//     console.log("il te manque des pièces");
//     return;
//     };

//     function conseilMeteo(meteo) {
//         if (meteo === "soleil") {
//             console.log("Mets de la crème solaire ");
//         } if (meteo === "pluie") {
//             console.log("Prends ton parapluie ");
//         } if (meteo === "neige") {
//             console.log("reste a la maison ");
//         }  if (meteo === "vent") {
//             console.log("couvre toi bien ");
//         }
//     }


// exercices

// let monEquipe = [
//     { nom: "fred", role: "cuisinier", experience: 5, genre: "masculin", age: 35, poids: 80, regimealimentaire: "poission" },
//     { nom: "jean", role: "mecanicien", experience: 8, genre: "masculin", age: 50, poids: 75, regimealimentaire: "poission" },
//     { nom: "laurie", role: "Medecin", experience: 4, genre: "feminin", age: 30, poids: 55, regimealimentaire: "végé" },
//     { nom: "karine", role: "Scientifique", experience: 7, genre: "feminin", age: 43, poids: 60, regimealimentaire: "végé" },
//     { nom: "damien", role: "ingénieur", experience: 7, genre: "masculin", age: 43, poids: 60, regimealimentaire: "viande" },
//     { nom: "thomas", role: "pilote", experience: 9, genre: "masculin", age: 60, poids: 75, regimealimentaire: "viande" },
//     { nom: "seb", role: "assistant", experience: 6, genre: "masculin", age: 50, poids: 75, regimealimentaire: "poission" },
// ]

// monEquipe.forEach(function(monEquipe){
//     let Equipe = monEquipe.nom + monEquipe.role + monEquipe.experience + monEquipe.genre + monEquipe.age + monEquipe.poids + monEquipe.regimealimentaire;
//     alert(Equipe);
// });



// exercices FONCTION

/**let tableau = ["", "", "", "", ""];

console.log("case");

for (let i = 0; i < tableau.length; i++) {
    console.log("Case " + (i + 0) + ": " + tableau[i]);
}



// 1

function direBonjour(nom, callback) {
    console.log(" bonjour, " + nom + "!");
    callback();
}

function direAurevoir(){
    console.log("au revoir")
}
direBonjour("ayyoub") // j'appel ma fonction avec direbonjour pour qu'elle m'affiche "bonjour ayyoub"


// 2

function jePart(nom, callback) {
    console.log("prettt");
    setTimeout(callback, nom);
}

function minuterie(){
    console.log("gooo")
}

jePart(3000, minuterie);



// 3


function direBonjour(nom, temps, callback) { // nom de ma fonction avec ces paramètres
    console.log(" bonjour" + nom); // c'est l'affiche que je veut voir dans le resultat
    setTimeout(callback, temps) //setTimeout va lancer le minuteur 
}
function direAurevoir(){ // direAurevoir nom de ma fonction
    console.log("au revoir")// ce que m'a fonction va m'afficher au bout de 3 seconde
}

function direHello(){ // direAurevoir nom de ma fonction
    console.log("au revoir")// ce que m'a fonction va m'afficher au bout de 3 seconde
}

direBonjour("ayyoub", 2000, direAurevoir)// j'appel ma fonction avec direBonjour pour l'executer, 3000 c 3 seconde
direBonjour("fred", 4000, direHello)**/

// méthode affiche qui ne marche pas 

     /**let tableau = [// tableau
        ["lea", "sebastien", "Charles"], // grille
        ["Fréderic", "Oswald", "Eric"],  // grille
        ["Antoine", "Christelle", "alex"]   // grille
    ];
    
     {
         prompt("Entrez un prénom pour la case ");
    
         console.log( tableau[0])
         console.log( tableau[1])
         console.log( tableau[2])
}

// mhétode 2 

let tab = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
for (let i = 0; i < 3; i++) { // boucle pour parcourir les 
    for (let j = 0; j < 3; j++) {
         prompt("Entrez un prénom pour la case ([i+1], [j+1]) ");

    }
}


for (let i = 0; i < tableauVide.length; i++) {
    prompt("qui et tu")
    console.log(`Élément à l'indice {i} : {tableauVide[i]}`);
}


// Étape 1 : Création d'un tableau 2D 3x3 avec des cases vides  
let tableau2D = [
    ["", "", ""], // Ligne 1  
    ["", "", ""], // Ligne 2  
    ["", "", ""]  // Ligne 3  
];

 
for (let i = 0; i < 3; i++) { // Parcourt chaque ligne (0, 1, 2)
    for (let j = 0; j < 3; j++) { // Parcourt chaque colonne (0, 1, 2)
        // Demande à l'utilisateur d'entrer un prénom  
        let prenom = prompt("Entrez un prénom pour la case [ (i + 1) ][ (j + 1) ]:");
    }
}**/
