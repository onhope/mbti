const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function begin() {

  main.style.animation = "fadeOut 1s"
  main.style.WebkitAnimation = "fadeOut 1s"

  setTimeout(function () {
    qna.style.animation = "fadeIn 1s"
    qna.style.WebkitAnimation = "fadeIn 1s"      
    setTimeout(function () {
      main.style.display = "none"
      qna.style.display = "block"
    }, 450);
  }, 450);
}