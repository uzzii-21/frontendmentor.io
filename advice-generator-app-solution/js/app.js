const changeAdvice = document.getElementById("changeAdvice");
const heading = document.querySelector("h1");
const advice = document.querySelector("q");

const API = "https://api.adviceslip.com/advice";

changeAdvice.addEventListener("click", async () => {
  const random = Math.floor(Math.random() * 224) + 1;
  changeAdvice.classList.add("rotate-animation");
  setTimeout(() => {
    changeAdvice.classList.remove("rotate-animation");
  }, 1000);
  const res = await fetch(`${API}/${random}`)
  const data = await res.json()
  heading.innerText = `ADVICE #${data.slip.id}`;
  advice.innerText = data.slip.advice;
});
