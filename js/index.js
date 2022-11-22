import modalScreen from "./modalScreen.js";
import rockPaperScissors from "./rock_paper_scissors.js";

document.addEventListener("DOMContentLoaded", () => {
  modalScreen("#modal-open", "#modal-close", "#modal-screen");

  rockPaperScissors();
});
