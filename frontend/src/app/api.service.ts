import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(
    public http: HttpClient, public nav:NavController
  ) { }

  addUser(data:any){
    return this.http.post('http://localhost/call-desk/backend/cad_User.php', data, {responseType: 'text'});
  }

  loginUser(data:any){
    return this.http.post('http://localhost/call-desk/backend/autenticar.php', data, {responseType: 'text'});
  }

  addServico(data:any){
    return this.http.post('http://localhost/call-desk/backend/cad_Servico.php', data);
  }

  getServicos(){
    return this.http.get('http://localhost/call-desk/backend/get_Servicos.php', {responseType: 'text'});
  }

  deleteServ(id:any){
    return this.http.delete('http://localhost/call-desk/backend/deleteServ.php?id='+ id);
  }

  getServico(id:any){
    return this.http.get('http://localhost/call-desk/backend/get_Servico.php?id='+ id);
  }

  updateServ(id:any, data:any){
    return this.http.put('http://localhost/call-desk/backend/updateServ.php?id='+ id, data);
  }

  getUsers(){
    return this.http.get('http://localhost/call-desk/backend/get_Users.php');
  }

  deleteUser(id:any){
    return this.http.delete('http://localhost/call-desk/backend/deleteUser.php?id='+ id);
  }

  getUser(id:any){
    return this.http.get('http://localhost/call-desk/backend/get_User.php?id='+ id);
  }

  updateUser(id:any, data:any){
    return this.http.put('http://localhost/call-desk/backend/updateUser.php?id='+ id, data);
  }



}
