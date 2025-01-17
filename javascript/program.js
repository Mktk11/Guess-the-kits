/* 
quero fazer com que o input
e o button estejam interligados
 */

//---- Váriaveis ----

var num_cliques = 0;
var resultado;
var num;
var image;


//--- Funções -----
function botaoImagem(num){
	if(num==1){
		document.getElementById("troca").style.visibility = 'visible'
		document.getElementById("troca2").style.visibility = 'hidden'
		document.getElementById("troca3").style.visibility = 'hidden'
		document.getElementById("troca4").style.visibility = 'hidden'
	}
	else if(num==2){
		document.getElementById("troca").style.visibility = 'hidden'
		document.getElementById("troca2").style.visibility = 'visible'
		document.getElementById("troca3").style.visibility = 'hidden'
		document.getElementById("troca4").style.visibility = 'hidden'
	}
	else if(num==3){
		document.getElementById("troca").style.visibility = 'hidden'
		document.getElementById("troca2").style.visibility = 'hidden'
		document.getElementById("troca3").style.visibility = 'visible'
		document.getElementById("troca4").style.visibility = 'hidden'
	}
	else if(num==4){
		document.getElementById("troca").style.visibility = 'hidden'
		document.getElementById("troca2").style.visibility = 'visible'
		document.getElementById("troca3").style.visibility = 'hidden'
		document.getElementById("troca4").style.visibility = 'hidden'
	}
	else{
		document.getElementById("troca").style.visibility = 'hidden'
		document.getElementById("troca2").style.visibility = 'hidden'
		document.getElementById("troca3").style.visibility = 'hidden'
		document.getElementById("troca4").style.visibility = 'visible'
	}
	console.log(num);

}


function modificaImagem(){
	document.getElementById("troca").style.visibility = 'hidden'
	num_cliques += 1;
	if(num_cliques==1){
		document.getElementById("troca2").style.visibility = 'visible'
		document.getElementById("2").disabled = false;
		/*image.src = "../imagens/kit02.jpg"*/
	}
	else if(num_cliques==2){
		document.getElementById("troca3").style.visibility = 'visible'
		document.getElementById("3").disabled = false;
		/*image.src = "../imagens/kit03.jpg"*/
	}
	else if(num_cliques==3){
		document.getElementById("troca3").style.visibility = 'hidden'
		document.getElementById("troca2").style.visibility = 'visible'
		document.getElementById("4").disabled = false;
	}
	else if(num_cliques==4){
		document.getElementById("troca2").style.visibility = 'hidden'
		document.getElementById("troca4").style.visibility = 'visible'
		document.getElementById("5").disabled = false;
		document.getElementById("Skip").disabled = true;
	}
	console.log(num_cliques);
}



