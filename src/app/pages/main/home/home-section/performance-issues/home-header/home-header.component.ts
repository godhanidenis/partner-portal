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
  isVisible: boolean = false;
  referenceCode: string = '';
  constructor() {}
  ngOnInit(): void {
    if (this.tabName === 'Handling Time Conflict') {
      this.templateType = 'EDIT_SKU_SPECIFIC_HANDLING_TIME';
    }
  }

  closeMultiProduct(event: string) {
    if (event) {
      this.referenceCode = event;
      this.isVisible = true;
    }
    this.isMultipleProductsVisible = false;
  }
}
