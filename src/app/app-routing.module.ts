import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

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

  {path: '**', pathMatch: 'full', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
