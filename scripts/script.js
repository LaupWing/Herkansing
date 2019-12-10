/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*var slider = document.getElementById("slider");*/
/*var output = document.getElementById("demo");*/
var open = document.getElementById("mobielaside");
var close = document.getElementById("closebtn");
var plus = document.getElementById("plusicon1");
var like = document.getElementById("like");
var sluiten = document.getElementById("sluiten");
var toevoegen = document.querySelector(".toevoegen");
var toevoegbtn = document.getElementById("myBtn");







/* Slicder funcite*/
/*slider.oninput = function() {
  output.innerHTML = this.value;
}*/

/* openen van nav mobiel*/
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    
}
/* sluiten van nav mobiel*/
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


function plusArtikel(){
    var source = plus.getAttribute('src');
    if (source == 'img/Plus.png') {
        plus.setAttribute('src', 'img/Vinkje.png');
        plus.classList.add('scale');
    
    } else {
        plus.setAttribute('src', 'img/Plus.png');
    }
}

function likeArtikel(){
    var source = like.getAttribute('src');
    if (source == 'img/Likes.png') {
        like.setAttribute('src', 'img/iLike.png');
        like.classList.add('scale');
    
    } else {
        like.setAttribute('src', 'img/Likes.png');
    }
}

function removePlusTransition(){
    plus.classList.remove('scale');
}
function removeLikeTransition(){
    like.classList.remove('scale');
}

var check1=document.getElementById("one");
var check2=document.getElementById("two");


function test(){
    if (check1.checked == true){
    document.getElementById("myBtn").disabled = false; 
  } else {
    document.getElementById("myBtn").disabled = true; 
  }
}

function test2(){
    if (check2.checked == true){
    document.getElementById("myBtn").disabled = false; 
  } else {
    document.getElementById("myBtn").disabled = true; 
  }
}

function toevoegenSluiten(){
    toevoegen.style.display = "none";
}
function toevoegenOpen(){
    toevoegen.style.display = "block";
}





// toevoegbtn.addEventListener("click", toevoegenSluiten);
// sluiten.addEventListener("click", toevoegenSluiten);
// check1.addEventListener("click", test);
// check2.addEventListener("click", test2);

// like.addEventListener("transitioned", removeLikeTransition);
// like.addEventListener("click", likeArtikel);

// plus.addEventListener("transitionend", removePlusTransition);
// toevoegbtn.addEventListener("click", plusArtikel);


// plus.addEventListener("click", toevoegenOpen);
// open.addEventListener("click", openNav);
// close.addEventListener("click", closeNav);
// close.addEventListener("click", closeNav);
