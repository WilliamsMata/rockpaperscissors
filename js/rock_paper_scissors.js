import getWinner, {
  $houseDiv,
  $houseImg,
  $textSpan,
  $playAgainBtn,
  $loader,
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
    // click paper
    if (
      e.target.matches(".paper") ||
      e.target.matches(".paper > *") ||
      e.target.matches(".paper > * > img")
    ) {
      //styles
      yourOption = "paper__result";
      $yourOptionDiv.classList.add(yourOption);
      $yourOptionImg.src = "images/icon-paper.svg";
      //functions
      changeScreen();
      getWinner(0);
    }

    //click scissors
    if (
      e.target.matches(".scissors") ||
      e.target.matches(".scissors > *") ||
      e.target.matches(".scissors > * > img")
    ) {
      //styles
      yourOption = "scissors__result";
      $yourOptionDiv.classList.add(yourOption);
      $yourOptionImg.src = "images/icon-scissors.svg";
      //function
      changeScreen();
      getWinner(1);
    }

    // click rock
    if (
      e.target.matches(".rock") ||
      e.target.matches(".rock > *") ||
      e.target.matches(".rock > * > img")
    ) {
      //styles
      yourOption = "rock__result";
      $yourOptionDiv.classList.add(yourOption);
      $yourOptionImg.src = "images/icon-rock.svg";
      //function
      changeScreen();
      getWinner(2);
    }

    //click play again
    if (
      e.target.matches("#play-again") ||
      e.target.matches("#play-again > *")
    ) {
      //funtion
      changeScreen();
      //styles
      $houseDiv.removeAttribute("class");
      $houseImg.removeAttribute("src");
      $houseDiv.classList.remove("winner");
      $yourOptionDiv.classList.remove(yourOption);
      $yourOptionDiv.classList.remove("winner");
      $houseDiv.classList.add("loading");
      $playAgainBtn.classList.add("disabled");
      $loader.classList.remove("lds-ellipsis__disabled");
      $textSpan.innerText = "";
    }
  });
}

export default rockPaperScissors;
