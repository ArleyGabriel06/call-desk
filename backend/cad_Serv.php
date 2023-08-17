<?php 
   include "conexao.php";

   $input = file_get_contents('php://input');
   $data = json_decode($input,true);
   $message = array();
   $nome = $data['nome'];
   $desc = $data['desc'];
   $prazo = $data['prazo'];

   $sql = "INSERT INTO servicos (nome,`desc`,prazo)VALUES('" . $nome . "', '" . $desc . "', '" . $prazo . "')";

    $result = mysqli_query($con, $sql);
    if($result){
        echo "Servicos Cadastrado com sucesso!";
    } else{
        echo "Erro ao cadastrar Servico!";
    }
?>