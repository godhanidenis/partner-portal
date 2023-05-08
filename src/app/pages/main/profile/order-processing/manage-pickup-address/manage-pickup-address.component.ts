import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';



@Component({
  selector: 'app-manage-pickup-address',
  templateUrl: './manage-pickup-address.component.html',
  styleUrls: ['./manage-pickup-address.component.scss'],
})
export class ManagePickupAddressComponent {
  breadcrumb: any;
  addAddressVisible: boolean = false;
  editAddressVisible: boolean = false;
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];
   

  uploadModelVisible:boolean = false;



  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  shipOut = [
    {
      id: 1,
      nickname: 'surat',
      location: 179890,
      description: 'My name is John Brown.'
    },
    {
      id: 2,
      nickname: 'rajkot',
      location: 189079,
      description: 'My name is Jim Green'
    },
    {
      id: 3,
      nickname: 'jamanager',
      location: 145979,
      description: 'My name is Joe Black.'
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.breadcrumbs.next(this.activatedRoute.snapshot.url);
    console.log(this.activatedRoute.snapshot.url);

    this.breadcrumb = this.activatedRoute.snapshot.url;
  }

  addPickupAddress() {
    this.addAddressVisible = true;
    // this.router.navigate([
    //   `/main/profile/order-processing/manage-pickup-address/add-pickup-address`,
    // ]);
  }

  backButton(no: number, path: string) {
    if (this.breadcrumb[this.breadcrumb.length - 1].path !== path) {
      this.router.navigate([`/main/${path}`]);
    }
  }

  formatBreadcrumb(data: string) {
    return (data.charAt(0).toUpperCase() + data.slice(1)).replace(/-/g, ' ');
  }

  handleCancel(): void {
    this.addAddressVisible = false;
    this.editAddressVisible = false;
    this.uploadModelVisible = false;
  }

  uploadModel(){
    this.uploadModelVisible = true;
  }

}
