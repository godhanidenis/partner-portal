import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-pickup-address',
  templateUrl: './view-pickup-address.component.html',
  styleUrls: ['./view-pickup-address.component.scss'],
})
export class ViewPickupAddressComponent implements OnInit {
  @Output() closeModel = new EventEmitter();
  @Input() viewData: any = '';

  constructor() {}
  ngOnInit(): void {}

  handleCancel() {
    this.closeModel.emit();
  }
}
