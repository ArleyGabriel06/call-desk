<?php

    include "conexao.php";

    // $nivel = 2;

    $input = file_get_contents('php://input');
    $data = json_decode($input,true);
    $message = array();
    $nome = $data['nome'];
    $cod = $data['cod'];
    $cargo = $data['cargo'];
    $setor = $data['setor'];
    $email = $data['email'];
    $senha = $data['senha'];
    $nivel = $data['nivel'];


    $sql = "INSERT INTO usuario (nome,cod,cargo,setor,email,senha,nivel)
            VALUES('" . $nome . "', '" . $cod . "', '" . $cargo . "', '" . $setor . "', '" . $email . "', '" . $senha . "', '" . $nivel . "')";
        
    $result = mysqli_query($conn, $sql);
    // if($result){
    //     echo "Usuário Cadastrado com sucesso!";
    // } else{
    //     echo "Erro ao cadastrar usuário!";
    // }
?>