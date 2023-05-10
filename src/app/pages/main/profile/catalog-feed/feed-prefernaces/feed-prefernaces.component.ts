import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-prefernaces',
  templateUrl: './feed-prefernaces.component.html',
  styleUrls: ['./feed-prefernaces.component.scss'],
})
export class FeedPrefernacesComponent implements OnInit {
  feedForm!: FormGroup;
 
  showEmailSection: boolean = false;
 

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.feedForm = this.fb.group({
      feedMethod: 'edi',
      mpn: [''],
      quantity: [''],
      type: [''],
      emailList: this.fb.array([]), 
    });
 
    this.addEmails();
  }

  get emailList(): FormArray {
    return this.feedForm.controls['emailList'] as FormArray;
  }

  newEmail(): FormGroup {
    return this.fb.group({
      email: '',
    });
  }

  addEmails() {
    this.emailList.push(this.newEmail());
  }

  removeEmail(i: number) {
    this.emailList.removeAt(i);
  }

  selectMethod(event: string) {
    if (event === 'email') {
      this.showEmailSection = true;
    } else {
      this.showEmailSection = false;
    }
  }



  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
 
}
