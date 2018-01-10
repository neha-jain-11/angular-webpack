import { Component } from '@angular/core';

// import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title = "App starts";

  public items : [string]= ["Angular 4", "React", "Backbone"];
  public newItem : string = "";
  public pushItem = function () {
    if (this.newItem !== "") {
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }

  public removeItem = function (index : number) {
    this.items.splice(index, 1);
  }

}