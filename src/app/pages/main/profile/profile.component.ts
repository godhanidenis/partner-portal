import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  gridStyle = {
    width: '25%',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigate(path: string) {
    this.router.navigate([`/main/profile/${path}`]);
  }
}
