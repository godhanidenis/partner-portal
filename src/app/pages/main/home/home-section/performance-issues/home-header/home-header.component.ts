import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Input() description: string = '';
  @Input() tabName: string = '';
  templateType: string = '';
  isMultipleProductsVisible: boolean = false;
  constructor() {}
  ngOnInit(): void {
    if (this.tabName === 'Handling Time Conflict') {
      this.templateType = 'Edit SKU specific Handling time';
    }
  }
}
