import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banking-header',
  templateUrl: './banking-header.component.html',
  styleUrls: ['./banking-header.component.scss'],
})
export class BankingHeaderComponent implements OnInit {
  userDetails: any;
  constructor(private route: Router) {
    this.userDetails =
      {
        userName: 'Ramesh Bhardwaj',
        desination: 'Senior Consultant C1',
        userId: 'ramesh.synclovis41@gmail.com ',
        mobileNumber: 9513278988,
        balalnceAmount: 47500
      };
  }

  ngOnInit() {}

  logout(){
    sessionStorage.removeItem('isLoggedIn');
    this.route.navigate(['/banking']);
  }

}
