import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking-profile',
  templateUrl: './banking-profile.component.html',
  styleUrls: ['./banking-profile.component.scss'],
})
export class BankingProfileComponent implements OnInit {
  latestTransactionHistory: any;
  constructor() {
    this.latestTransactionHistory = [
      {
        transactionID: 'tyeeeg5667557',
        deviceID: 'uasjaslsa',
        iMEI: 'ssjdjdssd',
        transactionDate: '12-12-2019',
        time: '11:40',
        userName: 'Ramesh Kumar',
        amount: 4000,
        paymentMethod: 'Mobile money',
      },
      {
        transactionID: 'tyeeeg5667557',
        deviceID: 'uasjaslsa',
        iMEI: 'ssjdjdssd',
        transactionDate: '12-12-2019',
        time: '11:40',
        userName: 'Rajesh Kumar Rajbhar',
        amount: 30000,
        paymentMethod: 'Fund Transfer',
      },
      {
        transactionID: 'tyeeeg5667557',
        deviceID: 'uasjaslsa',
        iMEI: 'ssjdjdssd',
        transactionDate: '12-12-2019',
        time: '11:40',
        userName: 'Kunal Raj Bhardwaj',
        amount: 4000,
        paymentMethod: 'Money Transfer',
      },
      {
        transactionID: 'tyeeeg5667557',
        deviceID: 'uasjaslsa',
        iMEI: 'ssjdjdssd',
        transactionDate: '12-12-2019',
        time: '11:40',
        userName: 'Nikita Bhardwaj',
        amount: 4495,
        paymentMethod: 'Payment Recieved',
      },
    ];
  }

  ngOnInit() {}
}
