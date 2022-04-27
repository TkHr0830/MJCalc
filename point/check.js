var x1=y1=z1=1;
var x2=y2=z2=1;
var x3=y3=z3=1;
var x4=y4=z4=1;

var tC=pC=aC=eC=wC="";
var mC1=mC2=mC3=mC4="";

function personCheck(){
	if (!(person[0].checked || person[1].checked)){
		pC = "\n・親子設定";
	}else{
		pC = "";
	}
}

function agariCheck(){
	if (!(agari[0].checked || agari[1].checked)){
		aC = "\n・和了形式";
	}else{
		aC = "";
	}
}

function earlyCheck(){
	if (!(early[0].checked || early[1].checked || early[2].checked)){
		eC = "\n・牌姿";
	}else{
		eC = "";
	}
}

function men1Check(){
	if (!(men1[0].checked || men1[1].checked || men1[2].checked)||!(men1[0].checked || su1[0].checked || su1[1].checked)){
		mC1 = "\n・面子1";
	}else{
		mC1 = "";
	}
}

function men2Check(){
	if (!(men2[0].checked || men2[1].checked || men2[2].checked)||!(men2[0].checked || su2[0].checked || su2[1].checked)){
		mC2 = "\n・面子2";
	}else{
		mC2 = "";
	}
}

function men3Check(){
	if (!(men3[0].checked || men3[1].checked || men3[2].checked)||!(men3[0].checked || su3[0].checked || su3[1].checked)){
		mC3 = "\n・面子3";
	}else{
		mC3 = "";
	}
}

function men4Check(){
	if (!(men4[0].checked || men4[1].checked || men4[2].checked)||!(men4[0].checked || su4[0].checked || su4[1].checked)){
		mC4 = "\n・面子4";
	}else{
		mC4 = "";
	}
}

function waitCheck(){
	if (!(machi[0].checked || machi[1].checked)){
		wC = "\n・待ち";
	}else{
		wC = "";
	}
}
