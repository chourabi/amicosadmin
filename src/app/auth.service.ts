import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  auth(username,password):Observable<any>{
    return this.http.post(environment.api+ '/api/auth/signin',{
      "username":username,
      "password":password
    },{headers:{
      "Content-Type": "application/json"
    }})
  }

}
