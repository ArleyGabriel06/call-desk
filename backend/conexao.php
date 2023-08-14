<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Lenght: 0');
    header('Content-Type: application/json');

    $host = "localhost";
    $user = "root";
    $senha = "";
    $database = "call-desk";

    $con = mysqli_connect($host, $user, $senha, $database);

    // if($conn){
    //     echo "Banco de Dados conectado!";
    // } else {
    //     die();
    //     echo "Não foi possivel conectar com o Bando de Dados!";
    // }

?>