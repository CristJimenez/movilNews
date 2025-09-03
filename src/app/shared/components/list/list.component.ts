import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false,
})
export class ListComponent  implements OnInit {

  @Input() items!: string[];
  @Output() itemClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  public valueItem(item: string) {
    this.itemClick.emit(item);
  }

}
