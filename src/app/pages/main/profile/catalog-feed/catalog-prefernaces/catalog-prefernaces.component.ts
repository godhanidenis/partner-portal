import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-prefernaces',
  templateUrl: './catalog-prefernaces.component.html',
  styleUrls: ['./catalog-prefernaces.component.scss'],
})
export class CatalogrefernacesComponent implements OnInit {
 
 
  
  showLabelSection: boolean = false;
  catalogForm!: FormGroup;
  
  constructor(  private router: Router  ) {}

  ngOnInit(): void {
    this.catalogForm = new FormGroup({
      handlingSetup: new FormControl('no'),
      map: new FormControl(),
     
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
