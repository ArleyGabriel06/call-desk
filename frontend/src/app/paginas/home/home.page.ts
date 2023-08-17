import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  id: any;
  nome:any;
  cod: any;
  cargo: any;
  setor: any;
  email: any;
  senha: any;
  nivel: any;


  constructor(public _apiService: ApiService, public nav: NavController, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      this.getUser(this.id);
    })
   }

   sair(){
    this.nav.navigateBack(['/login']);
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

  addChamado(){
    this.nav.navigateForward(['/cad-cham/'+this.id]);
  }

  ngOnInit() {
  }

}
