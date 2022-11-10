import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  constructor(private contexts: ChildrenOutletContexts) {}
  ngOnInit(): void {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data
      ?.animationState;
  }
}
