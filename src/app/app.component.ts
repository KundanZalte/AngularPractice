import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'routing-add';
  title = 'Demo Of Pipes';
  demoDate = Date();
  user = {
  name: 'kundan zalte',
  age: '25'
  }
  values: [string, number] = ["Bob", 15];
  /**
   *
   */
  constructor() {
    // let adminValue = Roles.Admin;
    let tuppleValue = this.values[0];
  }
}
