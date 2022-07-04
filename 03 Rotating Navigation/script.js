//intercepter les Id #open #close et la classe .container
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

//au click sur les buttons#open et button#close ajouter ou retirer .show-nav au div.container qui devient div.container.show-nav
open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
