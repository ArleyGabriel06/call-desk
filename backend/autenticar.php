<?php

    include("conexao.php");

    $input = file_get_contents('php://input');
    $data = json_decode($input,true);
    $message = array();

    $email = $data['email'];
    $senha = $data['senha'];

    $sql =  "SELECT * FROM usuario WHERE email = '" . $email . "' and senha = '" . $senha . " '";

    $query =  mysqli_query($conn, $sql);

    if(mysqli_num_rows($query) > 0){
        $data = mysqli_fetch_array($query);   
        $datauser = array(
            'id' => $data['id_Usuario'],
            'nome' => $data['nome'],
            'cod' => $data['cod'],
            'cargo' => $data['cargo'],
            'setor' => $data['setor'],
            'email' => $data['email'],
            'senha' => $data['senha'],
            'nivel' => $data['nivel'],
        );

        if($query){
            $result = json_encode(array('sucesso' => true, 'result' => $datauser));
        } else{
            $result = json_encode(array('sucesso' => false, 'result' => 'Erro. Usuario nao encontrado!'));
            
        }
    } else {
        $result = json_encode(array('sucesso' => false, 'result' => 'Erro. Usuario nao encontrado!'));
    
    }

    echo $result;

?>