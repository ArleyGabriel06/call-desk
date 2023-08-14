<?php

    include("conexao.php");
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $message = array();

    $nome = $data['nome'];
    $desc = $data['desc'];
    $prazo = $data['prazo'];
    $id = $_GET['id'];

    $sql = "UPDATE servicos SET `nome` = '$nome', `desc` = '$desc', `prazo` = '$prazo' WHERE id_Servico = " . $id;

    $query = mysqli_query($con, $sql);

    if($sql){
        $message['status'] = "Atualizacao realizada com sucesso!";
    } else{
        http_response_code(422);
        $message['status'] = "Erro ao atualizar!";
    }

    echo json_encode($message);

?>