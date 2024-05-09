import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private _isLogged = signal(false);
  
  private readonly http = inject(HttpClient);

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, { email, password })
      .pipe(
        catchError((error) => throwError(error))
      );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        map((response: any) => {
          console.log(response);
          sessionStorage.setItem('token', response.data.session.access_token);
          this._isLogged.set(true);
          return response;
        }),
        catchError((error) => throwError(error))
      );
  }

  isLogged(): Signal<boolean> {
    return this._isLogged.asReadonly();
  }
}
