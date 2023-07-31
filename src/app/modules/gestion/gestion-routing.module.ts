import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/componentes/layout/layout.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'welcome',
        component: InicioComponent
      },
      {
        path: 'mantenimiento',
        component: MantenimientoComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
