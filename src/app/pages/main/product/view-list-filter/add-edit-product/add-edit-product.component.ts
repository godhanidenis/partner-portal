import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  @Input() editSection: boolean = false;
  addEditProductForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.addEditProductForm = new FormGroup({
      mpn: new FormControl('', [
        Validators.required,
        Validators.maxLength(24),
        Validators.pattern('^[A-Za-z0-9]+$'),
      ]),
      upc: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.pattern('^[0-9_.]+$'),
      ]),
      amazon_asin: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[A-Z0-9_.]+$'),
      ]),
      product_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(34),
      ]),
      brand: new FormControl('', [
        Validators.required,
        Validators.maxLength(34),
      ]),
      collection: new FormControl('', [Validators.maxLength(34)]),
      product_category: new FormControl('', [Validators.maxLength(34)]),
      sales_tier: new FormControl('', [Validators.maxLength(34)]),
      unit_price: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+(.[0-9]{1,2})?$'),
      ]),
      map: new FormControl('', [Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')]),
      msrp: new FormControl('', [Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')]),
      handling_time: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(30),
      ]),
      shipping_Method: new FormControl('', [Validators.required]),
      number_of_boxes: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
      shipping_dimensions_of_each_box: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+(.[0-9]{1,2})?$'),
      ]),
      product_status: new FormControl('', [Validators.required]),
      asin_status: new FormControl('', [Validators.required]),
    });
  }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
