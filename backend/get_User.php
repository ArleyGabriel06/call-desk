<?php

    include("conexao.php");
    $data = array();
    $id = $_GET['id'];
    
    $sql = "SELECT * FROM usuarios WHERE id_Usuario = '" . $id . "'";

    $query = mysqli_query($con, $sql);
   
    if($linha = mysqli_fetch_assoc($query)){
	    $data[] = $linha;
	    echo json_encode($data);
    }

?>