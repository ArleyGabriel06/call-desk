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
      console.log("Usuário logado com sucesso: ",res);
      this.email='';
      this.senha='';
    }, (error:any)=>{
      console.log("Erro ao logar: ",error);
    })

  }

  ngOnInit() {
  }

}
