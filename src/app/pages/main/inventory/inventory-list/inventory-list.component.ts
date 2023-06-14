import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { InventoryService } from 'src/app/shared/service/inventory.service';
import { UserPermissionService } from 'src/app/shared/service/user-permission.service';

export interface Filters {
  filter_start_date?: string;
  filter_end_date?: string;
  filter_inventory_method?: string;
  filter_inventory_result?: string;
}
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  @ViewChild('mySidenav', { static: false }) sidenavSection!: ElementRef;
  isLoading: boolean = false;
  total = 1;
  pageSize = 100;
  pageIndex = 1;
  pageSizeOptions = [100];

  isUploadVisible: boolean = false;
  isDownloadVisible: boolean = false;

  inventoryList: any[] = [];
  exportType: boolean = false;
  searchInventory!: FormGroup;
  filter!: FormGroup;
  accountSearch = new Subject<any>();
  badgeTotal: number = 0;
  clear_btn: boolean = false;
  selectDate: string = '';
  selectMethod: string = '';
  selectStatus: string = '';
  dateCount: number = 0;
  methodCount: number = 0;
  statusCount: number = 0;
  inventory_search: string = '';
  listOfFilter!: Filters;
  userPermissions: any = '';
  statusDropdown = ['Processed', 'Rejected'];

  constructor(
    private router: Router,
    private inventoryService: InventoryService,
    private userPermissionService: UserPermissionService
  ) {
    userPermissionService.userPermission.subscribe((permission: any) => {
      this.userPermissions = permission;
    });
    this.accountSearch
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value: any) => {
        this.inventory_search = value.target.value;
        this.getInventoryList(
          this.pageIndex,
          this.inventory_search,
          this.selectDate[0],
          this.selectDate[1],
          this.selectMethod,
          '',
          this.selectStatus
        );
      });
  }

  ngOnInit(): void {
    this.searchInventory = new FormGroup({
      search: new FormControl(''),
    });
    this.filter = new FormGroup({
      date: new FormControl(''),
      method: new FormControl(''),
      status: new FormControl(''),
    });
    this.getInventoryList(
      this.pageIndex,
      this.inventory_search,
      this.selectDate[0],
      this.selectDate[1],
      this.selectMethod,
      '',
      this.selectStatus
    );
  }

  getInventoryList(
    page: number,
    search_term: string,
    filter_start_date: string,
    filter_end_date: string,
    filter_inventory_method: string,
    filter_feed_result: string,
    filter_feed_status: string
  ) {
    this.isLoading = true;
    this.inventoryService
      .getAllInventory({
        page: page,
        filter_start_date: filter_start_date,
        filter_end_date: filter_end_date,
        filter_inventory_method: filter_inventory_method,
        filter_feed_result: filter_feed_result,
        filter_feed_status: filter_feed_status,
        search_term: search_term,
      })
      .subscribe(
        (res: any) => {
          console.log(res);

          this.total = res.pagination?.total_rows;
          this.inventoryList = res.inventory_feeds;
          this.isLoading = false;
        },
        (err) => (this.isLoading = false)
      );
  }

  pageIndexChange(page: number) {
    this.pageIndex = page;
    this.getInventoryList(
      this.pageIndex,
      this.inventory_search,
      this.selectDate[0],
      this.selectDate[1],
      this.selectMethod,
      '',
      this.selectStatus
    );
  }

  navigatePage(path: string) {
    this.router.navigate([`/main/${path}`]);
  }

  openModal(type: string) {
    if (type === 'download') {
      this.isUploadVisible = true;
    } else if (type === 'Upload') {
      this.isDownloadVisible = true;
    }
  }

  openNav() {
    this.sidenavSection.nativeElement.style.width = '280px';
  }

  closeNav() {
    this.sidenavSection.nativeElement.style.width = '0';
  }

  tagFunction() {
    this.selectDate = '';
    this.selectMethod = '';
    this.selectStatus = '';

    this.dateCount = 0;
    this.methodCount = 0;
    this.statusCount = 0;

    this.badgeTotal = 0;
    this.clear_btn = false;
    this.filter.reset();
    this.getInventoryList(
      this.pageIndex,
      this.inventory_search,
      this.selectDate[0],
      this.selectDate[1],
      this.selectMethod,
      '',
      this.selectStatus
    );
    this.listOfFilter = {
      filter_start_date: this.selectDate[0],
      filter_end_date: this.selectDate[1],
      filter_inventory_method: this.selectMethod,
      filter_inventory_result: this.selectStatus,
    };
  }

  close(type: string) {
    if (type) {
      switch (type) {
        case 'Date':
          this.filter.controls['date'].reset();
          this.selectDate = '';
          this.dateCount = 0;
          this.badgeTotal--;
          break;
        case 'Method':
          this.filter.controls['method'].reset();
          this.selectMethod = '';
          this.methodCount = 0;
          this.badgeTotal--;
          break;
        case 'Status':
          this.filter.controls['status'].reset();
          this.selectStatus = '';
          this.statusCount = 0;
          this.badgeTotal--;
          break;
        default:
          break;
      }
      this.getInventoryList(
        this.pageIndex,
        this.inventory_search,
        this.selectDate[0],
        this.selectDate[1],
        this.selectMethod,
        '',
        this.selectStatus
      );
      this.listOfFilter = {
        filter_start_date: this.selectDate[0],
        filter_end_date: this.selectDate[1],
        filter_inventory_method: this.selectMethod,
        filter_inventory_result: this.selectStatus,
      };
    }
  }

  change(value: string, type: string) {
    if (value && value.length !== 0) {
      switch (type) {
        case 'Date':
          if (value.length !== 0) {
            this.clear_btn = true;
            this.selectDate = value;

            if (this.dateCount == 0) {
              this.dateCount++;
              this.badgeTotal++;
            }
          }
          break;

        case 'Method':
          if (value == 'Email' || value == 'EDI') {
            this.clear_btn = true;
            this.selectMethod = value;
            if (this.methodCount == 0) {
              this.methodCount++;
              this.badgeTotal++;
            }
          }
          break;

        case 'Status':
          this.clear_btn = true;
          this.selectStatus = value;
          if (this.statusCount == 0) {
            this.statusCount++;
            this.badgeTotal++;
          }
          break;
      }
      this.getInventoryList(
        this.pageIndex,
        this.inventory_search,
        this.selectDate[0],
        this.selectDate[1],
        this.selectMethod,
        '',
        this.selectStatus
      );
      this.listOfFilter = {
        filter_start_date: this.selectDate[0],
        filter_end_date: this.selectDate[1],
        filter_inventory_method: this.selectMethod,
        filter_inventory_result: this.selectStatus,
      };
    } else {
      if (this.badgeTotal > 0 && value !== null) {
        switch (type) {
          case 'Date':
            this.selectDate = '';
            this.dateCount--;
            this.badgeTotal--;
            break;
          case 'Method':
            this.selectMethod = '';
            this.methodCount--;
            this.badgeTotal--;
            break;
          case 'Status':
            this.selectStatus = '';
            this.statusCount--;
            this.badgeTotal--;
            break;
        }
      }
      this.getInventoryList(
        this.pageIndex,
        this.inventory_search,
        this.selectDate[0],
        this.selectDate[1],
        this.selectMethod,
        '',
        this.selectStatus
      );
      this.listOfFilter = {
        filter_start_date: this.selectDate[0],
        filter_end_date: this.selectDate[1],
        filter_inventory_method: this.selectMethod,
        filter_inventory_result: this.selectStatus,
      };
    }
  }

  handleCancel(type: string) {
    if (type === 'download') {
      this.isUploadVisible = false;
    } else if (type === 'Upload') {
      this.isDownloadVisible = false;
    }
  }
}
