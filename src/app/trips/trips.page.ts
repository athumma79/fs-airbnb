import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  explore() {
    this.navCtrl.navigateForward("explore");
  }

  details() {
    this.navCtrl.navigateForward("details");
  }

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

}
