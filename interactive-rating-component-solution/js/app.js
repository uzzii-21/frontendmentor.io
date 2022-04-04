"strict";

const ratingList = document.querySelector("ul").children;
const ratingForm = document.querySelector(".rating-form");
const thankYouState = document.querySelector(".thank-you-state");
const rate = document.querySelector(".rate");

console.log(ratingForm, thankYouState);

let ratingValue;

[...ratingList].forEach((rating) => {
  const children = rating.children[0];
  children.addEventListener("click", () => {
    ratingValue = children.innerText;
    console.log(ratingValue);
  });
});

submit.addEventListener("click", () => {
  if (ratingValue) {
    ratingForm.classList.add("hidden");
    thankYouState.classList.remove("hidden");
    rate.innerText = `You selected ${ratingValue}  out of 5`;
  }
});
