import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IToast } from 'src/app/interfaces/toast.interface';

@Injectable({
  providedIn: 'root'
})
export class Toast {

  constructor(
    private readonly toastCtrl: ToastController
  ) {}

  async present(t: IToast) {
    const toast = await this.toastCtrl.create({
      message: t.message,
      duration: 1500,
      position: t.position,
      color: t.color,
    });

    await toast.present();
  }

}
