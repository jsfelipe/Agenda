<?php
if(count($_POST) > 0){

	//echo $_POST['del'];

	include_once "conexao.php";

	if (!$con) {
	    die('Não foi possível conectar: ' . mysql_error());
	}else{
		mysql_query("DELETE FROM tb_contatos WHERE id_contato = $_POST[del]")
		or die(mysql_error()); 
		mysql_close($con);
		$msg = 1;
	}
	
    print json_encode($msg);

}

?>
