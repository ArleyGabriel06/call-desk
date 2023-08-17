<?php

    include "conexao.php";

    $input = file_get_contents('php://input');
    $data = json_decode($input,true);
    $message = array();

    $titulo = $data['titulo'];
    $desc = $data['desc'];
    $dia = $data['data'];
    $hora = $data['hora'];
    $status = $data['status'];

    $sql = "INSERT INTO chamados (titulo,`desc`,`data`,hora,`status`)
            VALUES ('" . $titulo . "', '" . $desc . "', '" . $dia . "', '" . $hora . "', '" . $status . "')";
    
    $result = mysqli_query($con, $sql);
    if($result){
        echo "Chamado Cadastrado com sucesso!";
    } else{
        echo "Erro ao cadastrar chamado!";
    }

?>