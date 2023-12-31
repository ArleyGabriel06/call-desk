import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

  constructor(public _apiService: ApiService, public nav:NavController) {
    this.getServicos();
   }

  voltar(){
    this.nav.navigateBack(['/home']);
  }

    nome:any;
    descricao:any;
    prazo:any;
    servicos: any=[];
    teste: any = [];

  addServico(){
    this.nav.navigateForward(['/cad-serv']);
  }

  getServicos(){
    this._apiService.getServicos().subscribe((res:any) => {
      let result = JSON.parse(res);
      this.servicos = result;
  },(erro:any) => {
    console.log("Erro: ",erro);})
  }

  deleteServ(id:any){
    this._apiService.deleteServ(id).subscribe((res:any)=>{
      console.log("Sucesso ao deletar! ", res);
      this.getServicos();
    },(error:any)=>{
      console.log("Erro ao deletar! ", error)
    })
  }

  updateServ(id:any){
    this.nav.navigateForward(['update-serv/' + id]);
  }

  ngOnInit() {
    this.getServicos();
  }

}
