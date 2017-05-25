$(document).ready(function() {

var infoloan = [
	{


		"form":"Credit card",
		"number":55
	},
	{
		"form":"Friends´ loans",
		"number":41
	},
	{	
		"form":"Student loans",
		"number":30
	},
	{
		"form":"Vehicule loans",
		"number":28
	},
	{
		"form":"Mortage",
		"number":21
	},
	{
		"form":"Consumer loans",
		"number":19
	},

	{

		"form":"Store card",
		"number":18
	},
	{
		"form":"Payday loans",
		"number":10
	},
	{	
		"form":"Others",
		"number":8
	},
	
	]


var myHtml = "";


/*
   <div class="barra">
		<div class="bar"></div>
   		<p class="label"></p>

   		Comentario de la función:
   		Declaro una variable i que inicia en el valor de cero. 
   		La condicion: for se comprende de tres cosas: 
   		Primero: es la declaracion de la variable que va a recorrer el arreglo.
   		Segundo: elemento es la condicion que va a evaluar mienttas esa condcion sea verdera.
   		Tercero: el elemento es el incremento de la variable que recorreglo el arreglo.
   </div>

*/
for (var i = 0; i < infoloan.length; i++){
    myHtml += '<div class="barra"> <div class="bar" title="'+infoloan[i].number+'%" style="height:' + (infoloan[i].number*4) + 'px;"></div> <p class="label">' + infoloan[i].form +  '</p> </div>';
    console.log("in loop",myHtml)

}

$(".barras").append(myHtml);
console.log("after loop",myHtml)

});