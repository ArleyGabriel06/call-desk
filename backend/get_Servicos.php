<?php
include "conexao.php";
$data = array();

$sql = "SELECT * FROM servicos";

$query = mysqli_query($con, $sql);

while ($linha = mysqli_fetch_object($query)){
    $data[]= $linha;
}

echo json_encode($data);

?>