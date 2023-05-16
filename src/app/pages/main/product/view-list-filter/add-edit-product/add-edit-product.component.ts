import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  @Input() editSection: boolean = false;
  addEditProductForm!: FormGroup;
  listOfBrand = ['Brand 1', 'Brand 2'];
  brandIndex = 0;
  listOfCollection = ['Collection 1', 'Collection 2'];
  collectionIndex = 0;
  listOfProductCategory = ['Category 1', 'Category 2'];
  productCategoryIndex = 0;
  listOfSalesTier = ['SalesTier 1', 'SalesTier 2'];
  salesTierIndex = 0;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addEditProductForm = new FormGroup({
      mpn: new FormControl('', [
        Validators.required,
        Validators.maxLength(24),
        Validators.pattern('^[A-Za-z0-9]+$'),
      ]),
      upc: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(14),
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

      number_of_boxes: new FormControl(''),
      product_status: new FormControl('active'),
      shipping_dimensions_of_box: this.formBuilder.array([]),
    });
    this.addShippingDimensionsOfBoxes();
  }

  get shippingDimensionsOfBoxes(): FormArray {
    return this.addEditProductForm.controls[
      'shipping_dimensions_of_box'
    ] as FormArray;
  }

  newShippingDimensionsOfBoxes(): FormGroup {
    return this.formBuilder.group({
      length: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')],
      ],
      width: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')],
      ],
      height: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')],
      ],
      gross_weight: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')],
      ],
    });
  }

  addShippingDimensionsOfBoxes() {
    this.shippingDimensionsOfBoxes.push(this.newShippingDimensionsOfBoxes());
  }

  removeShippingDimensionsOfBoxes(i: number) {
    this.shippingDimensionsOfBoxes.removeAt(i);
  }

  addItem(input: HTMLInputElement, type: string): void {
    switch (type) {
      case 'Brand':
        if (this.listOfBrand.indexOf(input.value) === -1) {
          this.listOfBrand = [
            ...this.listOfBrand,
            input.value || `New item ${this.brandIndex++}`,
          ];
        }
        break;
      case 'Collection':
        if (this.listOfCollection.indexOf(input.value) === -1) {
          this.listOfCollection = [
            ...this.listOfCollection,
            input.value || `New item ${this.collectionIndex++}`,
          ];
        }
        break;
      case 'product_category':
        if (this.listOfProductCategory.indexOf(input.value) === -1) {
          this.listOfProductCategory = [
            ...this.listOfProductCategory,
            input.value || `New item ${this.productCategoryIndex++}`,
          ];
        }
        break;
      default:
        if (this.listOfSalesTier.indexOf(input.value) === -1) {
          this.listOfSalesTier = [
            ...this.listOfSalesTier,
            input.value || `New item ${this.salesTierIndex++}`,
          ];
        }
        break;
    }
  }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
