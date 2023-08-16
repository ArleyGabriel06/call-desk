<?php

    include("conexao.php");
    $input = file_get_contents('php://input');
    $message = array();

    $id = $_GET['id'];

    $sql = "DELETE FROM usuarios WHERE id_Usuario = ". $id;
    $query = mysqli_query($con, $sql);

    if($sql){
        $message['status'] = "Deletado com sucesso!";
    } else{
        http_response_code(422);
        $message['status'] = "Erro ao deletar!";
    }

    echo json_encode($message);
?>