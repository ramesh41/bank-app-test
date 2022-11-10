import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ERROR_MESSAGES } from 'src/assets/mesageList';
import { BankingAuthenticationService } from '../shared/banking-authentication.service';

@Component({
  selector: 'app-welcome-banking',
  templateUrl: './welcome-banking.component.html',
  styleUrls: ['./welcome-banking.component.scss'],
})
export class WelcomeBankingComponent implements OnInit {
  bankingLoginForm: FormGroup;
  submitted = false;
  errorMessage: string;
  fieldValidationErrorList = ERROR_MESSAGES.signIn;
  constructor(private fb: FormBuilder,
    private bankingAuth: BankingAuthenticationService,
    private route: Router) {}

  ngOnInit() {
    this.bankingLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    });
    this.bankingLoginForm.get('email').setValue(sessionStorage.getItem('emailId'));
    this.bankingLoginForm.get('password').setValue(sessionStorage.getItem('password'));
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get getLoginFormControl() {
    return this.bankingLoginForm.controls;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get getEmailId() {
    return this.bankingLoginForm.get('email');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get getPassword() {
    return this.bankingLoginForm.get('password');
  }

  userLogin(){
    this.submitted = true;
    if (this.bankingLoginForm.invalid) {
      return;
    }
    this.validateCredentials(this.bankingLoginForm.controls);
  }

  validateCredentials(userObj: any){
    const usrCredOnj = {
      email: userObj.email.value,
      password: userObj.password.value
    };
    this.bankingAuth.userCredentialchecks(usrCredOnj).subscribe((loggedResdata: any)=>{
      if(loggedResdata.refreshToken && loggedResdata.idToken){
         sessionStorage.setItem('isLoggedIn', 'true');
         this.route.navigate(['/transactions']);
      }
    }, err=>{
      this.errorMessage = this.errorManagement(err.error.error.message);
    });
  }

  errorManagement(errorStatus: string){
    const err = {
      EMAIL_NOT_FOUND: 'Email doesn\'t exist on file.',
      INVALID_PASSWORD: 'Password is invalid.',
      INVALID_EMAIL: 'Email pattern is not valid.'
    };
   return err[errorStatus] || 'Server side error';
  }
}
