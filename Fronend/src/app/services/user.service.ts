import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  // register(form) {
  //   return this.http.post('http://127.0.0.1:8000/api/register', form);

  // }
  // login(form) {
  //   return this.http.post('http://127.0.0.1:8000/api/login', form);

  // }

    // User registration
    register(user: User): Observable<any> {
    
      return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
    }

    // Login
   login(user: User): Observable<any> {
      return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
    }

    // Access user profile
    profileUser(): Observable<any> {
      return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
    }
    sendPasswordResetLink(data) {
      return this.http.post('http://127.0.0.1:8000/api/auth/sendPasswordResetLink',data);
    }

}
