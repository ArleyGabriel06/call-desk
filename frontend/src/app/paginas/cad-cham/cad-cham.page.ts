import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cad-cham',
  templateUrl: './cad-cham.page.html',
  styleUrls: ['./cad-cham.page.scss'],
})
export class CadChamPage implements OnInit {

  id: any;
  titulo: any;
  desc: any;
  data: any;
  hora: any;
  status = 1;
  
  constructor(public _apiService: ApiService, public nav: NavController, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      // this.getUser(this.id);
    })
  }

  cadCham(){
    let data ={
      titulo: this.titulo,
      desc: this.desc,
      data: this.data,
      hora: this.hora,
      status: this.status,
    }

    console.log(data);
    this._apiService.addChamado(data).subscribe((res:any) =>{
      console.log("Chamado Cadastrado com sucesso: ",res);
      this.titulo = '';
      this.desc = '';
      this.data = '';
      this.hora = '';
      this.nav.navigateBack(['/home/'+this.id]);
    },(error:any)=>{
      console.log("Erro ao cadastrar: ",error);
    })
  }

  voltar(){
    this.nav.navigateBack(['/home/'+ this.id]);
  }

  ngOnInit() {
  }

}
