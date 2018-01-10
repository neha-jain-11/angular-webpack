import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title = "App starts";

  public items : [string] = JSON.parse(localStorage.getItem("items")) || ["Angular 4", "React", "Backbone"];
  public newItem : string = "";
  public pushItem = function () {
    if (this.newItem !== "") {
      this.items.push(this.newItem);
      this.newItem = "";
      this.setLocalStorageData();
    }
  }
  public removeItem = function (index : number) {
    this.items.splice(index, 1);
    this.setLocalStorageData();
  }
  private setLocalStorageData = function () {
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}