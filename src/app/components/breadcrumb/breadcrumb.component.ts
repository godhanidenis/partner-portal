import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() backRout: string = '';
  breadcrumbList: string[] = [];
  path: string[] = [];

  constructor(private router: Router) {
    this.path = this.router.url.replace(/\//g, ' ').substring(1).split(' ');
    this.path.shift();
    if (
      (this.path[0] === 'products' && this.path[1] === 'details') ||
      this.path[0] === 'inventory-feeds' ||
      this.path[0] === 'promotions'
    ) {
      this.path.pop();
    }
    this.breadcrumbList = this.path;
  }

  ngOnInit(): void {}

  formatTitle(title: string, index: number) {
    var sentence = title.replace(/-/g, ' ').replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    if (index === 2) {
      switch (sentence) {
        case 'Sales_today':
          sentence = `Today's Sales`;
          break;
        case 'Sales_wtd':
          sentence = `Week to Date (WTD) Sales`;
          break;
        case 'Sales_mtd':
          sentence = `Month to Date (MTD) Sales`;
          break;
      }
    }
    return sentence;
  }

  backButton(path: string, index: number) {
    if (this.breadcrumbList.length - 1 !== index) {
      this.router.navigate([`/main/${path}`]);
    }
  }
}
