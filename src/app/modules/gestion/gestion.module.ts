import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { GestionRoutingModule } from './gestion-routing.module';
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component';



@NgModule({
  declarations: [
    GestionComponent,
    InicioComponent,
    MantenimientoComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
