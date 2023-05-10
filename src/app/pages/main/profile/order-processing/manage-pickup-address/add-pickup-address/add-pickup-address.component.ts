import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() editData: any = '';

  ascSetupForm!: FormGroup;
  otpForm!: FormGroup;
  reTypeAccountNumber: boolean = false;
  breadcrumb: any;
  isLoading: boolean = false;
  verifyOTPVisible: boolean = false;

  tooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };
  vendorAddress: boolean = false;
  rtoAddress: boolean = false;
  showVerifiedNumber: boolean = true;

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
      // rto_address: new FormControl(false),
      supplier_name: new FormControl(''),
      supplier_gstin: new FormControl(''),
      // select_pickup_address: new FormControl(''),
    });

    this.otpForm = new FormGroup({
      one: new FormControl(''),
      two: new FormControl(''),
      three: new FormControl(''),
      four: new FormControl(''),
      five: new FormControl(''),
      six: new FormControl(''),
    });

    setTimeout(() => {
      console.log(this.editData);
      if (this.editData) {
        this.ascSetupForm.controls['address_nickname'].setValue(
          this.editData?.address_nickname
        );
        this.ascSetupForm.controls['company_name'].setValue(
          this.editData?.company_name
        );
        this.ascSetupForm.controls['contact_name'].setValue(
          this.editData?.contact_name
        );
        this.ascSetupForm.controls['phone'].setValue(this.editData?.phone);
        this.ascSetupForm.controls['extension'].setValue(
          this.editData?.extension
        );
        this.ascSetupForm.controls['email'].setValue(this.editData?.email);
        this.ascSetupForm.controls['address_line_1'].setValue(
          this.editData?.address_line_1
        );
        this.ascSetupForm.controls['pin_code'].setValue(
          this.editData?.pin_code
        );
        this.ascSetupForm.controls['city'].setValue(this.editData?.city);
        this.ascSetupForm.controls['address_line_2'].setValue(
          this.editData?.address_line_2
        );
        this.ascSetupForm.controls['state'].setValue(this.editData?.state);
        this.ascSetupForm.controls['open_at'].setValue(this.editData?.open_at);
        this.ascSetupForm.controls['close_at'].setValue(
          this.editData?.close_at
        );
        this.ascSetupForm.controls['time_zone'].setValue(
          this.editData?.time_zone
        );
        this.ascSetupForm.controls['vendor_address'].setValue(
          this.editData?.vendor_address
        );
        // this.ascSetupForm.controls['rto_address'].setValue(
        //   this.editData?.rto_address
        // );
        this.ascSetupForm.controls['supplier_name'].setValue(
          this.editData?.supplier_name
        );
        this.ascSetupForm.controls['supplier_gstin'].setValue(
          this.editData?.supplier_gstin
        );
        // this.ascSetupForm.controls['select_pickup_address'].setValue(
        //   this.editData?.select_pickup_address
        // );

        this.showVerifiedNumber = false;
        this.ascSetupForm.controls['phone'].disable();
        this.ascSetupForm.controls['address_line_1'].disable();
        this.ascSetupForm.controls['pin_code'].disable();
        this.ascSetupForm.controls['city'].disable();
        this.ascSetupForm.controls['address_line_2'].disable();
        this.ascSetupForm.controls['state'].disable();
      }
    }, 100);
  }

  editPhoneNumber() {
    this.showVerifiedNumber = !this.showVerifiedNumber;
    if (this.showVerifiedNumber) {
      this.ascSetupForm.controls['phone'].enable();
    } else {
      this.ascSetupForm.controls['phone'].disable();
    }
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

  verifyOTP() {
    this.verifyOTPVisible = true;
  }

  submitOTP() {}

  backButton(path: string) {
    if (this.breadcrumb[this.breadcrumb.length - 1].path !== path) {
      this.router.navigate([`/main/${path}`]);
    }
  }

  formatBreadcrumb(data: string) {
    return (data.charAt(0).toUpperCase() + data.slice(1)).replace(/-/g, ' ');
  }

  handleCancel(type: string) {
    if (type === 'close') {
      this.closeModel.emit();
    }
    this.verifyOTPVisible = false;
  }
}
