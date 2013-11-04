<?php
header('Content-Type: text/plain; charset="UTF-8"');
if(count($_POST) > 0){

	//echo $_POST['letra'];

	include_once "conexao.php";

	mysql_query('SET CHARACTER SET utf8');
	$lista = mysql_query("SELECT * FROM tb_contatos WHERE nome LIKE '".$_POST['letra']."%' ORDER BY nome ASC"); 

	//$letraA = array();
		while($r = mysql_fetch_assoc($lista)) {
		    $letras[] = $r;
		}
	//$resultado = array('resultado'=>$letraA);	
    print json_encode($letras);

}

?>
