import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Sede, Area, Cargo } from '../../../mantenimiento/mantenimiento.component';
import { SistemaUI, Rol, UsuarioSistema } from '../registro/registro.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, AfterViewInit{
  loading:boolean = false;
  idUsuario:number = -1
  usuario:UsuarioSistema|undefined
  filter:boolean = false

  sistemasShow: SistemaUI[] = []

  usuarioEditarForm = new FormGroup({
    usuario: new FormControl(""),
    dni: new FormControl(""),
    nombres: new FormControl(""),
    ape_paterno: new FormControl(""),
    ape_materno: new FormControl(""),
    sede: new FormControl(0),
    area: new FormControl(0),
    cargo: new FormControl(0),
    estado: new FormControl(0),
  })
  
  constructor(private route: ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idUsuario = params['idUsuario'];
    });
  }
  ngAfterViewInit(): void {
    let user:UsuarioSistema
    this.usuarios.forEach((u)=>{
      if(u.id==this.idUsuario){
        user = u
        this.usuario = u
      }
    })
    this.usuarioEditarForm.get('usuario')?.setValue(user!.usuario)
    this.usuarioEditarForm.get('dni')?.setValue(user!.dni)
    this.usuarioEditarForm.get('nombres')?.setValue(user!.nombres)
    this.usuarioEditarForm.get('ape_paterno')?.setValue(user!.ape_paterno)
    this.usuarioEditarForm.get('ape_materno')?.setValue(user!.ape_materno)
    this.usuarioEditarForm.get('sede')?.setValue(user!.sede)
    this.usuarioEditarForm.get('area')?.setValue(user!.area)
    this.usuarioEditarForm.get('cargo')?.setValue(user!.cargo)
    this.usuarioEditarForm.get('estado')?.setValue(user!.estado)
    user!.sistema.forEach((s)=>{
      this.setSisteam(s.id,s.rol)
    })
  }
  setSisteam(id:number,rol:number){
    this.sistemas.forEach((s)=>{
      if(s.id==id){
        s.select = true
        s.rol = rol
        this.sistemasShow.push(s)
      }
    })
  }
  noFilter(filter:boolean){
    if(filter){
      this.sistemasShow = []
      this.sistemas.forEach((s)=>{
        if(s.select){
          this.sistemasShow.push(s)
        }
      })
    } else{
      this.sistemasShow = this.sistemas
    }
    this.filter = !this.filter
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
  roles: Rol[] = [
    {id:1,nombre:"usuario"},
    {id:2,nombre:"operario"},
    {id:3,nombre:"administrador"}
  ]
  estado: Estado[] = [
    {id:1,estado:"Activo"},
    {id:2,estado:"No Activo"}
  ]
  usuarios: UsuarioSistema[] = [
    {id:1,usuario:"42371327",dni:"42371327",nombres:"Jaime1", ape_paterno:"Jimenez",ape_materno:"Llosa1", perfil:1,cambiarClave:true,estado:1,cargo:1,area:1,sede:1,sistema:[{id:1,rol:1,nombre:""},{id:3,rol:2,nombre:""},{id:5,rol:1,nombre:""}]},
    {id:2,usuario:"42371327",dni:"42371327",nombres:"Jaime2", ape_paterno:"Jimenez",ape_materno:"Llosa2", perfil:2,cambiarClave:false,estado:1,cargo:1,area:1,sede:1,sistema:[{id:2,rol:1,nombre:""},{id:4,rol:2,nombre:""},{id:5,rol:1,nombre:""}]},
    {id:3,usuario:"42371327",dni:"42371327",nombres:"Jaime3", ape_paterno:"Jimenez",ape_materno:"Llosa3", perfil:3,cambiarClave:true,estado:1,cargo:1,area:1,sede:1,sistema:[{id:5,rol:1,nombre:""}]},
    {id:4,usuario:"42371327",dni:"42371327",nombres:"Jaime4", ape_paterno:"Jimenez",ape_materno:"Llosa4", perfil:1,cambiarClave:false,estado:1,cargo:1,area:1,sede:1,sistema:[{id:3,rol:2,nombre:""},{id:5,rol:1,nombre:""}]},
    {id:5,usuario:"42371327",dni:"42371327",nombres:"Jaime5", ape_paterno:"Jimenez",ape_materno:"Llosa5", perfil:3,cambiarClave:true,estado:1,cargo:1,area:1,sede:1,sistema:[{id:1,rol:1,nombre:""}]},
    {id:6,usuario:"42371327",dni:"42371327",nombres:"Jaime6", ape_paterno:"Jimenez",ape_materno:"Llosa6", perfil:2,cambiarClave:true,estado:1,cargo:1,area:1,sede:1,sistema:[{id:7,rol:1,nombre:""}]},
    {id:7,usuario:"42371327",dni:"42371327",nombres:"Jaime7", ape_paterno:"Jimenez",ape_materno:"Llosa7", perfil:1,cambiarClave:false,estado:1,cargo:1,area:1,sede:1,sistema:[{id:1,rol:1,nombre:""},{id:2,rol:2,nombre:""},{id:3,rol:1,nombre:""}]}
  ]
  buscarSistema(){
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1200);
  }
  save(){

  }
}
export interface Estado{
  id:number,
  estado:string
}