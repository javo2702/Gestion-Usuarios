import { Component } from '@angular/core';
import { Sede, Area, Cargo } from '../mantenimiento/mantenimiento.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  showModal:boolean=false;
  cantUsuariosRegistrados:number = 0;
  loading:boolean = false;
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
  sistemas: SistemaUI[] = [
    {id:1,nombre:"SDG",rol:-1,select:false},
    {id:2,nombre:"ABC",rol:-1,select:false},
    {id:3,nombre:"FFF",rol:-1,select:false},
    {id:4,nombre:"123",rol:-1,select:false},
    {id:5,nombre:"XYZ",rol:-1,select:false},
    {id:6,nombre:"12E",rol:-1,select:false},
    {id:7,nombre:"SGO",rol:-1,select:false},
    {id:8,nombre:"PEA",rol:-1,select:false}
  ]
  sistemasEdit: SistemaUI[] = [
    {id:1,nombre:"SDG",rol:1,select:false},
    {id:2,nombre:"ABC",rol:2,select:false},
    {id:3,nombre:"FFF",rol:3,select:false},
  ]
  roles: Rol[] = [
    {id:1,nombre:"usuario"},
    {id:2,nombre:"operario"},
    {id:3,nombre:"administrador"}
  ]
  save(){
    this.sistemas.forEach((s)=>{
      if(s.select){
        let n = {id:s.id,nombre:s.nombre,rol:s.rol}
        console.log(n)
      }
    })
  }
  buscarSistema(){
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1200);
  }
}


export interface Sistema{
  id:number,
  nombre:string,
  rol:number,
}
export interface SistemaUI extends Sistema{
  select:boolean
}
export interface Rol{
  id:number,
  nombre:string
}