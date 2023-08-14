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
    return this.http.post('http://localhost/call-desk/backend/cad_User.php', data);
  }

  loginUser(data:any){
    return this.http.post('http://localhost/call-desk/backend/autenticar.php', data, {responseType: 'text'});
  }

  addServico(data:any){
    return this.http.post('http://localhost/call-desk/backend/cad_Servico.php', data);
  }

  getServicos(){
    return this.http.get('http://localhost/call-desk/backend/get_Servicos.php');
  }

  deleteServ(id:any){
    return this.http.delete('http://localhost/call-desk/backend/deleteServ.php?id='+ id);
  }

  getServico(id:any){
    return this.http.get('http://localhost/call-desk/backend/get_Servico.php?id='+ id);
  }

  updateServ(id:any, data:any){
    return this.http.put('http://localhost/call-desk/backend/updateServ.php?id='+id, data);
  }

}
