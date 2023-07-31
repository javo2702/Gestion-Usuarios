import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/core/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user:UserInfo|undefined
  showMobile:boolean = false
  constructor(private auth:AuthService){

  }
  ngOnInit(): void {
    this.auth.getInfo().then(
      (response)=>{
        console.log(response)
        this.user = response
        console.log(this.user)
        //this.username = response.nombres
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  log_out(){
    console.log("exit")
    this.auth.logout()
  }
}
