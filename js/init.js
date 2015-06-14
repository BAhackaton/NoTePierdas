// cuando cargo el formulario valido que se hayan elegido todas las opciones
function validame(){
	console.log("valido form");
	var parametros = [];
	var validado = true;

	parametros.push($(".sexo:checked").val());
	if ($(".sexo:checked").val() == ""){$("#sexo").addClass("error")}else{$("#sexo").removeClass("error")}
	parametros.push($(".edad").val());
	if ($(".edad").val() == ""){$(".edad").addClass("error")}else{$(".edad").removeClass("error")}

	//parametros.push($(".horario").val());
	parametros.push($(".adiccion").val());
	if ($(".adiccion").val() == ""){$(".adiccion").addClass("error")}else{$(".adiccion").removeClass("error")}



	parametros.push($(".prevision").val());
	if ($(".prevision").val() == ""){$(".prevision").addClass("error")}else{$(".prevision").removeClass("error")}
	//parametros.push($(".barrio").val());
	//parametros.push($(".psiq:checked").val());

	for (var i = 0 ; i < parametros.length; i++){
		if (parametros[i] == ""){
			validado = false;
		}
	}

	console.log (parametros)
	if (validado){
		hacerConsulta();
	}
}

// Si pasa la validación hago la consulta a la base de datos y obtengo los resultados
function hacerConsulta(){
	alert ("hago consulta");
}

// Escribe la tabla de resultados y la muestra en el DOM
function mostrarResultados(){
	
}