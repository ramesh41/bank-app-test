import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss'],
})
export class ValidationMessageComponent implements OnInit {
  @Input() errorMessages: any;
  @Input() errorMessagesType: any;
  constructor() { }

  ngOnInit() {}
}
