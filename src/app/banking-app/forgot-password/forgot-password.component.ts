import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from 'src/assets/mesageList';
import { UserSignupService } from '../shared/user-signup.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  fieldValidationErrorList = ERROR_MESSAGES.forgotPassword;
  bankingForgotPassForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private userSignupService: UserSignupService
  ) {}

  ngOnInit() {
    this.bankingForgotPassForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
    });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get getForgotPassFormControl() {
    return this.bankingForgotPassForm.controls;
  }
  userForgotPass() {
    this.submitted = true;
    if (this.bankingForgotPassForm.invalid) {
      return;
    }
    this.userSignupService
      .forgotUserPassword(this.getForgotPassFormControl.emailId.value)
      .subscribe(
        (res: any) => {
          console.log('Response for forgot Password', res);
        },
        (err) => {
          console.log('Forgot Password err is : ', err);
        }
      );
  }
}
