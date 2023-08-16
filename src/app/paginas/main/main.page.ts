import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public nav: NavController) { }

  entrar(){
    this.nav.navigateForward(['/login']);
  }

  cadastrar(){
    this.nav.navigateForward(['/cadastro']);
  }

  ngOnInit() {
  }

}
