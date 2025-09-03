import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: false,
})
export class ModalComponent  implements OnInit {

  @Input() src: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() content: string = '';
  @Input() subtitle!: { authur: string, date: string };

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

}