import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-prefernaces',
  templateUrl: './catalog-prefernaces.component.html',
  styleUrls: ['./catalog-prefernaces.component.scss'],
})
export class CatalogrefernacesComponent implements OnInit {
  showLabelSection: boolean = false;
  catalogForm!: FormGroup;
 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.catalogForm = new FormGroup({
      map: new FormControl(''),
      handlingSetup: new FormControl('no'),
      choose_number_of_days_data: new FormControl('', [ 
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
        Validators.pattern('^[0-9_.]+$'),]),
    });
  }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }

  selectPrepaidLabel(event: string) {
    if (event === 'yes') {
      this.showLabelSection = true;
    } else {
      this.showLabelSection = false;
    }
  }
}
