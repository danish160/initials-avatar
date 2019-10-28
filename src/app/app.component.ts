import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  firstName = "John";
  lastName = "Doe";

  public get getInitialsBgColor(): string {
    var s = 30;
    var l = 47;

    if (this.firstName) {
      s = this.getSaturationByName(this.firstName, this.lastName);
      l = this.getLightnessByName(this.firstName, this.lastName);
    }

    var color = this.stringToHslColor(this.firstName + " " + this.lastName, l, s);
    return color;
  }
  getInitialsTextColor(firstName: string, lastName: string): string {
    var s = this.getSaturationByName(firstName, lastName);
    var l = this.getLightnessByName(firstName, lastName);
    if (l >= 40) return "black";
    else return "white";
  }
  getLightnessByName(firstName: string, lastName: string): number {
    var num =
      firstName.toUpperCase().charCodeAt(0) +
      lastName.toUpperCase().charCodeAt(0);
    return this.scaleBetween(num, 5, 95, 65 * 2, 97 * 2);
  }
  getSaturationByName(firstName: string, lastName: string): number {
    var num =
      firstName.toUpperCase().charCodeAt(0) +
      lastName.toUpperCase().charCodeAt(0);
    return this.scaleBetween(num, 30, 75, 65 * 2, 97 * 2);
  }
  scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max): number {
    var res =
      ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) +
      minAllowed;
    return parseInt(res);
  }
  stringToHslColor(str: string, saturation: number, lightness: number): string {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var h = hash % 360;
    return "hsl(" + h + ", " + saturation + "%, " + lightness + "%)";
  }
}
