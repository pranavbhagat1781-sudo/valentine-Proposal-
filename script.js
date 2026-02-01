const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const image = document.getElementById("mainImage");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform =
    `translate(${Math.random()*200 - 100}px, ${Math.random()*200 - 100}px)`;
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAY!!! 💖 I love you YASHITA 😍";
  image.src = "mindblown.gif";
  document.querySelector(".buttons").style.display = "none";
});
