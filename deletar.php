<?php
if(count($_POST) > 0){

	//echo $_POST['del'];

	$con = mysql_connect('localhost', 'root', '');
	mysql_select_db("agenda") or die(mysql_error());

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
