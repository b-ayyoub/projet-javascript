
/**let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let croix = document.getElementById("croix")

h2.addEventListener("click",function() {
    if (p.classList.contains("hidden")) {
    p.classList.remove("hidden");
    croix.innerText = "Close";
    } else {
        p.classList.add("hidden");
        croix.innerText = "Open";

    }
});**/

//ACCORDEON

/*let buttons = document.querySelectorAll("#accordion button");

window.addEventListener("click",function (){
    buttons.forEach((button) => {
      let content = button.nextElementSibling;
      button.addEventListener("click", () => {
        if (button.classList.contains("active")) {
          button.classList.remove("active");
          button.querySelector("expanded");
          content.style.maxHeight = null;
          content.querySelector("hidden",);
        } else {
          button.classList.remove("active");
          button.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });

//   2ieme méthode

let accordionTitles = document.querySelectorAll(".accordionTitle");// La méthode document.querySelectorAll() sélectionne tous les éléments qui correspondent à un sélecteur CSS donné. Elle renvoie une NodeList (une liste d’éléments du DOM).

accordionTitles.forEach((accordionTitle) => {// accordionTitles est la classe 
  accordionTitle.addEventListener("click", () => { //forEach() permet de boucler sur chaque titre (accordionTitle), on écoute l'évenement et quand on clique la fonction flècher s'execute
    if (accordionTitle.classList.contains("is-open")) { //Vérifie si accordionTitle a déjà la classe "is-open".
      accordionTitle.classList.remove("is-open"); //Si oui, cela signifie que le panneau est déjà ouvert, donc on le ferme en supprimant "is-open".
    } else { //sinon
      let accordionTitles = document.querySelectorAll(".is-open");//document.querySelectorAll(".is-open") sélectionne tous les titres déjà ouverts.
      accordionTitles.forEach((accordionTitles) => { //On les boucle avec forEach() et on retire la classe "is-open".
        accordionTitles.classList.remove("is-open");
      });
      accordionTitle.classList.add("is-open"); //Ajoute la classe "is-open" au titre cliqué, ce qui ouvre son contenu.
    }
  });
});
//S'il est déjà ouvert → il se ferme.
// sinon
// Tous les autres titres se ferment.
// Le titre cliqué s’ouvre
// Un seul titre ouvert à la fois grâce à querySelectorAll(".is-open")
//Ajout/Suppression de la classe "is-open" pour contrôler l'affichage.*/


