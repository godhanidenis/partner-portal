import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ach-section',
  templateUrl: './ach-section.component.html',
  styleUrls: ['./ach-section.component.scss'],
})
export class AchSectionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
