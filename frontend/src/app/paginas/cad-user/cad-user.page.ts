import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.page.html',
  styleUrls: ['./cad-user.page.scss'],
})
export class CadUserPage implements OnInit {

  id: any;
  nome:any;
  cod: any;
  cargo: any;
  setor: any;
  email: any;
  senha: any;
  nivel: any;

  constructor(public _apiService: ApiService, public nav:NavController) { }

  voltar(){
    this.nav.navigateBack(['/user']);
  }

  cadUser(){
    let data = {
      nome: this.nome,
      cargo: this.cargo,
      setor: this.setor,
      cod: this.cod,
      email: this.email,
      senha: this.senha,
      nivel: this.nivel,
    }
    this._apiService.addUser(data).subscribe((res:any) =>{
      console.log("Usuário Cadastrado com sucesso, ",res);
      this.nome='';
      this.cargo='';
      this.setor='';
      this.cod='';
      this.email='';
      this.senha='';
      this.nivel='';
      this.nav.navigateForward(['/user']);
    },(error:any)=>{
      console.log("Erro ao cadastrar, ",error);
    })
  }

  ngOnInit() {
  }

}
