//Даты и время
const myDate = document.getElementById('date');
let today = new Date();
let now = today.toLocaleString();

window.onload = function () {
  myDate.value = now;
};

//Мобильное меню
const btnOpen = document.getElementById('mobile-btn');
const navList = document.getElementById('mobile');

btnOpen.addEventListener('click', ()=> {
    navList.classList.toggle('nav-list-active');
})

function OnLoad() {
  document.getElementById("UsName").innerHTML = gup("id");
  document.getElementById("userMail").innerHTML = gup("userMail");
  document.getElementById("usText").innerHTML = gup("usText");
}

// Обработка с формы
const valueForm = window.location.search;

const urlParams = new URLSearchParams(valueForm);

const param1 = urlParams.get('name');
const param2 = urlParams.get('mail');
const param3 = urlParams.get('sex');
const param4 = urlParams.get('age');
const param5 = urlParams.get('textare');
const param6 = urlParams.get('checkbox');

const inpBrand = document.getElementById('p1');
const inpModel = document.getElementById('p2');
const inpMail = document.getElementById('p3');
const orderBr = document.getElementById('p4');
const orderModel = document.getElementById('p5');
const orderImgTitle = document.getElementById('p6');
/* const orderImgSub = document.getElementById('ord-model'); */


document.addEventListener("DOMContentLoaded", ()=> {
  inpBrand.value = param1;
  inpModel.value = param2;
  inpMail.value = param3;
  orderBr.value = param4;
  orderModel.value = param5;
  orderImgTitle.value = param6;
  /* orderImgSub.value = param2; */
});;