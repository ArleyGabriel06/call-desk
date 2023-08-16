import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {

  id: any;
  nome:any;
  cod: any;
  cargo: any;
  setor: any;
  email: any;
  senha: any;
  nivel: any;

  constructor(public _apiService: ApiService, public nav:NavController, 
    private route: ActivatedRoute, private router: Router) { 
      this.route.params.subscribe((param:any)=>{
        this.id = param.id;
        console.log(this.id);
        this.getUser(this.id);
      })
    }

    voltar(){
      this.nav.navigateBack(['/user']);
    }

    getUser(id:any){
      this._apiService.getUser(id).subscribe((res:any)=>{
        console.log("Sucesso! ", res);
        let user = res[0];
        this.nome = user.nome;
        this.cod = user.cod;
        this.cargo = user.cargo;
        this.setor = user.setor;
        this.email = user.email;
        this.senha = user.senha;
        this.nivel = user.nivel;
      },(error:any)=>{
        console.log("Erro: ", error);
      });
    }

    updateUser(){
      let data = {
        nome: this.nome,
        cod: this.cod,
        cargo: this.cargo,
        setor: this.setor,
        email: this.email,
        senha: this.senha,
        nivel: this.nivel,
      }
  
      this._apiService.updateUser(this.id,data).subscribe((res:any)=>{
        console.log("Atualizado com sucesso! ", res);
        this.nav.navigateBack(['/user']);
      },(error:any)=>{
        console.log("Erro ao atualizar: ", error);
      })
    }

  ngOnInit() {
  }

}
