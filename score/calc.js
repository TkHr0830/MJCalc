let ichii = document.getElementById("ichii");
let nii = document.getElementById("nii");
let sani = document.getElementById("sani");
let yoni = document.getElementById("yoni");

let haigen = document.getElementById("haigen");
let kaeshi = document.getElementById("kaeshi");

let uma1 = document.getElementById("uma1");
let uma2 = document.getElementById("uma2");

so1 = document.getElementById("so1");
so2 = document.getElementById("so2");
so3 = document.getElementById("so3");
so4 = document.getElementById("so4");

function act(){
	ichii.value = haigen.value*4 - nii.value - sani.value - yoni.value;
	so2.innerText = Math.round(nii.value-kaeshi.value+10*uma1.value)/10;
	so3.innerText = Math.round(sani.value-kaeshi.value-10*uma1.value)/10;
	so4.innerText = Math.round(yoni.value-kaeshi.value-10*uma2.value)/10;
	so1.innerText = Math.round(-nii.value-sani.value-yoni.value+3*kaeshi.value+10*uma2.value)/10;
}

nii.addEventListener("change",act);
sani.addEventListener("change",act);
yoni.addEventListener("change",act);
haigen.addEventListener("change",act);
kaeshi.addEventListener("change",act);
uma1.addEventListener("change",act);
uma2.addEventListener("change",act);
