
function mostrar()
{
	var ladoA;
	var ladoB;
	var figura;
	var angulosRectos="si";
	var recArea;
	var figura;
	recArea= ladoA*ladoB;


	
	ladoA=document.getElementById('ladoA').value;
	ladoB=document.getElementById('ladoB').value;
	angulosRectos=document.getElementById('angulosRectos').value;
	ladoA=parseInt(ladoA);
	ladoB=parseInt(ladoB);

	
	alert(ladoA + ladoB);

	figura=prompt("que figura es?");

	if (ladoA == ladoB && angulosRectos =="si"  )

	{
		alert(ladoA * ladoB);
	}


		

}
