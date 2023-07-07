import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-asin',
  templateUrl: './asin.component.html',
  styleUrls: ['./asin.component.scss'],
})
export class AsinComponent {
  @Input() asin = '';
}
