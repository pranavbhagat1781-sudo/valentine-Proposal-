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
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzVmOGFpNzl6c3V1ZWczaDJtd3JibTNpZjhvMDk2ejk1NjEydms4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/75ZaxapnyMp2w/giphy.gif";
    document.querySelector(".buttons").style.display = "none";
});
