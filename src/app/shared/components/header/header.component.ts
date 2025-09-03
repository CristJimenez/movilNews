import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

type ColorType = "danger" | "dark" | "light" | "medium" | "primary" | "secondary" | "success" | "tertiary" | "warning";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent  implements OnInit {

  @Input() value: string = '';
  @Input() color: ColorType = 'primary';

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {}

  openSideBar() {
    this.menuCtrl.open();
  }

}
