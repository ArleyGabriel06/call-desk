import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./paginas/main/main.module').then( m => m.MainPageModule)
  },
  {
    path:'home',
    loadChildren: () => import('./paginas/home/home.module').then ( m => m.HomePageModule)
  },
  {
    path:'home/:id',
    loadChildren: () => import('./paginas/home/home.module').then ( m => m.HomePageModule)
  },
  {
    path:'cadastro',
    loadChildren: () => import('./paginas/cadastro/cadastro.module').then ( m => m.CadastroPageModule)
  },
  {
    path:'login',
    loadChildren: () => import('./paginas/login/login.module').then ( m => m.LoginPageModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./paginas/servicos/servicos.module').then( m => m.ServicosPageModule)
  },
  {
    path: 'update-serv/:id',
    loadChildren: () => import('./paginas/update-serv/update-serv.module').then( m => m.UpdateServPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./paginas/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'update-user/:id',
    loadChildren: () => import('./paginas/update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'cad-user',
    loadChildren: () => import('./paginas/cad-user/cad-user.module').then( m => m.CadUserPageModule)
  },
  {
    path: 'homeadm',
    loadChildren: () => import('./paginas/homeadm/homeadm.module').then( m => m.HomeadmPageModule)
  },
  {
    path: 'kanbanadm',
    loadChildren: () => import('./paginas/kanbanadm/kanbanadm.module').then( m => m.KanbanadmPageModule)
  },
  {
    path: 'kanban',
    loadChildren: () => import('./paginas/kanban/kanban.module').then( m => m.KanbanPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./paginas/modal/modal.module').then( m => m.ModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
