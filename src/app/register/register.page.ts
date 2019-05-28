import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  showHide() {
    var x = document.getElementById("password");
    if ((x as HTMLInputElement).type === "password") {
      (x as HTMLInputElement).type = "text";
    } else {
      (x as HTMLInputElement).type = "password";
    }
  }

  register() {
    this.navCtrl.navigateForward("home");
  }

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

}
