import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showHide() {
    var x = document.getElementById("password");
    if ((x as HTMLInputElement).type === "password") {
      (x as HTMLInputElement).type = "text";
    } else {
      (x as HTMLInputElement).type = "password";
    }
  }

  login() {
    this.navCtrl.navigateForward("explore");
  }

  constructor(private navCtrl: NavController) {}
}
