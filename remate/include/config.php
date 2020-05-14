<?php

function conexion(){

    $servidor="localhost:3307";
    $usuario="root";
    $clave="";
    $bd="licores17";

	$conexion= mysqli_connect($servidor,$usuario,$clave,$bd);

		 if ($conexion->connect_errno)
		 {
		     echo "No conectado";
		 }
		 else
		 {
		  echo "Conectado";
		 }
}

 function cerrar($conexion){

		$this->conexion->close();

	}

function msgbox($pmensaje){
	echo "<script language='JavaScript'>"; 
	echo "alert('".$pmensaje."')"; 
	echo "</script>";
}



?>


	