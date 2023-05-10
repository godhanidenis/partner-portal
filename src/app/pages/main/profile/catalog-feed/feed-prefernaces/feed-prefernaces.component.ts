import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-prefernaces',
  templateUrl: './feed-prefernaces.component.html',
  styleUrls: ['./feed-prefernaces.component.scss'],
})
export class FeedPrefernacesComponent implements OnInit {
 
  constructor( private router: Router ) {}

  ngOnInit(): void {}

    
    backButton(path: string) {
      this.router.navigate([`/main/${path}`]);   
  }
}
