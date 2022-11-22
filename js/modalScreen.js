function modalScreen(btnOpen, btnClose, modalDiv) {
  const $modalScreen = document.querySelector(modalDiv);

  document.addEventListener("click", (e) => {
    if (e.target.matches(`${btnOpen}`) || e.target.matches(`${btnOpen} > *`)) {
      $modalScreen.classList.add("active");
    }

    if (
      e.target.matches(`${btnClose}`) ||
      e.target.matches(`${btnClose} > *`) ||
      e.target.matches(`${modalDiv}`)
    ) {
      $modalScreen.classList.remove("active");
    }
  });
}

export default modalScreen;
