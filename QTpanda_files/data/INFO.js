
var INFOa=document.getElementsByClassName("*A");

var INFOb=document.getElementsByClassName("*B");

var INFOc=document.getElementsByClassName("*C");

var INFOS=[INFOa,INFOb,INFOc];

var INFO=[
[//// about
["Welcome to QTpanda ecommerc shop"],
["tukaaa ke ima nekoje izmisleno tekstce"],
["daa ova ka e jaka rabora "]],
[///bexl
["pismena instrukci da im se dadae"],
["da im se dade video u ovaj del"],
["podrska pravi mcgc commerco"]],//////
[// contact
["moze da me kontaktirate na:"],
[" za kundina prasana i poplaki"],
[" za B2B prasanja i poplaki emailot od mcgc "]]/////
]



for(i=0;i<3;i++){
	
	for(q=0;q<3;q++){
	
		INFOS[i][q].innerHTML=INFO[i][q];	
	}
	
}
