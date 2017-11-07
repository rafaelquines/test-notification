import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThfNotificationService } from '@totvs/thf-mobile/app/services/thf-notification/thf-notification.service';
import { ThfToasterOrientation } from '@totvs/thf-mobile/app/services/thf-notification/thf-toaster-orientation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ThfNotificationService]
})
export class HomePage {

  constructor(public navCtrl: NavController, public thfNotification: ThfNotificationService) {

  }

  callSuccess() {
    // console.log(ThfToasterOrientation.Bottom);
    let toast = this.thfNotification.success({message: "Msg Sucesso", duration: 3000, orientation: ThfToasterOrientation.Top});
    toast.present();
  }

  callWarning() {
    let toast = this.thfNotification.warning({message: "Msg Atenção", duration: 3000, orientation: ThfToasterOrientation.Bottom});
    toast.present();
  }

  callError() {
    let toast = this.thfNotification.error({message: "Msg Erro", duration: 3000, orientation: ThfToasterOrientation.Top});
    toast.present();
  }

  callInformation() {
    let toast = this.thfNotification.information({message: "Msg Informação", duration: 3000, orientation: ThfToasterOrientation.Bottom});
    toast.present();
  }

}
