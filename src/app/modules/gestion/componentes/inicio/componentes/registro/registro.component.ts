import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Sede, Area, Cargo } from '../../../mantenimiento/mantenimiento.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  showModal:boolean=false;
  cantUsuariosRegistrados:number = 0;
  loading:boolean = false;
  constructor(private router: Router){
  }
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
  usuarios: UsuarioSistema[] = [
    {id:1,usuario:"42371327",dni:"42371327",nombres:"Jaime1", ape_paterno:"Jimenez",ape_materno:"Llosa1", perfil:1,cambiarClave:true,estado:1,cargo:1,area:1,sede:1,sistema:[]},
    {id:2,usuario:"42371327",dni:"42371327",nombres:"Jaime2", ape_paterno:"Jimenez",ape_materno:"Llosa2", perfil:2,cambiarClave:false,estado:1,cargo:1,area:1,sede:1,sistema:[]},
    {id:3,usuario:"42371327",dni:"42371327",nombres:"Jaime3", ape_paterno:"Jimenez",ape_materno:"Llosa3", perfil:3,cambiarClave:true,estado:1,cargo:1,area:1,sede:1,sistema:[]},
    {id:4,usuario:"42371327",dni:"42371327",nombres:"Jaime4", ape_paterno:"Jimenez",ape_materno:"Llosa4", perfil:1,cambiarClave:false,estado:1,cargo:1,area:1,sede:1,sistema:[]},
    {id:5,usuario:"42371327",dni:"42371327",nombres:"Jaime5", ape_paterno:"Jimenez",ape_materno:"Llosa5", perfil:3,cambiarClave:true,estado:1,cargo:1,area:1,sede:1,sistema:[]},
    {id:6,usuario:"42371327",dni:"42371327",nombres:"Jaime6", ape_paterno:"Jimenez",ape_materno:"Llosa6", perfil:2,cambiarClave:true,estado:1,cargo:1,area:1,sede:1,sistema:[]},
    {id:7,usuario:"42371327",dni:"42371327",nombres:"Jaime7", ape_paterno:"Jimenez",ape_materno:"Llosa7", perfil:1,cambiarClave:false,estado:1,cargo:1,area:1,sede:1,sistema:[]}
  ]
  getRol(id:number){
    let perfil = ""
    this.roles.forEach((r)=>{
      if(r.id==id){
        perfil = r.nombre
      }
    })
    return perfil
  }
  getCargo(id:number){
    let cargo = ""
    this.cargos.forEach((c)=>{
      if(c.id==id){
        cargo = c.nombre
      }
    })
    return cargo
  }
  getArea(id:number){
    let area = ""
    this.areas.forEach((a)=>{
      if(a.id==id){
        area = a.nombre
      }
    })
    return area
  }
  getSede(id:number){
    let sede = ""
    this.sedes.forEach((s)=>{
      if(s.id==id){
        sede = s.nombre
      }
    })
    return sede
  }
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
  editar(idusuario:number){
    this.router.navigate(['welcome/editar'],{queryParams:{idUsuario:idusuario}})
  }
  eliminar(){

  }
  darAlta(){

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
export interface Usuario{
  id:number,
  usuario:string,
  dni:string,
  nombres:string,
  ape_paterno:string,
  ape_materno:string,
  perfil:number,
  cambiarClave:boolean,
  estado:number,
  cargo:number,
  area:number,
  sede:number,
}
export interface UsuarioSistema extends Usuario{
  sistema: Sistema[]
}