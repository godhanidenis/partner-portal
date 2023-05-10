import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-co-op',
  templateUrl: './co-op.component.html',
  styleUrls: ['./co-op.component.scss'],
})
export class CoOpComponent implements OnInit {
  rebateDate = {
    code: 123,
    calculMethod: 'calculMethod',
    discount: 10,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
