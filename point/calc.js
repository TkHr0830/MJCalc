var me1=me2=me3=me4=jt=mc=ag=ft=0;
var FuBefore=FuAfter=0;
var hon = 0;
var base = [0,0,0,0];
var point = [0,0,0,0];
var pointsub = [0,0,0,0];
var pointtext = ["","","",""];

function mencalc1(){
	for (let i = 0; i < men1.length; i++){
		if (men1[i].checked){
			x1 = men1[i].value;
		}
	}
	for (let i = 0; i < su1.length; i++){
		if (su1[i].checked){
			y1 = su1[i].value;
		}
	}
	if (fu1.checked){
		z1 = fu1.value;
	}else{
		z1 = 1;
	}
}

function mencalc2(){
	for (let i = 0; i < men2.length; i++){
		if (men2[i].checked){
			x2 = men2[i].value;
		}
	}
	for (let i = 0; i < su2.length; i++){
		if (su2[i].checked){
			y2 = su2[i].value;
		}
	}
	if (fu2.checked){
		z2 = fu2.value;
	}else{
		z2 = 1;
	}
}

function mencalc3(){
	for (let i = 0; i < men3.length; i++){
		if (men3[i].checked){
			x3 = men3[i].value;
		}
	}
	for (let i = 0; i < su3.length; i++){
		if (su3[i].checked){
			y3 = su3[i].value;
		}
	}
	if (fu3.checked){
		z3 = fu3.value;
	}else{
		z3 = 1;
	}
}

function mencalc4(){
	for (let i = 0; i < men4.length; i++){
		if (men4[i].checked){
			x4 = men4[i].value;
		}
	}
	for (let i = 0; i < su4.length; i++){
		if (su4[i].checked){
			y4 = su4[i].value;
		}
	}
	if (fu4.checked){
		z4 = fu4.value;
	}else{
		z4 = 1;
	}
}

function FuCalc(){
	personCheck();
	agariCheck();
	earlyCheck();
	tC = pC+aC+eC;
	if (tC != ""){
		error.innerText = "以下の項目に入力漏れがあります"+tC;
		output1.style.display = "none";
		output2.style.display = "none";
		}else if (early[0].checked){
		output1.style.display = "";
		output2.style.display = "";
		me1=me2=me3=me4=jt=mc=ag=ft=0;
		mentsu1.innerText = mentsu2.innerText = mentsu3.innerText = mentsu4.innerText ="-";
		janto.innerText = machifu.innerText = kafu.innerText = futei.innerText ="-";
		FuBefore = FuAfter = 25;
		sum.innerText = FuAfter+"符"
	}else if (early[1].checked){
		error.innerText = "";
		output1.style.display = "";
		output2.style.display = "";
		me1=me2=me3=me4=jt=mc=0;
		ft = 20;
		if (agari[0].checked){
		kafu.innerText = 10;
		ag = 10;
		}else if (menzen.checked){
		kafu.innerText = "-";
		ag = 0;
		}else{
		kafu.innerText = 2;
		ag = 2;
		}
		mentsu1.innerText = mentsu2.innerText = mentsu3.innerText = mentsu4.innerText = 0;
		janto.innerText = machifu.innerText = 0;
		futei.innerText = ft;
		FuBefore =  ag+ft;
		FuAfter = 10*Math.ceil(FuBefore/10);
		sum.innerText = FuBefore + "→" + FuAfter + "符";
	}else{
		men1Check();
		men2Check();
		men3Check();
		men4Check();
		waitCheck();
		tC = mC1+mC2+mC3+mC4+wC;
		if (tC != ""){
			error.innerText = "以下の項目に入力漏れがあります"+tC;
			output1.style.display = "none";
			output2.style.display = "none";
		}else{
			error.innerText = "";
			mencalc1();
			mencalc2();
			mencalc3();
			mencalc4();
			me1 = x1*y1*z1;
			me2 = x2*y2*z2;
			me3 = x3*y3*z3;
			me4 = x4*y4*z4;
			mentsu1.innerText = me1;
			mentsu2.innerText = me2;
			mentsu3.innerText = me3;
			mentsu4.innerText = me4;
			ft = 20;
			if (yaku.checked){
				if (dabu.checked){
					jt = dabu.value;
					}else{
					jt = yaku.value;
					}
				}else{
				jt = 0;
			}
			if (agari[1].checked){
				ag = 2;
			}else if (menzen.checked){
				ag = 10;
			}else{
				ag = 0;
			}
			if (machi[1].checked){
				mc = 2;
			}else{
				mc = 0;
			}
			FuBefore = me1+me2+me3+me4+(+jt)+(+mc)+(+ag)+(+ft);
			if (me1+me2+me3+me4+(+jt)+(+mc) === 0){
				alert("それは平和形ですよね？");
				output1.style.display = "none";
				output2.style.display = "none";
			}else{
			output1.style.display = "";
			output2.style.display = "";
			janto.innerText = jt;
			machifu.innerText = mc;
			kafu.innerText = ag;
			futei.innerText = ft;
			FuAfter = 10*Math.ceil(FuBefore/10);
			sum.innerText = FuBefore + "→" + FuAfter + "符";
			}
		}
	}
}

