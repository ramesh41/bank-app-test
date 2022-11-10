import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BankingAuthenticationService {
  constructor(private http: HttpClient) {}

  userCredentialchecks(cred: any) {
    const reqPayload = {
      email: cred.email,
      password: cred.password,
      returnSecureToken: true,
    };
    return this.http.post(environment.signInURL + environment.apiKey, reqPayload);
  }
}
