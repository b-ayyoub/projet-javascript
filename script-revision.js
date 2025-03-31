// exemple 1
// let motTapeOK = true/false

// if(motTapeOK){
//   console.log("bravo vous avez correctement taper le mot")
// } else {
//   console.log("echec le mot n'est pas correct")
// }

// exemple 2

// let motUtilisateur = prompt("Entrez un mot :")
// console.log("salut")

// exemple 4

// let motApplication = "bonjour"
// let motUtilisateur = prompt("entrer le mot : " + motApplication);

// if (motUtilisateur === motApplication) {
//   console.log("bravo")
// } else {
//   console.log (" vous avez fait une erreur")
// };

// exemple 4

// let listeMots = ["cachalot", "petunia", "serviette"];
// let score = 0

//  let motUtilisateur = prompt("rentrer le mot contenu dans la première case du tableau." + listeMots[0]);

//  if (motUtilisateur === listeMots[0]);{
//   score++
//  } resultat 0

// motUtilisateur = prompt("rentrer le mot contenu dans la première case du tableau." + listeMots[1]);

//  if (motUtilisateur === listeMots[1]);{
//   score++
//  } resultat 1

//  motUtilisateur = prompt("rentrer le mot contenu dans la première case du tableau." + listeMots[2]);

//  if (motUtilisateur === listeMots[2]);{
//   score++
//  } resultat 2

//  console.log(score); resultat 3 ce qui veut dire que chaque nom que je tape dans prompt sa me le compte et au final on a un résultat de 3


// exemple de FOR ( qui veut dire POUR en français)

// for (let i = 0; i < 3; i++) { 
//   console.log(i)
// }
//  resultat 0, 1, 2

// exemple de boucle WHILE qui veut dire "tant que"

// let compteur = 0 on déclare la variable i, que l’on initialise à zéro, avant la boucle ;
// while (compteur < 3) { le while ne contient que la condition d’arrêt : tant que i est plus petit que 3 ;
//     console.log(compteur) on incrémente i (i va gagner +1 à chaque tour de boucle). 
//     compteur++ mise a jour du compteur  Attention ! Si ont oublient d’augmenter la valeur de i, alors la condition i < 3 sera toujours vraie, et vous aurez une boucle infinie !



// let mot = prompt("ecrire ok") // la question qui sera poser 
// while (mot !== "ok") { //(!== ( symbole différent )tant que le mot est différent de ok il faut redemander d'ecrire ok)
//   mot = prompt("ecrire ok") // redemander ecrire ok tant que le mot est différent
// }
// console.log("vous avez dit ok")// une fois que c'est ok qui est ecrit alors on affiche vous avez dit ok

exercice

// // Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
// let listeMots = ["Cachalot", "Pétunia", "Serviette"]
// let listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

// let score = 0

// // Déclaration de la variable contenant le choix de l'utilisateur
// let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
// while (choix !== "mots" && choix !== "phrases") {
//     choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// }

// if (choix === "mots") {
//     // On parcourt le tableau des mots
//     for (let i = 0; i < listeMots.length; i++) {
//         // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
//         let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
//         if (motUtilisateur === listeMots[i]) {
//             // Si le mot saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listeMots.length)
// } else {
//     // On parcourt le tableau des phrases
//     for (let i = 0; i < listePhrases.length; i++) {
//         // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
//         let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
//         if (phraseUtilisateur === listePhrases[i]) {
//             // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listePhrases.length)
// }

// // A noter : ce n'est pas la seule réponse valide pour cet exercice, il en existe d'autres plus optimisées, 
// // mais nous verrons cela dans les prochains chapitres.