function TenCalc(){
	hon = homba.value;
	if (person[0].checked){
		if (agari[0].checked){
			for (let i = 0; i < base.length; i++){
				base[i] = FuAfter*2**(i+3);
				if (base[i] > 2000){
					point[i] = 12000+300*hon;
				}else{
					point[i] = 100*Math.ceil(base[i]*6/100)+300*hon;
				}
				pointtext[i] = point[i];
			}
			if (FuAfter === 25){
				pointtext[0] = "-";
			}else if ((FuAfter === 30)&&kiriman.checked){
				pointtext[3] = 12000+300*hon;
			}else if ((FuAfter === 60)&&kiriman.checked){
				pointtext[2] = pointtext[3] = 12000+300*hon;
			}
		}else{
			for (let i = 0; i < base.length; i++){
				base[i] = FuAfter*2**(i+3);
				if (base[i] > 2000){
					point[i] = 4000+100*hon;
				}else{
					point[i] = 100*Math.ceil(base[i]*2/100)+100*hon;
				}
				pointtext[i] = point[i]+"オール";
			}
			if (FuAfter === 20){
				pointtext[0] = "-";
			}else if (FuAfter === 25){
				pointtext[0] = pointtext[1] = "-";
			}else if ((FuAfter === 30)&&kiriman.checked){
				pointtext[3] = 4000+100*hon+"オール";
			}else if ((FuAfter === 60)&&kiriman.checked){
				pointtext[2] = pointtext[3] = 4000+100*hon+"オール";
			}
		}
	}else{
		if (agari[0].checked){
			for (let i = 0; i < base.length; i++){
				base[i] = FuAfter*2**(i+3);
				if (base[i] > 2000){
					point[i] = 8000+300*hon;
				}else{
					point[i] = 100*Math.ceil(base[i]*4/100)+300*hon;
				}
				pointtext[i] = point[i];
			}
			if (FuAfter === 25){
				pointtext[0] = "-";
			}else if ((FuAfter === 30)&&kiriman.checked){
				pointtext[3] = 8000+300*hon;
			}else if ((FuAfter === 60)&&kiriman.checked){
				pointtext[2] = pointtext[3] = 8000+300*hon;
			}
		}else{
			for (let i = 0; i < base.length; i++){
				base[i] = FuAfter*2**(i+3);
				if (base[i] > 2000){
					point[i] = 2000+100*hon;
					pointsub[i] = 4000+100*hon;
				}else{
					point[i] = 100*Math.ceil(base[i]/100)+100*hon;
					pointsub[i] = 100*Math.ceil(base[i]*2/100)+100*hon;
				}
				pointtext[i] = point[i]+"-"+pointsub[i];
			}
			if (FuAfter === 20){
				pointtext[0] = "-";
			}else if (FuAfter === 25){
				pointtext[0] = pointtext[1] = "-";
			}else if ((FuAfter === 30)&&kiriman.checked){
				pointtext[3] = (2000+100*hon)+"-"+(4000+100*hon);
			}else if ((FuAfter === 60)&&kiriman.checked){
				pointtext[2] = pointtext[3] = (2000+100*hon)+"-"+(4000+100*hon);
			}
		}
	}
	ihan.innerText = pointtext[0];
	ryanhan.innerText = pointtext[1];
	sanhan.innerText = pointtext[2];
	suhan.innerText = pointtext[3];
}

function calcuration(){
	FuCalc();
	TenCalc();
}

calc.addEventListener("click",calcuration);
