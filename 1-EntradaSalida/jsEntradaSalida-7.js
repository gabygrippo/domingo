/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
        var primernumero;
	    var segundonumero;

	primernumero=document.getElementById('numeroUno').value;
	segundonumero=document.getElementById('numeroDos').value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	var sumar;
	sumar= primernumero + segundonumero;
	 alert("la suma es "+ sumar)
}


function restar()
{
	
var primernumero;
	    var segundonumero;

	primernumero=document.getElementById('numeroUno').value;
	segundonumero=document.getElementById('numeroDos').value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	var resultado;
	resultado = primernumero - segundonumero;
	 alert("la resta es "+resultado);	
}


function multiplicar()
{ 
	
	    var primernumero;
	    var segundonumero;

	primernumero=document.getElementById('numeroUno').value;
	segundonumero=document.getElementById('numeroDos').value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	var resultado;
	resultado = primernumero * segundonumero;
	 alert("la multiplicacion es "+resultado);
}


function dividir()
{ 
var primernumero;
	    var segundonumero;

	primernumero=document.getElementById('numeroUno').value;
	segundonumero=document.getElementById('numeroDos').value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	var resultado;
	resultado = primernumero / segundonumero;
	 alert("la division es "+resultado);
	 }