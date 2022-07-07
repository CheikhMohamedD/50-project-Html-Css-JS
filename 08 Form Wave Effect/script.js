const labels = document.querySelectorAll(".form-control label");

//we've splited each word of the innerHtml of label and replace each letter by a span that will have an animated style effect and join all the letter
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 19}ms">${letter}</span>`
    )
    .join("");
});

