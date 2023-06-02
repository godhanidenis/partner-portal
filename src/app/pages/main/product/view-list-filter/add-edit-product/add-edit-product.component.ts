import { UserPermissionService } from './../../../../../shared/service/user-permission.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  @Input() editSection: boolean = false;
  @ViewChild('addInput', { static: false }) addInput!: ElementRef;

  addEditProductForm!: FormGroup;
  listOfBrand: string[] = [];
  brandIndex = 0;
  listOfCollection: string[] = [];
  collectionIndex = 0;
  listOfProductCategory: string[] = [];
  productCategoryIndex = 0;
  listOfSalesTier = ['Medium Seller', 'Low Seller', 'Slow Seller'];
  salesTierIndex = 0;
  editData: any = '';
  setDropDownValue: string = '';
  searchList: string[] = [];
  editSku: string = '';
  isLoading: boolean = false;
  userPermissions: any = '';
  disabledFiled: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modal: NzModalService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService,
    private userPermissionService: UserPermissionService
  ) {
    userPermissionService.userPermission.subscribe((permission: any) => {
      this.userPermissions = permission;
      if (this.userPermissions.partner_sku_level_handling) {
        this.addEditProductForm.controls['handling_time'].setValidators([
          Validators.required,
        ]);
      }
    });
    this.productService.getBrand().subscribe(
      (res: any) => {
        if (res.success) {
          this.listOfBrand = res.brands;
        } else {
          if (res.error_message === 'PC param missing') {
            this.message.create('warning', res.error_message);
          } else {
            this.message.create('error', res.error_message);
          }
        }
      },
      (err) => {
        console.log('error', err);
      }
    );
    this.productService.getCategories().subscribe(
      (res: any) => {
        if (res.success) {
          this.listOfProductCategory = res.categories;
        } else {
          if (res.error_message === 'PC param missing') {
            this.message.create('warning', res.error_message);
          } else {
            this.message.create('error', res.error_message);
          }
        }
      },
      (err) => {
        console.log('error', err);
      }
    );
    this.productService.getCollections().subscribe(
      (res: any) => {
        if (res.success) {
          this.listOfCollection = res.collections;
        } else {
          if (res.error_message === 'PC param missing') {
            this.message.create('warning', res.error_message);
          } else {
            this.message.create('error', res.error_message);
          }
        }
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

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
      this.addEditProductForm.disable();
      this.disabledFiled = true;
      const sku = this.activatedRoute.snapshot.paramMap.get('sku');
      if (sku) {
        this.editSku = sku;
        this.productService.getProduct(sku).subscribe(
          (res: any) => {
            if (res.success) {
              this.editData = res.product;

              if (this.editData) {
                this.addEditProductForm.controls['mpn'].setValue(
                  this.editData?.mpn
                );
                this.addEditProductForm.controls['upc'].setValue(
                  this.editData?.upc
                );
                this.addEditProductForm.controls['amazon_asin'].setValue(
                  this.editData?.asin
                );
                this.addEditProductForm.controls['product_name'].setValue(
                  this.editData?.product_name
                );
                this.addEditProductForm.controls['brand'].setValue(
                  this.editData?.brand
                );
                this.addEditProductForm.controls['collection'].setValue(
                  this.editData?.collection
                );
                this.addEditProductForm.controls['product_category'].setValue(
                  this.editData?.category
                );
                this.addEditProductForm.controls['sales_tier'].setValue(
                  this.editData?.sales_tier
                );
                this.addEditProductForm.controls['unit_price'].setValue(
                  this.editData?.unit_price
                );
                this.addEditProductForm.controls['map'].setValue(
                  this.editData?.map
                );
                this.addEditProductForm.controls['msrp'].setValue(
                  this.editData?.msrp
                );
                this.addEditProductForm.controls['handling_time'].setValue(
                  this.editData?.handling_time
                );
                this.addEditProductForm.controls['shipping_Method'].setValue(
                  this.editData?.shipping_method
                );
                this.addEditProductForm.controls['number_of_boxes'].setValue(
                  this.editData?.number_of_boxes
                );
                this.addEditProductForm.controls['product_status'].setValue(
                  this.editData?.product_status
                );
                this.editData?.shipping_dimensions.map(
                  (res: {
                    weight: any;
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
                        gross_weight: res?.weight,
                      })
                    );
                  }
                );
              }
            } else {
              if (res.error_message === 'SKU param missing') {
                this.message.create('warning', res.error_message);
              } else {
                this.message.create('error', res.error_message);
              }
            }
          },
          (err) => {
            console.log('error', err);
          }
        );
      }
    } else {
      this.addShippingDimensionsOfBoxes();
    }

    // this.addEditProductForm.controls['number_of_boxes'].disable();
  }

  editProduct() {
    this.modal.confirm({
      nzTitle: 'Are you sure edit this product?',
      nzContent: '',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.addEditProductForm.enable();
        this.disabledFiled = false;
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
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

  submit() {
    this.isLoading = true;

    let data: any = {
      amazon_asin: this.addEditProductForm.value.amazon_asin,
      brand: this.addEditProductForm.value.brand,
      collection: this.addEditProductForm.value.collection,
      handling_time: this.addEditProductForm.value.handling_time,
      map: this.addEditProductForm.value.map,
      mpn: this.addEditProductForm.value.mpn,
      msrp: this.addEditProductForm.value.msrp,
      product_category: this.addEditProductForm.value.product_category,
      product_name: this.addEditProductForm.value.product_name,
      product_status: this.addEditProductForm.value.product_status,
      sales_tier: this.addEditProductForm.value.sales_tier,
      shipping_Method: this.addEditProductForm.value.shipping_Method,
      number_of_boxes: this.addEditProductForm.value.number_of_boxes
        ? this.addEditProductForm.value.number_of_boxes
        : 1,
      shipping_dimensions_of_box:
        this.addEditProductForm.value.shipping_dimensions_of_box,
      unit_price: this.addEditProductForm.value.unit_price,
      upc: this.addEditProductForm.value.upc,
    };

    // if (this.editData && this.editId !== 0) {
    //   this.productService.editProduct(data, this.editId).subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       this.isLoading = false;
    //     },
    //     (err) => (this.isLoading = false)
    //   );
    // } else {
    //   this.productService.createProduct(data).subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       this.isLoading = false;
    //     },
    //     (err) => (this.isLoading = false)
    //   );
    // }
  }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
