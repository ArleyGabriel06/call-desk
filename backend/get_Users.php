<?php

include "conexao.php";
$data = array();

$sql = "SELECT * FROM usuarios";

$query = mysqli_query($con, $sql);

while ($linha = mysqli_fetch_object($query)){
	$data[]= $linha;
}

echo json_encode($data);

?>