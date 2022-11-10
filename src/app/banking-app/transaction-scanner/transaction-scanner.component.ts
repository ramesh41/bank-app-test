import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-scanner',
  templateUrl: './transaction-scanner.component.html',
  styleUrls: ['./transaction-scanner.component.scss'],
})
export class TransactionScannerComponent implements OnInit {
  scanData: any;
  accountNum: any;
  data = [{
    name: 'Ramesh Bhardwaj',
    accountNumber: '5010',
    email: 'ramesh.synclovis41@gmail.com'
  }];
  constructor() {
    this.scanData = JSON.stringify(this.data);
    this.accountNum = JSON.stringify(50100200766011);
  }

  ngOnInit() {}
}
