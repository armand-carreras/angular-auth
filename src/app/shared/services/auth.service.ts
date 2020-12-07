import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: HttpHeaders = new HttpHeaders(
    {'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  loginUser$(user) : Observable<any>
  {
    const url_api='api/users/login';
    return this.http.post<User>(url_api, user,{headers:this.headers})
  }
  registerUser$(user:User) : Observable<any>
  {
    const url_api= 'api/users/register';
    console.log(url_api + "||" + user.email);
    return this.http.post<User>(url_api,user,{headers:this.headers});
  }

  setToken(token):void
  {
    localStorage.setItem('acessToken', token);
  }
}
