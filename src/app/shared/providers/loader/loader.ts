import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class Loader {

  constructor(private readonly loadingCtrl: LoadingController) {}

  async preset(payload: { message: string }) {
    const loading = await this.loadingCtrl.create({
      message: payload.message,
    });
    await loading.present();
  }
  
  async dismiss() {
    await this.loadingCtrl.dismiss();
  }
}
