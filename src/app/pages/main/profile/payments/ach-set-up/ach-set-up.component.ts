import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';

@Component({
  selector: 'app-ach-set-up',
  templateUrl: './ach-set-up.component.html',
  styleUrls: ['./ach-set-up.component.scss'],
})
export class AchSetUpComponent implements OnInit {
  ascSetupForm!: FormGroup;
  reTypeAccountNumber: boolean = false;
  breadcrumb: any;
  
  achData = {
    name_of_account: 'Saving',
    account_number: 8529637418529635,
    re_type_account_number: 8529637418529635,
    bank_name: 'SBI',
    routing_transfer_number: 852963755,
  };

  tooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.breadcrumbs.next(this.activatedRoute.snapshot.url);
    console.log(this.activatedRoute.snapshot.url);

    this.breadcrumb = this.activatedRoute.snapshot.url;
  }

  ngOnInit(): void {
    this.ascSetupForm = new FormGroup({
      name_of_account: new FormControl(this.achData?.name_of_account, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(22),
        Validators.pattern('^[A-Za-z0-9_.]+$'),
      ]),
      account_number: new FormControl(this.achData?.account_number, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(17),
        Validators.pattern('^[0-9_.]+$'),
      ]),
      re_type_account_number: new FormControl(
        this.achData?.re_type_account_number
      ),
      bank_name: new FormControl(this.achData?.bank_name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern('^[A-Za-z0-9_.]+$'),
      ]),
      routing_transfer_number: new FormControl(
        this.achData?.routing_transfer_number,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
          Validators.pattern('^[0-9_.]+$'),
        ]
      ),
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

  submitForm() {
    console.log(this.ascSetupForm.value);
  }

  backButton(no: number, path: string) {
    if (this.breadcrumb[this.breadcrumb.length - 1].path !== path) {
      this.router.navigate([`/main/${path}`]);
    }
  }

  formatBreadcrumb(data: string) {
    return (data.charAt(0).toUpperCase() + data.slice(1)).replace(/-/g, ' ');
  }
}
