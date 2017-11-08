import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThfNotificationService } from '@totvs/thf-mobile/app/services/thf-notification/thf-notification.service';
import { ThfToasterOrientation } from '@totvs/thf-core/services/thf-notification-base/thf-toaster-base/thf-toaster-orientation.enum';
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
    let toast = this.thfNotification.success("Msg Sucesso");
    toast.present();
  }

  callWarning() {
    let toast = this.thfNotification.warning({message: "Msg Atenção", orientation: ThfToasterOrientation.Bottom});
    toast.present();
  }

  callError() {
    let toast = this.thfNotification.error({message: "Msg Erro", orientation: ThfToasterOrientation.Top});
    toast.present();
  }

  callInformation() {
    let toast = this.thfNotification.information({message: "Msg Informação", orientation: ThfToasterOrientation.Bottom});
    toast.present();
  }

}
