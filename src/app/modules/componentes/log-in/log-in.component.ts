import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LocalService } from 'src/app/shared/services/local/local.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loading:boolean = false
  response:boolean = false
  mensaje:string = ""
  constructor(
    private auth: AuthService,
    private localStorage:LocalService,
    private router: Router
  ){}
  log_in(user:string,pass:string){
    if(user!=""&&pass!=""){
      this.loading = true
      console.log("loggin in")
      this.auth.sign_in(user,pass).then(
        (data)=>{
          this.loading = false
          //alert(data)
          this.router.navigate(['/welcome'])
        },
        (error)=>{
          this.loading = false
          if(error.status==401){
            this.mensaje = "Ingrese credenciales validas"
          } else{
            this.mensaje = "Error interno, intentelo más tarde"
          }
          this.response = true
          console.log(error.status)
          //alert(error)
        }
      )
    }
    
  }
}
