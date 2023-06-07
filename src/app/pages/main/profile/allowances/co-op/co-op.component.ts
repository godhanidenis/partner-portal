import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-co-op',
  templateUrl: './co-op.component.html',
  styleUrls: ['./co-op.component.scss'],
})
export class CoOpComponent implements OnInit {
  addCoOpVisible: boolean = false;
  isLoading: boolean = false;
  addCoOpForm!: FormGroup;
  rebateDate = {
    code: 123,
    calculMethod: 'calculMethod',
    discount: 10,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.addCoOpForm = new FormGroup({
      discount: new FormControl(0, [Validators.required]),
      calculMethod: new FormControl('', [Validators.required]),
    });
  }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }

  addCoOp() {
    this.addCoOpVisible = true;
  }

  submit() {}

  handleCancel() {
    this.addCoOpVisible = false;
  }
}
