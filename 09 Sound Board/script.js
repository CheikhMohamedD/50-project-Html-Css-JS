const audios = ["01", "02", "03", "04", "05", "06", "07"];

audios.forEach((audio) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = audio;

  document.getElementById("buttons").appendChild(btn);
});
