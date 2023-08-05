const animations = [];
const images = document.querySelectorAll("img");

let counter = 0;

const id = setInterval(() => {
  counter--;
  applyTranslate();
}, 5000);

const next = document.querySelector("#next");
next.addEventListener("click", () => {
  counter--;
  applyTranslate();
});
const previous = document.querySelector("#previous");
previous.addEventListener("click", () => {
  counter++;
  applyTranslate();
});

function applyTranslate() {
  if (counter > 0) {
    counter = 0;
    return;
  }
  images.forEach((image) => {
    if (Math.abs(counter) === images.length) {
      counter = 0;
    }
    image.style.transform = `translate(${counter}00%,0)`;
  });
}
