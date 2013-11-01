<?php

if(count($_POST) > 0){

	//echo $_POST['letra'];

	$con = mysql_connect('localhost', 'root', '');
	mysql_select_db("agenda") or die(mysql_error());


	$lista = mysql_query("SELECT * FROM tb_contatos WHERE nome LIKE '".$_POST['letra']."%'"); 

	//$letraA = array();
		while($r = mysql_fetch_assoc($lista)) {
		    $letras[] = $r;
		}
	//$resultado = array('resultado'=>$letraA);	
    print json_encode($letras);

}

?>
