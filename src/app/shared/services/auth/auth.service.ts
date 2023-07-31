import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Md5 } from 'ts-md5';
import { BehaviorSubject, ignoreElements, map, Observable, tap } from 'rxjs';
import { LocalService } from '../local/local.service';
import { HttpHeaders} from '@angular/common/http';
import { UserWithToken, UserInfo } from 'src/app/core/user';
import { environment } from 'src/environments/environment.development';
const USER_LOCAL_STORAGE_KEY = 'userData';
const TOKEN_NAME = 'token_gestion'
const AUTHENTICATE_NAME = 'authenticated_gestion'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new BehaviorSubject<UserWithToken | null>(null);
  user$ = this.user.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));

  private isLoggedIn2:boolean = false;

  userData: any; // Save logged in user data
  validate: boolean = false;
  constructor(
    public router: Router,
    public http: HttpClient,
    private localStorage: LocalService
    //public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */

    /*this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });*/
  }
  sign_in(usuario:string,clave:string){
    const md5 = new Md5();
    const claveMD5 = md5.appendStr(clave).end()
    const user = {
      usuario: usuario,
      clave: claveMD5
    }
    var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
    const httpOptions = {
      headers: headers_object
    };
    this.http.post<any>(environment.BASE_URL + "api-security/v1/login",user,httpOptions).subscribe(
      (data)=>{
        console.log(data)
        this.localStorage.removeData(TOKEN_NAME)
        this.localStorage.saveData(TOKEN_NAME,data.token)
        this.localStorage.saveData(AUTHENTICATE_NAME,"true")
        this.router.navigate(['/welcome'])
      },
      (error)=>{
        console.log(error)
        alert("Ingrese Credenciales Correctas")
      }
    );
  }
  getInfo():Promise<UserInfo>{
    const token = localStorage.getItem(TOKEN_NAME); 
    let url = environment.BASE_URL+"api-security/v1/info"
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return new Promise((resolve,reject)=>{
      this.http.get<UserInfo>(url,{headers}).subscribe(
        (response)=>{
          resolve(response)
        },
        (error)=>{
          reject(error)
        }
      );
    });
  }
  get isAuthenticated(): boolean {   
    const token = localStorage.getItem(TOKEN_NAME); 
    if(token!=null){
      console.log("hrere")
      this.validateToken(token).then(
        (response)=>{
          console.log("validation")
          console.log(response)
          this.localStorage.saveData(AUTHENTICATE_NAME,response.toString())
        }
      ).catch(()=>{
        console.log("error")
        this.localStorage.removeData(AUTHENTICATE_NAME)
      })
    } else{
      this.localStorage.removeData(AUTHENTICATE_NAME)
    }
    return localStorage.getItem(AUTHENTICATE_NAME) == "true"
  }
  validateToken(token:string):Promise<boolean>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return new Promise((resolve,reject)=>{
      this.http.get<any>(environment.BASE_URL+"api-security/v1/validate",{headers}).subscribe(
        (data)=>{
          console.log(data)
        },
        /*(response)=>{
          console.log(response)
          resolve(true)
        },*/
        (error)=>{
          console.log(error)
          reject(false)
        }
      );
    });
  }
  async obetenerValidation(token:string){
    var validate = false
    try{
      var validate = await this.validateToken(token)
    } catch(error){

    } 
    return validate
  }
  get isLoggedIn(): boolean {
    const token = localStorage.getItem(TOKEN_NAME);
    return false
  }
  private redirectToDashboard(): void {
    this.router.navigateByUrl('dashboard'); 
  }
  logout(): void {
    this.localStorage.removeData(TOKEN_NAME)
    this.localStorage.removeData(AUTHENTICATE_NAME)
    this.router.navigateByUrl('/log-in');
  }

  /*private pushNewUser(token: string) {
    this.user.next(this.decodeToken(token));
  }

  private decodeToken(userToken: string): UserWithToken {
    const userInfo = JSON.parse(window.atob(userToken)) as User;

    return { ...userInfo, token: userToken };
  }

  private loadUserFromLocalStorage(): void {
    const userFromLocal = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

    userFromLocal && this.pushNewUser(userFromLocal);
  }
  private saveTokenToLocalStore(userToken: string): void {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, userToken);
  }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  }*/
}
