import { Component } from '@angular/core';
// @Component is a decorator  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'This is my first app';
}
