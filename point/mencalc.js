var x1=y1=z1=1;
var x2=y2=z2=1;
var x3=y3=z3=1;
var x4=y4=z4=1;
var a = 0;

let mentsu1 = document.getElementById("mentsu1");
let dis1 = document.getElementById("dis1");
let men1 = document.getElementsByName("men1");
let su1 = document.getElementsByName("su1");
let fu1 = document.getElementById("fu1");

let mentsu2 = document.getElementById("mentsu2");
let dis2 = document.getElementById("dis2");
let men2 = document.getElementsByName("men2");
let su2 = document.getElementsByName("su2");
let fu2 = document.getElementById("fu2");

let mentsu3 = document.getElementById("mentsu3");
let dis3 = document.getElementById("dis3");
let men3 = document.getElementsByName("men3");
let su3 = document.getElementsByName("su3");
let fu3 = document.getElementById("fu3");

let mentsu4 = document.getElementById("mentsu4");
let dis4 = document.getElementById("dis4");
let men4 = document.getElementsByName("men4");
let su4 = document.getElementsByName("su4");
let fu4 = document.getElementById("fu4");

let yaku = document.getElementById("yaku");
let dabu = document.getElementById("dabu");
let janto = document.getElementById("janto");

function actx1(){
	for (let i = 0; i < men1.length; i++){
		if (men1.item(i).checked){
			x1 = men1.item(i).value;
		}
	}
	if (men1.item(0).checked){
		dis1.style.display="none";
	}else{
		dis1.style.display="";
	}
	mentsu1.innerText = x1*y1*z1;
}

function acty1(){
	for (let i = 0; i < su1.length; i++){
		if (su1.item(i).checked){
			y1 = su1.item(i).value;
		}
	}
	mentsu1.innerText = x1*y1*z1;
}

function actz1(){
	if (fu1.checked){
		z1 = fu1.value;
	}else{
		z1 = 1;
	}
	mentsu1.innerText = x1*y1*z1;
}

function actx2(){
	for (let i = 0; i < men2.length; i++){
		if (men2.item(i).checked){
			x2 = men2.item(i).value;
		}
	}
	if (men2.item(0).checked){
		dis2.style.display="none";
	}else{
		dis2.style.display="";
	}
	mentsu2.innerText = x2*y2*z2;
}

function acty2(){
	for (let i = 0; i < su2.length; i++){
		if (su2.item(i).checked){
			y2 = su2.item(i).value;
		}
	}
	mentsu2.innerText = x2*y2*z2;
}

function actz2(){
	if (fu2.checked){
		z2 = fu2.value;
	}else{
		z2 = 1;
	}
	mentsu2.innerText = x2*y2*z2;
}

function actx3(){
	for (let i = 0; i < men3.length; i++){
		if (men3.item(i).checked){
			x3 = men3.item(i).value;
		}
	}
	if (men3.item(0).checked){
		dis3.style.display="none";
	}else{
		dis3.style.display="";
	}
	mentsu3.innerText = x3*y3*z3;
}

function acty3(){
	for (let i = 0; i < su3.length; i++){
		if (su3.item(i).checked){
			y3 = su3.item(i).value;
		}
	}
	mentsu3.innerText = x3*y3*z3;
}

function actz3(){
	if (fu3.checked){
		z3 = fu3.value;
	}else{
		z3 = 1;
	}
	mentsu3.innerText = x3*y3*z3;
}

function actx4(){
	for (let i = 0; i < men4.length; i++){
		if (men4.item(i).checked){
			x4 = men4.item(i).value;
		}
	}
	if (men4.item(0).checked){
		dis4.style.display="none";
	}else{
		dis4.style.display="";
	}
	mentsu4.innerText = x4*y4*z4;
}

function acty4(){
	for (let i = 0; i < su4.length; i++){
		if (su4.item(i).checked){
			y4 = su4.item(i).value;
		}
	}
	mentsu4.innerText = x4*y4*z4;
}

function actz4(){
	if (fu4.checked){
		z4 = fu4.value;
	}else{
		z4 = 1;
	}
	mentsu4.innerText = x4*y4*z4;
}

function acta(){
	if (yaku.checked){
		dabu.disabled = false;
		a = yaku.value;
		if (dabu.checked){
			a = dabu.value;
		}else{
			a = yaku.value;
		}
	}else{
		dabu.disabled = true;
		dabu.checked = false;
		a = 0;
	}
	janto.innerText = a;
}

men1.forEach(r => r.addEventListener("change",actx1));
su1.forEach(r => r.addEventListener("change",acty1));
fu1.addEventListener("change",actz1);

men2.forEach(r => r.addEventListener("change",actx2));
su2.forEach(r => r.addEventListener("change",acty2));
fu2.addEventListener("change",actz2);

men3.forEach(r => r.addEventListener("change",actx3));
su3.forEach(r => r.addEventListener("change",acty3));
fu3.addEventListener("change",actz3);

men4.forEach(r => r.addEventListener("change",actx4));
su4.forEach(r => r.addEventListener("change",acty4));
fu4.addEventListener("change",actz4);

yaku.addEventListener("change",acta);
dabu.addEventListener("change",acta);
