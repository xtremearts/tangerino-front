import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {
    path: '',
    children: [
      {
        path: 'usuario',
        loadChildren: () => import ('./pages/usuario/usuario.module').then((m) => m.UsuarioModule),
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import ('./pages/home/home.module').then((m) => m.HomeModule),
      }
    ]
  },

  {
    path: '',
    children: [
      {
        path: 'fotos',
        loadChildren: () => import ('./pages/fotos/fotos.module').then((m) => m.FotosModule),
      }
    ]
  },

  {path: '**', pathMatch: 'full', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
