<?php 

$msg = '';

if(count($_POST) > 0){

	

	//echo json_encode($_POST);
    
	
	// Conexao
	$con = mysql_connect('localhost', 'root', '');
	mysql_select_db("agenda") or die(mysql_error());
	if (!$con) {
	    die('Não foi possível conectar: ' . mysql_error());
	}else{
		mysql_query("INSERT INTO tb_contatos 
		(nome, email, celular, casa, endereco ) VALUES('".$_POST["txtnome"]."', '".$_POST["txtemail"]."', '".$_POST["celular"]."', '".$_POST["casa"]."', '".$_POST["endereco"]."' ) ") 
		or die(mysql_error()); 
		mysql_close($con);
		$msg = 1;


	}	
	
	
	
	//Consultar
	//echo "<p>";
	//$row = $db->query("SELECT * FROM comentarios ORDER BY id_comentarios DESC LIMIT 1")->fetch_assoc();
	//echo $row['texto'];
	//echo "</p>";
}

echo json_encode($msg);
?>