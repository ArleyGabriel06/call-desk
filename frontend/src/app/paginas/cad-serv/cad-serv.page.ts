import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cad-serv',
  templateUrl: './cad-serv.page.html',
  styleUrls: ['./cad-serv.page.scss'],
})
export class CadServPage implements OnInit {

  nome: any;
  desc: any;
  prazo: any;

  constructor(public _apiService: ApiService, public nav:NavController) { }

  voltar(){
    this.nav.navigateBack(['/servicos']);
  }

  cadServ(){
    let data = {
      nome : this.nome,
      desc : this.desc,
      prazo : this.prazo,
    }

    this._apiService.addServico(data).subscribe((res:any)=>{
      console.log("Serviço Cadastrado com sucesso: ", res);
      this.nome='';
      this.desc='';
      this.prazo='';
      this.nav.navigateBack(['/servicos']);
    },(error:any)=>{
      console.log("Erro ao cadastrar: ",error);
    })
  }

  ngOnInit() {
  }

}
