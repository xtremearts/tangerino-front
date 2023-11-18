import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {CadPublicacaoComponent} from "./publicacao/cad-post/cad-publicacao.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'criar-post',
        component: CadPublicacaoComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
