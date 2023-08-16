import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-homeadm',
  templateUrl: './homeadm.page.html',
  styleUrls: ['./homeadm.page.scss'],
})
export class HomeadmPage implements OnInit {

  constructor(public nav: NavController) { }

  sair(){
    this.nav.navigateBack(['/login']);
  }


  ngOnInit() {
  }

}
