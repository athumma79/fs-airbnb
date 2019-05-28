import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  explore() {
    this.navCtrl.navigateForward("explore");
  }

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

}
