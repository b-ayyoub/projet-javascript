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



//le héro doit s’entrainer un certain nombre d’entrainement dans l’exemple de l’exercice c’est 5 entrainement ensuite le hero va combattre des ennemis jusqu’a 
// tous les vaincres puis le héros trouve des coffre au trésor ou il y a plusieurs trésort une épé une potio et un bouclier

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