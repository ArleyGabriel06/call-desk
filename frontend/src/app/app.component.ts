import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'homeadm', icon: 'home' },
    { title: 'Painel de Usuários', url: 'user', icon: 'people' },
    { title: 'Painel de Serviços', url: 'servicos', icon: 'newspaper' },
  ];
  constructor() {}
}
