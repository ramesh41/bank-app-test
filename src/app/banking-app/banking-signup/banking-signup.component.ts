import { Component, OnInit } from '@angular/core';
import { UserSignupService } from '../shared/user-signup.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from 'src/assets/mesageList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banking-signup',
  templateUrl: './banking-signup.component.html',
  styleUrls: ['./banking-signup.component.scss'],
})
export class BankingSignupComponent implements OnInit {
  submitted = false;
  fieldValidationErrorList = ERROR_MESSAGES.signUp;
  registerBankingAccount: FormGroup;

  constructor(
    private userSignUpService: UserSignupService,
    private fb: FormBuilder,
    private route: Router) {}

  ngOnInit() {
    this.registerBankingAccount = this.fb.group({
      username: ['', [Validators.required]],
      bankAccount: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get getSignupFormControl() {
    return this.registerBankingAccount.controls;
  }
  registerUserAccount() {
    this.submitted = true;
    if (this.registerBankingAccount.invalid) {
      return;
    }
    console.log('******', this.submitted);

    this.userSignUpService
      .userSignup(
        this.registerBankingAccount.controls.email.value,
        this.registerBankingAccount.controls.password.value
      )
      .subscribe((reqData: any) => {
        if(reqData.email){
          sessionStorage.setItem('emailId', this.registerBankingAccount.controls.email.value);
          this.route.navigate(['/banking']);
        }
      }, err =>{
        console.log('User Registration', err);
      });
  }
}
