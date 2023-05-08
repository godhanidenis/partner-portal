import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';

@Component({
  selector: 'app-add-pickup-address',
  templateUrl: './add-pickup-address.component.html',
  styleUrls: ['./add-pickup-address.component.scss'],
})
export class AddPickupAddressComponent implements OnInit {
  @Output() closeModel = new EventEmitter();

  ascSetupForm!: FormGroup;
  reTypeAccountNumber: boolean = false;
  breadcrumb: any;
  isLoading: boolean = false;

  tooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };
  vendorAddress: boolean = false;
  rtoAddress: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    this.breadcrumb = this.activatedRoute.snapshot.url;
  }

  ngOnInit(): void {
    this.ascSetupForm = new FormGroup({
      address_nickname: new FormControl('', [Validators.required]),
      company_name: new FormControl('', [Validators.required]),
      contact_name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9_.]+$'),
      ]),
      extension: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      address_line_1: new FormControl('', [Validators.required]),
      pin_code: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern('^[0-9_.]+$'),
      ]),
      city: new FormControl('', [Validators.required]),
      address_line_2: new FormControl(''),
      state: new FormControl('', [Validators.required]),
      open_at: new FormControl(new Date(0, 0, 0, 0, 0, 0)),
      close_at: new FormControl(new Date(0, 0, 0, 0, 0, 0)),
      time_zone: new FormControl(''),
      vendor_address: new FormControl(false),
      rto_address: new FormControl(false),
      supplier_name: new FormControl(''),
      supplier_gstin: new FormControl(''),
      select_pickup_address: new FormControl(''),
    });
  }

  reTypeAccount(event: any) {
    this.reTypeAccountNumber = event.target.value;
    if (
      this.ascSetupForm.value.account_number ===
      this.ascSetupForm.value.re_type_account_number
    ) {
      this.reTypeAccountNumber = false;
    } else {
      this.reTypeAccountNumber = true;
    }
  }

  updateAllChecked(type: string, event: boolean) {
    if (type === 'vendor') {
      this.vendorAddress = event;
    } else {
      this.rtoAddress = event;
    }
  }

  submitForm() {
    console.log(this.ascSetupForm.value);
  }

  backButton(path: string) {
    if (this.breadcrumb[this.breadcrumb.length - 1].path !== path) {
      this.router.navigate([`/main/${path}`]);
    }
  }

  formatBreadcrumb(data: string) {
    return (data.charAt(0).toUpperCase() + data.slice(1)).replace(/-/g, ' ');
  }

  handleCancel() {
    this.closeModel.emit();
  }
}
