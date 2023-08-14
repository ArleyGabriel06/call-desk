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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
