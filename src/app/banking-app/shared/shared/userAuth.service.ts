import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  public userdataSubject: any;

  constructor(private httpClient: HttpClient) {
  }

  setUserInformation(obj: any) {
    this.userdataSubject = obj;
  }

  loadAllUserDetails() {
    return this.userdataSubject;
  }

  validateUserCredentials() {
    return this.httpClient
      .get('./assets/user-auth.json')
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
