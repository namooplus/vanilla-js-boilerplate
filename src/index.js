import "./style.css";

function title() {
  const element = document.createElement("h1");

  element.id = "title";
  element.textContent = "바닐라 👍";

  return element;
}

document.body.appendChild(title());
