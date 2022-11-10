import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    private alertController: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  async loadingSpinner(mess: string, dur: number, customClass: string, animation: boolean) {
    const loading = await this.loadingCtrl.create({
      message: mess,
      duration: dur,
      cssClass: customClass,
      animated: animation,
    });
    loading.present();
  }

  async alertModal(alertObj: any) {
    const alert = await this.alertController.create({
      header: alertObj.header,
      subHeader: alertObj.subHeader,
      message: alertObj.message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
