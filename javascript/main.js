const nameText = document.querySelector(".name-tag__body__name");
const visitorText = document.querySelector(".name-tag__body__visit");

nameText.innerText = localStorage.getItem("NAME_KEY");
visitorText.innerText = localStorage.getItem("POSITION_KEY");