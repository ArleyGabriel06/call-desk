import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public _apiService: ApiService, public nav:NavController) { }

  voltar(){
    this.nav.navigateBack(['/main']);
  }

  nome: any;
  cargo: any;
  setor: any;
  cod: any;
  email: any;
  senha: any;
  nivel = 2;

  addUser(){
    
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
    },(error:any)=>{
      console.log("Erro ao cadastrar, ",error);
    })

  }

  ngOnInit() {
  }

}
