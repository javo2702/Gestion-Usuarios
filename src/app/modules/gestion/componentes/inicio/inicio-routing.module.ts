import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EditarComponent } from './componentes/editar/editar.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RegistroComponent
      },
      {
        path: 'editar',
        component: EditarComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
