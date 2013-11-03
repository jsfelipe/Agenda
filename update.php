<?php
if(count($_POST) > 0){

	//echo json_encode($_POST);

	$con = mysql_connect('localhost', 'root', '');
	mysql_select_db("agenda") or die(mysql_error());

	mysql_query('SET CHARACTER SET utf8');
	mysql_query("UPDATE tb_contatos SET nome='".$_POST["nome"]."' WHERE id_contato = $_POST[id]")
	or die(mysql_error()); 
	mysql_close($con);
	$msg = 1;
	
	print json_encode($msg);

}
?>