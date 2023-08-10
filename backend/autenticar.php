<?php

    include("conexao.php");

    $input = file_get_contents('php://input');
    $data = json_decode($input,true);
    $message = array();

    $email = $data['email'];
    $senha = $data['senha'];

    echo $email;
    echo $senha;

?>