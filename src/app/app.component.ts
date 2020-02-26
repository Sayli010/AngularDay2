import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day2';
  data = "This is parent component data";

  detectEvent(value){
    this.title = value
  }
}
