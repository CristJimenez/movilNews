import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

type SelectType = "alert" | "action-sheet" | "popover" | "modal";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent  implements OnInit {

  @Input() interface: SelectType = 'popover';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();

  constructor() {}

  ngOnInit() {}

}
