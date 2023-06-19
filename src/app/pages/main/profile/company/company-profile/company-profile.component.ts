import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss'],
})
export class CompanyProfileComponent implements OnInit {
  disableInput = true;
  companyProfile!: FormGroup;
  breadcrumb: any;
  isLoading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.companyProfile = new FormGroup({
      partnerCode: new FormControl('167343'),
      displayname: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
    });
    this.companyProfile.controls['patnercode'].disable();
  }

  backButton(no: number, path: string) {
    if (this.breadcrumb[this.breadcrumb.length - 1].path !== path) {
      this.router.navigate([`/main/${path}`]);
    }
  }
}
