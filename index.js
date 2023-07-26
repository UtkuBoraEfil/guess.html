let form = document.querySelector("form");
const input = document.querySelector("input");
const guesses = document.querySelector(".guesses");
let far = document.querySelector(".far");
const correct = document.querySelector(".correct");
let remain = document.querySelector(".remain");
let result = document.querySelector(".result");
const lastSection = document.querySelector(".mid");
const restart = document.querySelector(".restart");
let count = 0;

restart.style.display = "none";
let guessList = [];
let correctList = [];

far.textContent = count;
remain.textContent = 10 - count;
form.addEventListener("submit", (event) => {
  let n = Math.floor(Math.random() * 100 + 1);
  event.preventDefault();
  let value = input.value;
  guessList.push(value);
  count++;
  far.textContent = count;
  remain.textContent = 10 - count;
  correctList.push(n);
  correct.textContent = correctList.join(" - ");

  guesses.textContent = guessList.join(" - ");
  input.value = "";

  if (n == value) {
    result.innerHTML = "Congratulations! You fucking got it right!";
    lastSection.style.display = "none";
    restart.style.display = "block";
  } else if (n != value && value == 31) {
    result.innerHTML =
      "SJSJSJSJSJSJ. Nice Try! But no :/ correct number was " + n;
  } else if (n != value) {
    result.innerHTML = "HAHAHA. Loser, correct number was " + n;
  }

  if (count === 10) {
    lastSection.style.display = "none";
    result.innerHTML = "GAME OVER! correct number was " + n;
    restart.style.display = "block";
  }
});
