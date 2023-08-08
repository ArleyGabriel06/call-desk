import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient 
  ) { }

  addUser(data:any){
    return this.http.post('http://localhost/call-desk/backend/cad_User.php', data);
  }

}
