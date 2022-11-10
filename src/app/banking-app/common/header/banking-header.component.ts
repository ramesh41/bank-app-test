import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignupService } from '../../shared/user-signup.service';

@Component({
  selector: 'app-banking-header',
  templateUrl: './banking-header.component.html',
  styleUrls: ['./banking-header.component.scss'],
})
export class BankingHeaderComponent implements OnInit {
  userDetails: any;
  constructor(private route: Router, private user: UserSignupService) {
    this.userDetails = {
      userName: 'Ramesh Bhardwaj',
      desination: 'Senior Consultant C1',
      mobileNumber: 9513278988,
      balalnceAmount: 47500,
    };
  }

  ngOnInit() {
    const getTokenId = sessionStorage.getItem('token_id');
    this.user.getRegisteredUserInfo(getTokenId).subscribe(
      (data: any) => {
        this.userDetails.userId = data.users[0].email;
        console.log(this.userDetails);
        console.log(data.users[0].email);
      },
      (err) => {
        console.log('GET USER ERROR ', err);
      }
    );
  }

  logout() {
    sessionStorage.removeItem('isLoggedIn');
    this.route.navigate(['/banking']);
  }
}
