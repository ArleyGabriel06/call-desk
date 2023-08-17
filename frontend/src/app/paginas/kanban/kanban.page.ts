import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {

  constructor(public nav: NavController, private alertController: AlertController) { }

  async alert(){
    const alert = await this.alertController.create({
      header:'Alerta',
      subHeader:'Isso é um alerta',
      message:'test',
      buttons:['OK'],
    });

    await alert.present();
  }

  sair(){
    this.nav.navigateBack(['/home']);
  }
  ngOnInit() {
  }

}
