
/** se declara la funcion **/
function calculomontopresta () {
	montoprestamo = parseFloat(document.getElementById("montodeprestamo").value);
	tasainteres = parseFloat(document.getElementById("tasainteres").value);
	plazodepago = parseFloat(document.getElementById("plazopago").value);
	montotal = 0
	interes = montoprestamo*(tasainteres/100)
	pagototal = (interes*plazodepago)+montoprestamo
	if(!isNaN(pagototal))
	{
		document.getElementById("resultado").textContent=pagototal.toFixed(2);
	}
	else {
		document.getElementById("resultado").textContent="";
	}
/** estoy obteniendo el valor del elemnento con los diferentes nomvbres*/
}
