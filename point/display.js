function act1(){
	for (let i = 0; i < men1.length; i++){
		if (men1[0].checked){
			dis1.style.display="none";
		}else{
			dis1.style.display="";
		}
	}
}

function act2(){
	for (let i = 0; i < men2.length; i++){
		if (men2[0].checked){
			dis2.style.display="none";
		}else{
			dis2.style.display="";
		}
	}
}

function act3(){
	for (let i = 0; i < men3.length; i++){
		if (men3[0].checked){
			dis3.style.display="none";
		}else{
			dis3.style.display="";
		}
	}
}

function act4(){
	for (let i = 0; i < men4.length; i++){
		if (men4[0].checked){
			dis4.style.display="none";
		}else{
			dis4.style.display="";
		}
	}
}

function act5(){
	if (yaku.checked){
		dabu.disabled = false;
	}else{
		dabu.disabled = true;
		dabu.checked = false;
	}
}

function act6(){
	for (let i = 0; i < early.length; i++){
		if (!early[2].checked){
			mendetails.style.display="none";
			heads.style.display="none";
			wait.style.display="none";
		}else{
			mendetails.style.display="";
			heads.style.display="";
			wait.style.display="";
		}
	}
}

men1.forEach(r => r.addEventListener("change",act1));
men2.forEach(r => r.addEventListener("change",act2));
men3.forEach(r => r.addEventListener("change",act3));
men4.forEach(r => r.addEventListener("change",act4));

yaku.addEventListener("change",act5);

early.forEach(r => r.addEventListener("change",act6));
