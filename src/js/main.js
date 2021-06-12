//here will by JavaScript code ...
console.log();

var a = 0;
var b = 1;
console.log(a && b);

if (a > b) {
    console.log('c');
} else {
    console.log('d');
}
// var el_1 = document.getElementById();
// var el_2 = document.getElementsByClassName();
// var el_3 = document.getElementsByTagName();
// var el_4 = document.getElementsByTagName();

var el = document.querySelector('p');
function clickHnadler(){
    console.log("click");
}
el.addEventListener('click', clickHnadler)

var menuEl = document.querySelector('.main-menu');
var btnEl = document.querySelector('.main-menu__btn-mobiie');

function toggleMenu(){
    menuEl.classList.toggle('open');
}

// btnEl.onclick = toggleMenu;
btnEl.addEventListener('click', toggleMenu);
