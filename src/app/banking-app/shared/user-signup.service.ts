import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserSignupService {
  constructor(private http: HttpClient) {}

  userSignup(userEmail: string, userPass: string) {
    const signUpReq = {
      email: userEmail,
      password: userPass,
      returnSecureToken: true,
    };
    return this.http
      .post(environment.signUpURL + environment.apiKey, signUpReq);
      //.pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
