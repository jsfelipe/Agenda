<?php 
if(count($_POST) > 0){
	
   	include_once "conexao.php";
	
	if (!$con) {
	    die('Não foi possível conectar: ' . mysql_error());
	}else{
		mysql_query("INSERT INTO tb_contatos 
		(nome, email, celular, casa, endereco ) VALUES('".$_POST["txtnome"]."', '".$_POST["txtemail"]."', '".$_POST["txtcelular"]."', '".$_POST["txtcasa"]."', '".$_POST["txtendereco"]."' ) ") 
		or die(mysql_error()); 
		mysql_close($con);
		$msg = 1;


	}	

}

echo json_encode($msg);
?>