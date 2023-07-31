import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(
    private auth: AuthService,
  ){}
  log_in(user:string,pass:string){
    console.log("loggin in")
    this.auth.sign_in(user,pass)
  }
}
