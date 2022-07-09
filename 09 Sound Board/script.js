const sounds = [
  "Disiz",
  "Labrith",
  "1Plike140",
  "Rema",
  "Stromae",
  "Tiakola",
  "MOON",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  document.getElementById("buttons").appendChild(btn);
});
