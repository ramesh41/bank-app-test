import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.post(
      environment.signUpURL + environment.apiKey,
      signUpReq
    );
    //.pipe(retry(1), catchError(this.handleError));
  }

  getRegisteredUserInfo(tokenId: string) {
    return this.http
      .post(environment.getUserInfoURL + environment.apiKey, {
        idToken: tokenId,
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  forgotUserPassword(emailId: string){
    return this.http.post(environment.forgotPassURL + environment.apiKey, {
      email: emailId,
      requestType: 'PASSWORD_RESET'
    })
    .pipe(retry(1), catchError(this.handleError));
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
