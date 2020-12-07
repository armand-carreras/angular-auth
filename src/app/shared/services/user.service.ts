import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById$(id) : Observable<User>
  {
    let l_user = this.http.get(`api/users/${id}`);
    return l_user;
  }
}
