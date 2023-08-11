const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endpoint = 12;
const select = [0,0,0,0,0,0,0,0,0,0,0,0];

function calResult() {
  let result = select.indexOf(Math.max(...select));
  return result;
}

function setResult() {
  let point = calResult();
  const resultName = document.querySelector(".resultname");
  resultName.innerHTML = infoList[point].name;

  const resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  let imgUrl = 'img/image-' + point + '.png';
  resultImg.src = imgUrl;
  resultImg.alt = point; 
  resultImg.classList.add("img-fluid");
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector(".resultdesc");
  resultDesc.innerHTML = infoList[point].desc;

}

function goResult() {
  qna.style.animation = "fadeOut 1s"
  qna.style.WebkitAnimation = "fadeOut 1s"

  setTimeout(function () {
    result.style.animation = "fadeIn 1s"
    result.style.WebkitAnimation = "fadeIn 1s"      
    setTimeout(function () {
      qna.style.display = "none"
      result.style.display = "block"
    }, 450);
  }, 450);

  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  let a = document.querySelector(".answerBox");
  let answer = document.createElement("button");
  answer.classList.add("answerList")
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("mx-auto");
  answer.classList.add("fadeIn");

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function() {
    let children = document.querySelectorAll(".answerList");
    for (let i=0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.animation = "fadeOut 0.5s"
      children[i].style.WebkitAnimation = "fadeOut 0.5s"
    }
    setTimeout(function () {
    let target = qnaList[qIdx].a[idx].type;
    for (let i=0; i < target.length; i++) {
      select[target[i]] +=1; 
    }
    for (let i=0; i < children.length; i++) {
      children[i].style.display = "none";
    }
    goNext(++qIdx);
    }, 450);
  } , false);
}

function goNext(qIdx) {
    if (qIdx === endpoint) {
      goResult();
      return;
    }
    let q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;

    for (let i in qnaList[qIdx].a) {
      addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    let status = document.querySelector(".statusBar");
    status.style.width = (100/endpoint)*(qIdx+1)+'%';
}

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
    let qIdx = 0;
    goNext(qIdx)
  }, 450);
}