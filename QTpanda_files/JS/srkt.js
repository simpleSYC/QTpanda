
var QQQ=document.getElementsByTagName("aside")[0];var qqq=document.getElementById("qqQQ");

function openModal() {
if(document.getElementsByClassName("btn btn-info sc-cart-checkout")[0].classList.contains("disabled")==false){OPMD();	

sminka(true);
document.getElementById("contact").style.display = "block";var CLN=QQQ.cloneNode(true);qqQQ.appendChild(CLN);
//qqQQ.children[0].children[2].children[3].children[1].remove();
qqQQ.children[0].children[0].children[3].children[0].children[0].children[0].innerHTML=pre1;
qqQQ.children[0].children[0].children[3].remove();

}}
function closeModal() { sminka(false);
document.getElementById("contact").style.display = "none";document.getElementsByTagName("aside")[1].remove();
}

function sminka(a){
var NBR=document.getElementsByClassName("sc-cart-item-qty");
var XX=document.getElementsByClassName("sc-cart-remove");
if(a==true){
for(i=0;i<XX.length;i++){XX[i].style="display:none;";}
for(i=0;i<NBR.length;i++){NBR[i].type="text";NBR[i].disabled=true;}
}else{
for(i=0;i<XX.length;i++){XX[i].style="display:block;";}
for(i=0;i<NBR.length;i++){NBR[i].type="number";NBR[i].disabled=false;}
}}



//////////////////////


//filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
///////////////

function MESTENJE(a){
TTL.innerHTML=RUBRIKI[a];
FT_1.src=FOTKIrr[a][0];FT_2.src=FOTKIrr[a][1];
FT_1_INFO.innerHTML=F_TXTrr[a][0];FT_2_INFO.innerHTML=F_TXTrr[a][1];
VIDE.src=VIDsrc[a];
}


//////////////////////////

var sltxt=document.getElementById("SLtxt");
function openNav() {
  document.getElementById("mySidenav").style.width = 100+"vw";
    document.getElementById("pym").style="display:none;";
	document.getElementById("TST").style="display:block;";
	document.getElementById("tst").style="display:block;";}
	
function openPay(){
    document.getElementById("mySidenav").style.width = 100+"vw";
    document.getElementById("pym").style="display:block;";
	document.getElementById("TST").style="display:none;";
	document.getElementById("tst").style="display:none;";
	
	
	
	}
	
function opnPRT(a,n){sltxt.innerHTML=a.innerHTML;
for(i=0;i<3;i++){
if(n==0){document.getElementsByClassName("*A")[i].style="display:block;";
}else{document.getElementsByClassName("*A")[i].style="display:none;";}

if(n==1){document.getElementsByClassName("*B")[i].style="display:block;";
}else{document.getElementsByClassName("*B")[i].style="display:none;";}

if(n==2){document.getElementsByClassName("*C")[i].style="display:block;";
}else{document.getElementsByClassName("*C")[i].style="display:none;";}}}


function closeNav() {document.getElementById("mySidenav").style.width = "0";}
/////////////////////

var MMR;
var  NVimg;
var SPOJKA;

function MST_FOTOTO(N,a){ MMR=a.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].src;
 NVimg=MMR.slice(0,MMR.length-5);
 SPOJKA=NVimg+N+".jpg";
a.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].src=SPOJKA;}


////////////////////////////
var CC;
function ceni (a){
b=a.parentElement.parentElement.parentElement.children[0].src;
LOKALIZACIJA(b);
zaq();	
CC=ELMENTOS[A_KAT][N_KAT][18];

a.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML="&euro; "+CC;
a.previousElementSibling.previousElementSibling.value=CC;

	
}
////this.parentElement.parentElement.parentElement.children[0].src
//////////////////////

var A_KAT;var N_KAT;var M_KAT;
var GLMfto=[
GL_F_0=document.getElementById("GOLEMO_F_0"),
GL_F_1=document.getElementById("GOLEMO_F_1"),
GL_F_2=document.getElementById("GOLEMO_F_2"),
GL_F_3=document.getElementById("GOLEMO_F_3")];var ASCR;

function OPEN_F_MODEL(a){   ASCR=a.slice(0,a.length-5);//A2/6
LOKALIZACIJA(a);
currentSlide(1);

var slideIndex = 1;
showSlides(slideIndex);

document.getElementById("myModal_F").style="display:block";

for (i=0;i<IMAGER[A_KAT][N_KAT];i++){
GLMfto[i].src=ASCR+i+".jpg";}}

function LOKALIZACIJA(a){ 
A_KAT=a.slice(a.length-8,a.length-7);            // 8-5       //A2/6; //K25/1
N_KAT=parseInt(a.slice(a.length-7,a.length-6));  


if(A_KAT=="K"){A_KAT=0;}else
if(A_KAT=="V"){A_KAT=1;}else
if(A_KAT=="A"){A_KAT=2;}else
if(A_KAT=="T"){A_KAT=3;}else
if(A_KAT=="C"){A_KAT=4;}

}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesARTIKLITEE");
  var captionText = document.getElementById("captionSS");
  if (n >IMAGER[A_KAT][N_KAT]) {slideIndex = 1}
  if (n < 1) {slideIndex = IMAGER[A_KAT][N_KAT]}
  for (i = 0; i < IMAGER[A_KAT][N_KAT]; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}
	
