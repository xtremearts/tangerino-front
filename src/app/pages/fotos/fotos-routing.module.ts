import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadFotosComponent} from "./cad-fotos/cad-fotos.component";
import {ListFotosComponent} from "./list-fotos/list-fotos.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListFotosComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotosRoutingModule {
}
