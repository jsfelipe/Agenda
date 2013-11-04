<?php
if(count($_POST) > 0){

	include_once "conexao.php";

	mysql_query('SET CHARACTER SET utf8');
	mysql_query("UPDATE tb_contatos SET nome='".$_POST["nome"]."',email='".$_POST["email"]."' , celular='".$_POST["celular"]."' , casa='".$_POST["casa"]."' , endereco='".$_POST["endereco"]."' WHERE id_contato = $_POST[id]")
	or die(mysql_error()); 
	mysql_close($con);
	$msg = 1;
	
	print json_encode($msg);

}
?>