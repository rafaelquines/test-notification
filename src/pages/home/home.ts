import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ThfNotificationService } from '@totvs/thf-mobile/app/services/thf-notification/thf-notification.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ThfNotificationService]
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public thfNotification: ThfNotificationService) {

  }

  callToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }

  callSuccess() {
    let toast = this.thfNotification.success();
    toast.present();
  }

  callWarning() {
    let toast = this.thfNotification.warning();
    toast.present();
  }

  callError() {
    let toast = this.thfNotification.error();
    toast.present();
  }

  callInformation() {
    let toast = this.thfNotification.information();
    toast.present();
  }

}
