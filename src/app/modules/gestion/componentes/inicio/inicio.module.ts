import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class InicioModule { }
