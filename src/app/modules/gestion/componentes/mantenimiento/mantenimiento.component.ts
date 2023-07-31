import { Component } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {

  sedes: Sede[] = [
    {id:1,nombre: "Sede 1",ubicacion: "Ubicacion 1"},
    {id:2,nombre: "Sede 2",ubicacion: "Ubicacion 2"},
    {id:3,nombre: "Sede 3",ubicacion: "Ubicacion 3"}
  ]
  areas:Area[] = [
    {id:1,nombre:"Area 1"},
    {id:2,nombre:"Area 2"},
    {id:3,nombre:"Area 3"},
    {id:4,nombre:"Area 4"}
  ]
  cargos:Cargo[] = [
    {id:1,nombre:"Cargo 1"},
    {id:2,nombre:"Cargo 2"},
    {id:3,nombre:"Cargo 3"},
    {id:4,nombre:"Cargo 4"}
  ]
}

export interface Area{
  id:number,
  nombre:string
}
export interface Cargo{
  id:number,
  nombre:string
}
export interface Sede{
  id:number,
  nombre:string,
  ubicacion:string,
}