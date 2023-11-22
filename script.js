const result = document.getElementById("result");
const first = document.querySelector(".first");
const two = document.querySelector(".two");
const rating = document.querySelectorAll(".ratings button");
const submitBtn = document.querySelector(".first .submit-btn");

rating[0].addEventListener("click", () => {
  result.textContent = rating[0].value;
});
rating[1].addEventListener("click", () => {
  result.textContent = rating[1].value;
});
rating[2].addEventListener("click", () => {
  result.textContent = rating[2].value;
});
rating[3].addEventListener("click", () => {
  result.textContent = rating[3].value;
});
rating[4].addEventListener("click", () => {
  result.textContent = rating[4].value;
});

submitBtn.addEventListener("click", () => {
  first.style.display = "none";
  two.style.display = "flex";
});
