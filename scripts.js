highlightCurlyBracks = () => {
  let selectorOne = document.getElementById("shift");
  selectorOne.classList.toggle("selected-command");
  let selectorTwo = document.getElementById("alt");
  selectorTwo.classList.toggle("selected-command");
  let selectorThree = document.getElementById("num8");
  selectorThree.classList.toggle("selected-command");
};
