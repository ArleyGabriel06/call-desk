<?php
include "conexao.php";
$data = array();

$sql = "SELECT * FROM servicos";

$query = mysqli_query($con, $sql);

if($linha = mysqli_fetch_assoc($query)){
	$data[] = $linha;
	echo json_encode($data);
}

?>