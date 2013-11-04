<?php
if(count($_POST) > 0){

	include_once "conexao.php";

	if($_POST['action'] == 'carregar_dados') {
		mysql_query('SET CHARACTER SET utf8');
		$alterar = mysql_query("SELECT * FROM tb_contatos WHERE id_contato = $_POST[alt] LIMIT 1"); 
		//$msg = $alterar;
		
		$contato = mysql_fetch_assoc($alterar);			
	    print json_encode($contato);
	
	}else{

		mysql_query('SET CHARACTER SET utf8');
		mysql_query("UPDATE tb_contatos SET nome='".$_POST["nome"]."',email='".$_POST["email"]."' , celular='".$_POST["celular"]."' , casa='".$_POST["casa"]."' , endereco='".$_POST["endereco"]."' WHERE id_contato = $_POST[idalterar]")
		or die(mysql_error()); 
		mysql_close($con);
		$msg = 1;
	
		print json_encode($msg);
	}



}
?>