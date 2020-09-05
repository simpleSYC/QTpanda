
function DKMT_RDY(){ welcome ();
document.getElementsByClassName("btn btn-info sc-cart-checkout")[0].addEventListener("click", openModal);} 

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


function welcome (){document.getElementById("VD").style="display:none;";
TTL.innerHTML="Welcome";


FT_1.src="QTpanda_files/IMG/panada1000px.png";FT_1_INFO.innerHTML="QTpanda ecommerc <br><br><br>";
POP=true;
pops=["QTpanda_files/data/POP/0.jpg","ANGEBOTT  <br> ovaj artikal e na agebot <br><br><br>"]
if(POP){FT_2.src=pops[0];FT_2_INFO.innerHTML=pops[1];}}


///ova zafotochange
var MMR;
var  NVimg;
var SPOJKA;

function MST_FOTOTO(N,a){ MMR=a.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].src;
 NVimg=MMR.slice(0,MMR.length-5);
 SPOJKA=NVimg+N+".jpg";
a.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].src=SPOJKA;}


var i = 0;
var txt = 'click me for mor info.';
var speed = 50;
var SYOT= document.getElementById("ToSey");

setTimeout(typeWriter(),10*1000);

function typeWriter() {
  if (i < txt.length) {
   SYOT.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  setTimeout(delTE , 3*1000)
}
var tt=0;
function delTE() {
  if (txt.length>tt-1) {
    SYOT.innerHTML = SYOT.innerHTML.slice(0,txt.length-tt);
    tt++;
    setTimeout(delTE, speed*4);
}}

