let shift = document.getElementById("shift");
let alt = document.getElementById("alt");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let upKey = document.getElementById("up-key");

// { and } brackets

// Function to clear the highlighted keys //
clearPreviousHighlight = () => {
  shift.classList.remove("selected-command");
  alt.classList.remove("selected-command");
  num7.classList.remove("selected-command");
  num8.classList.remove("selected-command");
  num9.classList.remove("selected-command");
  upKey.classList.remove("selected-command");
};

// seperated functions to call the clearPreviousHighlight function as well as highlight new keys //
curlyBraceOpen = () => {
  clearPreviousHighlight();
  shift.classList.toggle("selected-command");
  alt.classList.toggle("selected-command");
  num8.classList.toggle("selected-command");
};

curlyBraceClose = () => {
  clearPreviousHighlight();
  shift.classList.toggle("selected-command");
  alt.classList.toggle("selected-command");
  num9.classList.toggle("selected-command");
};

squareBracksOpen = () => {
  clearPreviousHighlight();
  alt.classList.toggle("selected-command");
  num8.classList.toggle("selected-command");
};

squareBracksClose = () => {
  clearPreviousHighlight();
  alt.classList.toggle("selected-command");
  num9.classList.toggle("selected-command");
};

squiggleKey = () => {
  clearPreviousHighlight();
  alt.classList.toggle("selected-command");
  upKey.classList.toggle("selected-command");
};

orSymbol = () => {
  clearPreviousHighlight();
  alt.classList.toggle("selected-command");
  num7.classList.toggle("selected-command");
};
