const changeAdvice = document.getElementById("changeAdvice");
const heading = document.querySelector("h1");
const advice = document.querySelector("q");

console.log(heading.innerHTML);

const API = "https://api.adviceslip.com/advice";

changeAdvice.addEventListener("click", () => {
    changeAdvice.style.animationName =  "rotate";
    changeAdvice.style.animationDuration = '.4s';
    changeAdvice.style.animationIterationCount = "infinite";
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      heading.innerText = `ADVICE #${data.slip.id}`;
      advice.innerText = data.slip.advice;
      changeAdvice.style.animationName =  "";
      changeAdvice.style.animationDuration = '';
      changeAdvice.style.animationIterationCount = "";
    });
});
