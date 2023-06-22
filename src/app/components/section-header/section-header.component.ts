import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent implements OnInit {
  @Input() header = '';
  @Input() modifyLable = false;
  headerLabel = '';
  constructor(private dashboardService: DashboardService) {

  }
  ngOnInit(): void {
    this.dashboardService.routeConfigMap.subscribe((res: any) => {
      if(res && res?.size > 0) {
        this.headerLabel = res?.get(this.header)?.name;
      }
    })
  }
}
