import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/componentes/layout/layout.component';
import { SedesComponent } from './componentes/sedes/sedes.component';
import { AreasComponent } from './componentes/areas/areas.component';
import { CargosComponent } from './componentes/cargos/cargos.component';
import { MantenimientoComponent } from './mantenimiento.component';
const routes: Routes = [
  {
    path: '',
    component: MantenimientoComponent,
    children: [
      {
        path: 'sedes',
        component: SedesComponent
      },
      {
        path: 'areas',
        component: AreasComponent
      },
      {
        path: 'cargos',
        component: CargosComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
