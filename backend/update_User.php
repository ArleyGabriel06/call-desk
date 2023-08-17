<?php

    include("conexao.php");
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $message = array();

    $nome = $data['nome'];
    $cod = $data['cod'];
    $cargo = $data['cargo'];
    $setor = $data['setor'];
    $email = $data['email'];
    $senha = $data['senha'];
    $nivel = $data['nivel'];
    $id = $_GET['id'];

    $sql = "UPDATE usuarios SET `nome` = '$nome', `cod` = '$cod', `cargo` = '$cargo', `setor` = '$setor', `email` = '$email', `senha` = '$senha', `nivel` = '$nivel' WHERE id_Usuario = "  . $id;

    $query = mysqli_query($con, $sql);

    if($sql){
        $message['status'] = "Atualizacao realizada com sucesso!";
    } else{
        http_response_code(422);
        $message['status'] = "Erro ao atualizar!";
    }

    echo json_encode($message);
?>