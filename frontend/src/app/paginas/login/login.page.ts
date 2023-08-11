import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public _apiService: ApiService, public nav:NavController) { }

  voltar(){
    this.nav.navigateBack(['/main']);
  }

  email: any;
  senha: any;

  loginUser(){

    let data = {
      email: this.email,
      senha: this.senha,
    }
        this._apiService.loginUser(data).subscribe((res)=>{
        console.log(res);
        this.email='';
        this.senha='';

        let resposta = JSON.parse(res);
        let mensagem = resposta.sucesso;
        let result = resposta.result;

        if(mensagem === true && result.nivel === "2"){
          console.log("Usuário " + result.nome + " logado com sucesso!");
          this.nav.navigateForward('/home');
        } else if (mensagem === true && result.nivel === "1"){
          console.log("Usuário Admnistrador" + result.nome + " logado com sucesso!");
          // this.nav.navigateForward('/');
        }


      }, (error:any)=>{
        console.log("Erro: ",error);
      })



  }

  ngOnInit() {
  }

}
