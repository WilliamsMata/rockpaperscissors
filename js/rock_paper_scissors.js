import getWinner, {
  $houseDiv,
  $houseImg,
  $textSpan,
  $playAgainBtn,
} from "./getWinner.js";

const d = document;

const $gameOptions = d.querySelector(".game__options"),
  $gameResult = d.querySelector(".result");

const $yourOptionDiv = d.querySelector("#you > div"),
  $yourOptionImg = d.querySelector("#you img");

function changeScreen() {
  $gameOptions.classList.toggle("disabled");
  $gameResult.classList.toggle("disabled");
}

let yourOption;

function rockPaperScissors() {
  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".paper") ||
      e.target.matches(".paper > *") ||
      e.target.matches(".paper > * > img")
    ) {
      yourOption = "paper__result";
      $yourOptionDiv.classList.add(yourOption);
      $yourOptionImg.src = "images/icon-paper.svg";
      changeScreen();
      getWinner(0);
    }

    if (
      e.target.matches(".scissors") ||
      e.target.matches(".scissors > *") ||
      e.target.matches(".scissors > * > img")
    ) {
      yourOption = "scissors__result";
      $yourOptionDiv.classList.add(yourOption);
      $yourOptionImg.src = "images/icon-scissors.svg";
      changeScreen();
      getWinner(1);
    }

    if (
      e.target.matches(".rock") ||
      e.target.matches(".rock > *") ||
      e.target.matches(".rock > * > img")
    ) {
      yourOption = "rock__result";
      $yourOptionDiv.classList.add(yourOption);
      $yourOptionImg.src = "images/icon-rock.svg";
      changeScreen();
      getWinner(2);
    }

    if (
      e.target.matches("#play-again") ||
      e.target.matches("#play-again > *")
    ) {
      changeScreen();
      $houseDiv.removeAttribute("class");
      $houseImg.removeAttribute("src");
      $textSpan.innerText = "";
      $houseDiv.classList.add("loading");
      $houseDiv.classList.remove("winner");
      $yourOptionDiv.classList.remove(yourOption);
      $yourOptionDiv.classList.remove("winner");
      $playAgainBtn.classList.add("disabled");
    }
  });
}

export default rockPaperScissors;
