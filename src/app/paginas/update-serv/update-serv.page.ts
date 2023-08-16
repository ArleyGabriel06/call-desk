import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-serv',
  templateUrl: './update-serv.page.html',
  styleUrls: ['./update-serv.page.scss'],
})
export class UpdateServPage implements OnInit {

  id: any;
  nome:any;
  desc: any;
  prazo: any;

  constructor(public _apiService: ApiService, public nav:NavController, 
    private route: ActivatedRoute, private router: Router) { 
      this.route.params.subscribe((param:any)=>{
        this.id = param.id;
        console.log(this.id);
        this.getServico(this.id);
      })
    }

  voltar(){
    this.nav.navigateBack(['/servicos']);
  }

  getServico(id:any){
    this._apiService.getServico(id).subscribe((res:any)=>{
      console.log("Sucesso! ", res);
      let servico = res[0];
      this.nome = servico.nome;
      this.desc = servico.desc;
      this.prazo = servico.prazo;
    },(error:any)=>{
      console.log("Erro: ", error);
    })
  }

  updateServ(){
    let data = {
      nome: this.nome,
      desc: this.desc,
      prazo: this.prazo,
    }

    this._apiService.updateServ(this.id,data).subscribe((res:any)=>{
      console.log("Atualizado com sucesso! ", res);
      this.nav.navigateBack(['/servicos']);
    },(error:any)=>{
      console.log("Erro ao atualizar: ", error);
    })

  }

  ngOnInit() {
  }

}
