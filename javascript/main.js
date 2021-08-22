const nameText = document.querySelector(".name-tag__body__name");
const visitorText = document.querySelector(".name-tag__body__visit");

const nameAni = document.querySelector(".name-tag");
const mainAni = document.querySelector(".main");
const bgAni = document.querySelector(".bg-img-box");

nameText.innerText = localStorage.getItem("name");
visitorText.innerText = localStorage.getItem("position");

function loadMain(){
  nameAni.classList.remove('name-ani');
  nameAni.classList.add('hidden');
  mainAni.classList.remove('main-ani');
  // mainAni.classList.add('new-main-ani');
  // bgAni.classList.ass('new-main-ani');
  bgAni.classList.remove('main-ani');
}

mainAni.addEventListener("change",loadMain);