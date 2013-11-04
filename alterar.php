<?php
if(count($_POST) > 0){

	include_once "conexao.php";

	mysql_query('SET CHARACTER SET utf8');
	$alterar = mysql_query("SELECT * FROM tb_contatos WHERE id_contato = $_POST[alt]"); 
	//$msg = $alterar;
	
	$contato[] = mysql_fetch_assoc($alterar);
		
    print json_encode($contato);

}
?>