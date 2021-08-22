const nameText = document.querySelector(".name-tag__body__name");
const visitorText = document.querySelector(".name-tag__body__visit");

const nameAni = document.querySelector(".name-tag");
const mainAni = document.querySelector(".main");
const bgAni = document.querySelector(".bg-img-box");

nameText.innerText = localStorage.getItem("name");
visitorText.innerText = localStorage.getItem("position");
