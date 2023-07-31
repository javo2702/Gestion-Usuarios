import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { SedesComponent } from './componentes/sedes/sedes.component';
import { AreasComponent } from './componentes/areas/areas.component';
import { CargosComponent } from './componentes/cargos/cargos.component';



@NgModule({
  declarations: [
    SedesComponent,
    AreasComponent,
    CargosComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
