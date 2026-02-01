const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const image = document.getElementById("mainImage");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = translate(${x}px, ${y}px);
});

yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAY!!! 💖🥰 I love you YASHITA!";
    image.src =
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2JuYjZyOGszdXlzMnN1dWtiNXYyZ3Jscmpvb3kydjMwbnhxYjlqayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2rqEdFfkMzXmo/giphy.gif";
    document.querySelector(".buttons").style.display = "none";
});
