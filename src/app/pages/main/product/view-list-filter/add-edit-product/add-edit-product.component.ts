import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  @Input() editSection: boolean = false;
  @ViewChild('addInput', { static: false }) addInput!: ElementRef;

  addEditProductForm!: FormGroup;
  listOfBrand = ['Sony', 'Dell', 'Samsung'];
  brandIndex = 0;
  listOfCollection = [
    'Floral Collection',
    'White Collection',
    'Kids Collection',
  ];
  collectionIndex = 0;
  listOfProductCategory = ['Kid’s Furniture', 'Rugs', 'Tables'];
  productCategoryIndex = 0;
  listOfSalesTier = ['Medium Seller', 'Low Seller', 'Slow Seller'];
  salesTierIndex = 0;
  editData = {
    mpn: 'powershell',
    upc: '1234212342342',
    amazon_asin: 'AS123',
    product_name: 'Demo',
    brand: 'Sony',
    collection: 'Floral Collection',
    product_category: 'Rugs',
    sales_tier: 'Slow Seller',
    unit_price: '123.21',
    map: '6.2',
    msrp: '5.21',
    handling_time: '25',
    shipping_Method: 'smallParcel',
    number_of_boxes: 2,
    product_status: 'active',
    shipping_dimensions_of_box: [
      {
        length: 2.6,
        width: 4,
        height: 6,
        gross_weight: 8,
      },
      {
        length: 1.6,
        width: 2,
        height: 3,
        gross_weight: 4,
      },
    ],
  };
  setDropDownValue: string = '';
  searchList: string[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modal: NzModalService
  ) {}

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
      unit_price: new FormControl('', [Validators.required]),
      map: new FormControl(''),
      msrp: new FormControl(''),
      handling_time: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(30),
      ]),
      shipping_Method: new FormControl('', [Validators.required]),

      number_of_boxes: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
      product_status: new FormControl('active'),
      shipping_dimensions_of_box: this.formBuilder.array([]),
    });

    if (this.editSection) {
      this.addEditProductForm.controls['mpn'].setValue(this.editData?.mpn);
      this.addEditProductForm.controls['upc'].setValue(this.editData?.upc);
      this.addEditProductForm.controls['amazon_asin'].setValue(
        this.editData?.amazon_asin
      );
      this.addEditProductForm.controls['product_name'].setValue(
        this.editData?.product_name
      );
      this.addEditProductForm.controls['brand'].setValue(this.editData?.brand);
      this.addEditProductForm.controls['collection'].setValue(
        this.editData?.collection
      );
      this.addEditProductForm.controls['product_category'].setValue(
        this.editData?.product_category
      );
      this.addEditProductForm.controls['sales_tier'].setValue(
        this.editData?.sales_tier
      );
      this.addEditProductForm.controls['unit_price'].setValue(
        this.editData?.unit_price
      );
      this.addEditProductForm.controls['map'].setValue(this.editData?.map);
      this.addEditProductForm.controls['msrp'].setValue(this.editData?.msrp);
      this.addEditProductForm.controls['handling_time'].setValue(
        this.editData?.handling_time
      );
      this.addEditProductForm.controls['shipping_Method'].setValue(
        this.editData?.shipping_Method
      );
      this.addEditProductForm.controls['number_of_boxes'].setValue(
        this.editData?.number_of_boxes
      );
      this.addEditProductForm.controls['product_status'].setValue(
        this.editData?.product_status
      );
      this.editData?.shipping_dimensions_of_box.map(
        (res: {
          length: number;
          width: number;
          height: number;
          gross_weight: number;
        }) => {
          this.shippingDimensionsOfBoxes.push(
            this.formBuilder.group({
              length: res?.length,
              width: res?.width,
              height: res?.height,
              gross_weight: res?.gross_weight,
            })
          );
        }
      );
    } else {
      this.addShippingDimensionsOfBoxes();
    }

    this.addEditProductForm.controls['number_of_boxes'].disable();
  }

  searchValue(event: string, type: string) {
    this.setDropDownValue = event;
    if (event) {
      switch (type) {
        case 'Brand':
          this.searchList = this.listOfBrand.filter((res: string) => {
            return res.toLocaleLowerCase().includes(event.toLocaleLowerCase());
          });
          break;
        case 'Collection':
          this.searchList = this.listOfCollection.filter((res: string) => {
            return res.toLocaleLowerCase().includes(event.toLocaleLowerCase());
          });
          break;
        case 'Product Category':
          this.searchList = this.listOfProductCategory.filter((res: string) => {
            return res.toLocaleLowerCase().includes(event.toLocaleLowerCase());
          });
          break;
        default:
          this.searchList = this.listOfSalesTier.filter((res: string) => {
            return res.toLocaleLowerCase().includes(event.toLocaleLowerCase());
          });
          break;
      }
    }
  }

  // createBoxes() {
  //   if (
  //     this.addEditProductForm.value.number_of_boxes >= 1 &&
  //     this.addEditProductForm.value.number_of_boxes <= 10
  //   ) {
  //     if (this.shippingDimensionsOfBoxes.controls.length >= 1) {
  //       this.shippingDimensionsOfBoxes.controls = [];
  //     }
  //     for (
  //       let index = 1;
  //       index < this.addEditProductForm.value.number_of_boxes + 1;
  //       index++
  //     ) {
  //       this.addShippingDimensionsOfBoxes();
  //     }
  //   }
  // }

  get shippingDimensionsOfBoxes(): FormArray {
    return this.addEditProductForm.controls[
      'shipping_dimensions_of_box'
    ] as FormArray;
  }
  // , Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')

  newShippingDimensionsOfBoxes(): FormGroup {
    return this.formBuilder.group({
      length: ['', [Validators.required]],
      width: ['', [Validators.required]],
      height: ['', [Validators.required]],
      gross_weight: ['', [Validators.required]],
    });
  }

  addShippingDimensionsOfBoxes() {
    this.shippingDimensionsOfBoxes.push(this.newShippingDimensionsOfBoxes());
    this.addEditProductForm.controls['number_of_boxes'].setValue(
      this.shippingDimensionsOfBoxes.controls.length
    );
  }

  removeShippingDimensionsOfBoxes(i: number) {
    this.shippingDimensionsOfBoxes.removeAt(i);
    this.addEditProductForm.controls['number_of_boxes'].setValue(
      this.shippingDimensionsOfBoxes.controls.length
    );
  }

  addItem(type: string): void {
    if (this.setDropDownValue && this.searchList.length === 0) {
      switch (type) {
        case 'Brand':
          if (this.listOfBrand.indexOf(this.setDropDownValue) === -1) {
            this.listOfBrand = [...this.listOfBrand, this.setDropDownValue];
          }
          break;
        case 'Collection':
          if (this.listOfCollection.indexOf(this.setDropDownValue) === -1) {
            this.listOfCollection = [
              ...this.listOfCollection,
              this.setDropDownValue,
            ];
          }
          break;
        case 'Product Category':
          if (
            this.listOfProductCategory.indexOf(this.setDropDownValue) === -1
          ) {
            this.listOfProductCategory = [
              ...this.listOfProductCategory,
              this.setDropDownValue,
            ];
          }
          break;
        default:
          if (this.listOfSalesTier.indexOf(this.setDropDownValue) === -1) {
            this.listOfSalesTier = [
              ...this.listOfSalesTier,
              this.setDropDownValue,
            ];
          }
          break;
      }
    }
  }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
