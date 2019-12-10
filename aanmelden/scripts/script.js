/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*aanmeldscherm javascript*/
var aanmeldContent = document.querySelector(".aanmeldContent");
var aanmeld = document.querySelector(".aanmeldcheck");
var inlog = document.querySelector(".inlogcheck");
var main = document.querySelector(".main");
function heightChange() {
    main.style.height =" 30em";  
}

function noHeightChange(){
    main.style.height =" 18.75em";
    aanmeldContent.style.opacity ="0";
}

function helderheid(){
    aanmeldContent.style.opacity ="1";
}



main.addEventListener("transitionend", helderheid);
aanmeld.addEventListener("click", heightChange);
inlog.addEventListener("click", noHeightChange);