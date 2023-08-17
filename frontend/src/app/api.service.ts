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
    return this.http.post('http://localhost/call-desk/backend/cad_Serv.php', data, {responseType: 'text'});
  }

  getServicos(){
    return this.http.get('http://localhost/call-desk/backend/get_Servicos.php', {responseType: 'text'});
  }

  deleteServ(id:any){
    return this.http.delete('http://localhost/call-desk/backend/delete_Serv.php?id='+ id);
  }

  getServico(id:any){
    return this.http.get('http://localhost/call-desk/backend/get_Servico.php?id='+ id);
  }

  updateServ(id:any, data:any){
    return this.http.put('http://localhost/call-desk/backend/update_Serv.php?id='+ id, data);
  }

  getUsers(){
    return this.http.get('http://localhost/call-desk/backend/get_Users.php');
  }

  deleteUser(id:any){
    return this.http.delete('http://localhost/call-desk/backend/delete_User.php?id='+ id);
  }

  getUser(id:any){
    return this.http.get('http://localhost/call-desk/backend/get_User.php?id='+ id);
  }

  updateUser(id:any, data:any){
    return this.http.put('http://localhost/call-desk/backend/update_User.php?id='+ id, data);
  }

  addChamado(data:any){
    return this.http.post('http://localhost/call-desk/backend/cad_Cham.php', data, {responseType: 'text'});
  }

}
