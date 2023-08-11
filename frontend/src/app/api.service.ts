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

}
