import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss'],
})
export class FilterSectionComponent implements OnInit {
  @Output() closeNav = new EventEmitter();
  @Output() changeData = new EventEmitter();

  @Input() shipOutLocation: string = '';
  @Input() sku: string = '';
  @Input() carrier: string = '';
  @Input() committedShipDate: string = '';
  @Input() status: string = '';

  @Input() tabName: string = '';

  constructor() {}
  ngOnInit(): void {}

  closeSideBar() {
    this.closeNav.emit();
  }

  changeValue(value: string, type: string) {
    this.changeData.emit({ value: value, type: type });
  }
}
