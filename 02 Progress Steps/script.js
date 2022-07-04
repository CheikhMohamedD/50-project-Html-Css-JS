const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
// declenchez l'animation de la fonction update au Click sur le boutton Next ou preview
let currentActive = 1; // represente le stamp qui ne depasse pas le nombre de classe .circle (dans notre cas 4 mais s'adapte en augmentant)
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

/** la fonction Update s'occupe de l'animation de la progress Step en general.
 *
 * Elle a pour role d'ajouter ou de supprimer les classes .active
 * sur les div.circle .
 * Elle permet egalement de recuperer les classes .active
 * ajoutee par la boucle if par rapport a la valeur currentActive
 * et de modifier le style du div#progress en divisant
 * ((la longueur de .active-1) / (la longueur de circle-1 )
 * et en multipliant le tout par 100% .
 *
 * Anime aussi les buttons suivant la comparaison currentActive et le nombre de cercle actifs circle.length
 */
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //Pour l'animation logique des bouttons Next et previous
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
