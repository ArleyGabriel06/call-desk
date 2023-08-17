import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-kanbanadm',
  templateUrl: './kanbanadm.page.html',
  styleUrls: ['./kanbanadm.page.scss'],
})
export class KanbanadmPage implements OnInit {

  constructor(public nav: NavController, private alertController: AlertController) { }

  
  sair(){
    this.nav.navigateBack(['/homeadm']);
  }
  modal(){
    this.nav.navigateForward(['/modal'])
  }

  ngOnInit() {
  }

}
