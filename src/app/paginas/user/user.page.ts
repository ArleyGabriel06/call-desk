import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(public _apiService: ApiService, public nav:NavController) { 
    this.getUsers();
  }

  nome: any;
  cod: any;
  setor: any;
  users: any=[];

  voltar(){
    this.nav.navigateBack(['/home']);
  }

  addUser(){
    this.nav.navigateForward(['/cad-user']);
  }

  getUsers(){
    this._apiService.getUsers().subscribe((res:any) =>{
      let result = res;
      this.users = result;
    },(error:any) =>{
      console.log("Erro: ",error);})
  }

  deleteUser(id:any){
    this._apiService.deleteUser(id).subscribe((res:any)=>{
      console.log("Sucesso ao deletar! ", res);
      this.getUsers();
    },(error:any)=>{
      console.log("Erro ao deletar! ", error)
    })
  }

  updateUser(id:any){
    this.nav.navigateForward(['update-user/' + id]);
  }

  ngOnInit() {
    this.getUsers();
  }

}
