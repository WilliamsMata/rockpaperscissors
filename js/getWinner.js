const d = document;

// dom variables
export const $houseDiv = d.querySelector("#house > div"),
  $yourOptionDiv = d.querySelector("#you > div"),
  $houseImg = d.querySelector("#house img"),
  $textSpan = d.querySelector("#win-lose"),
  $scoreText = d.querySelector(".score__points"),
  $playAgainBtn = d.querySelector("#play-again"),
  $loader = d.querySelector(".lds-ellipsis");

const images = {
  paper: "images/icon-paper.svg",
  scissors: "images/icon-scissors.svg",
  rock: "images/icon-rock.svg",
};

/* Sound effect */
const victorySound = new Audio("sound/victory.mp3"),
  tieSound = new Audio("sound/tie.mp3"),
  defeatSound = new Audio("sound/defeat.mp3");

let points = 0;

function getWinner(yourSelection) {
  //paper = 0, scissors = 1, rock = 2;
  let you = yourSelection,
    house = Math.floor(Math.random() * 2.99),
    houseImg = Object.values(images)[house];

  // 2.5 second time out
  setTimeout(() => {
    /* Tie Option */
    if (you == house) {
      //sound
      tieSound.play();
      //text
      $textSpan.innerText = "TIE";
      // style
      $houseDiv.removeAttribute("class");
    } else if (
      /* You Win */
      (you === 0 && house === 2) ||
      (you === 1 && house === 0) ||
      (you === 2 && house === 1)
    ) {
      //sound
      victorySound.play();
      //text
      $textSpan.innerHTML = "YOU WIN";
      //styles
      $houseDiv.removeAttribute("class");
      $yourOptionDiv.classList.add("winner");
      //points
      points += 1;
    } else {
      /* You lose */
      //sound
      defeatSound.play();
      //text
      $textSpan.innerHTML = "YOU LOSE";
      //styles
      $houseDiv.removeAttribute("class");
      $houseDiv.classList.add("winner");
      //points
      points -= 1;
    }

    //points text
    $scoreText.innerText = points;
    //house img
    $houseImg.src = houseImg;
    //styles
    $loader.classList.add("lds-ellipsis__disabled");
    $playAgainBtn.classList.remove("disabled");
    $houseDiv.classList.add(`${Object.keys(images)[house]}__result`);
  }, 2500);
}

export default getWinner;
