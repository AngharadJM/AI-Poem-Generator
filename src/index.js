function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  console.log("poemElement:", poemElement);
  poemElement.innerHTML = "Hello world";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
