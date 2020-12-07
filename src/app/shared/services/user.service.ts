import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:string;
  headers: HttpHeaders;


  createHeader()
  {
    this.headers = new HttpHeaders(
      {
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.token
      });

  }

  constructor(private http: HttpClient) { }

  getUserById$(id) : Observable<User>
  {
    this.token = localStorage.getItem('acessToken');
    this.createHeader();
    console.log(this.headers);
    let l_user = this.http.get(`api/users/${id}`, {headers:this.headers});
    return l_user;
  }
}
