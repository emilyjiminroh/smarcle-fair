const loginNameForm = document.querySelector(".form-name");
const loginPositionForm = document.querySelector(".form-position");
const loginNameInput = document.querySelector(".input-name");
const loginPositionInput = document.querySelector(".input-position");

const loginName = document.querySelector(".name");
const loginPosition = document.querySelector(".position");

const CLASS_HIDDEN = "hidden";

const NAME_KEY = "name";
const POSITION_KEY = "position";

function nameSubmit(event) {
  event.preventDefault();
  loginNameForm.classList.add(CLASS_HIDDEN);
  const name =loginNameInput.value;
  localStorage.setItem(NAME_KEY, name);
  paintName();
}

function positionSubmit(event) {
  event.preventDefault();
  loginPositionForm.classList.add(CLASS_HIDDEN);
  const position =loginPositionInput.value;
  localStorage.setItem(POSITION_KEY, position);
  paintPosition();
}

function paintName() {
  const name = localStorage.getItem(NAME_KEY);
  loginName.innerText = `Hello ${name}`;
  loginName.classList.remove(CLASS_HIDDEN);
}

function paintPosition() {
  const position = localStorage.getItem(POSITION_KEY);
  loginPosition.innerText = `Hello ${position}`;
  loginPosition.classList.remove(CLASS_HIDDEN);
}

const savedName = localStorage.getItem(NAME_KEY);
const savedPosition = localStorage.getItem(POSITION_KEY);

if (savedName === null) {
  loginNameForm.classList.remove(CLASS_HIDDEN);
  loginNameForm.addEventListener("submit", nameSubmit);
} else {
  paintName();
  paintPosition();
}

if (savedPosition === null) {
  loginPositionForm.classList.remove(CLASS_HIDDEN);
  loginPositionForm.addEventListener("submit", positionSubmit);
} else {
  paintName();
  paintPosition();
}