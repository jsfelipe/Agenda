<?php
if(count($_POST) > 0){

	//echo json_encode($_POST);

	$con = mysql_connect('localhost', 'root', '');
	mysql_select_db("agenda") or die(mysql_error());

	mysql_query('SET CHARACTER SET utf8');
	$alterar = mysql_query("SELECT * FROM tb_contatos WHERE id_contato = $_POST[alt]"); 
	//$msg = $alterar;
	
	$contato[] = mysql_fetch_assoc($alterar);
		
    print json_encode($contato);

}
?>