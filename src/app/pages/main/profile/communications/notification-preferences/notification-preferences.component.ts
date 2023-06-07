import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-preferences',
  templateUrl: './notification-preferences.component.html',
  styleUrls: ['./notification-preferences.component.scss'],
})
export class NotificationPreferencesComponent implements OnInit {
  notificationForm!: FormGroup;
  isLoading: boolean = false;
  selectedQuickAction = '';
  actionEmail1 = '';
  actionEmail2 = '';
  formArrayName = [
    'catalog_amazon_offer_overview_report',
    'product_promotion_price_changes',
    'pricing_performance_report',
    'inventory_feed_errors_warnings',
    'order_processing_overview_report',
    'order_operations',
    'payment_emails',
    'purchase_order',
    'return_requests',
    'returns_overview_report',
    'order_invoicing',
    'selling_coach',
    'carrier_invoice_reco',
    'map_overview_report',
    'calendar_meeting_invites',
    'profile_change',
  ];

  listOfNotification: any[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.notificationForm = this.formBuilder.group({
      catalog_amazon_offer_overview_report: this.formBuilder.array([]),
      product_promotion_price_changes: this.formBuilder.array([]),
      pricing_performance_report: this.formBuilder.array([]),
      inventory_feed_errors_warnings: this.formBuilder.array([]),
      order_processing_overview_report: this.formBuilder.array([]),
      order_operations: this.formBuilder.array([]),
      payment_emails: this.formBuilder.array([]),
      purchase_order: this.formBuilder.array([]),
      return_requests: this.formBuilder.array([]),
      returns_overview_report: this.formBuilder.array([]),
      order_invoicing: this.formBuilder.array([]),
      selling_coach: this.formBuilder.array([]),
      carrier_invoice_reco: this.formBuilder.array([]),
      map_overview_report: this.formBuilder.array([]),
      calendar_meeting_invites: this.formBuilder.array([]),
      profile_change: this.formBuilder.array([]),
    });
    for (let index = 1; index < 17; index++) {
      this.addNotification(index);
    }
    this.listOfNotification = [
      {
        id: 1,
        label: 'Catalog & Amazon Offer Overview Report',
        formArray: this.catalog_amazon_offer_overview_report,
      },
      {
        id: 2,
        label: 'Product & Promotion Price Changes',
        formArray: this.product_promotion_price_changes,
      },
      {
        id: 3,
        label: 'Pricing Performance Report',
        formArray: this.pricing_performance_report,
      },
      {
        id: 4,
        label: 'Inventory Feed Errors & Warnings',
        formArray: this.inventory_feed_errors_warnings,
      },
      {
        id: 5,
        label: 'Order Processing Overview Report',
        formArray: this.order_processing_overview_report,
      },
      {
        id: 6,
        label: 'Order Operations',
        formArray: this.order_operations,
      },
      {
        id: 7,
        label: 'Payment Emails',
        formArray: this.payment_emails,
      },
      {
        id: 8,
        label: 'Purchase Order',
        formArray: this.purchase_order,
      },
      {
        id: 9,
        label: 'Return Requests',
        formArray: this.return_requests,
      },
      {
        id: 10,
        label: 'Returns Overview Report',
        formArray: this.returns_overview_report,
      },
      {
        id: 11,
        label: 'Order Invoicing',
        formArray: this.order_invoicing,
      },
      {
        id: 12,
        label: 'Selling Coach',
        formArray: this.selling_coach,
      },
      {
        id: 13,
        label: 'Carrier Invoice Reco',
        formArray: this.carrier_invoice_reco,
      },
      {
        id: 14,
        label: 'MAP Overview Report',
        formArray: this.map_overview_report,
      },
      {
        id: 15,
        label: 'Calendar Meeting Invites',
        formArray: this.calendar_meeting_invites,
      },
      {
        id: 16,
        label: 'Profile Change',
        formArray: this.profile_change,
      },
    ];
  }

  onQuickActionChanged = () => {
    console.log('Selected Value :', this.selectedQuickAction);
  };

  submitQuickAction() {
    switch (this.selectedQuickAction) {
      case 'add_all':
        this.addToAllNotification();
        break;
      case 'remove_all':
        this.removeNotificationAll();
        break;
      case 'find_replace':
        this.findAndReplaceFromAll();
        break;
      default:
        break;
    }
  }

  get catalog_amazon_offer_overview_report(): FormArray {
    return this.notificationForm.controls[
      'catalog_amazon_offer_overview_report'
    ] as FormArray;
  }
  get product_promotion_price_changes(): FormArray {
    return this.notificationForm.controls[
      'product_promotion_price_changes'
    ] as FormArray;
  }
  get pricing_performance_report(): FormArray {
    return this.notificationForm.controls[
      'pricing_performance_report'
    ] as FormArray;
  }
  get inventory_feed_errors_warnings(): FormArray {
    return this.notificationForm.controls[
      'inventory_feed_errors_warnings'
    ] as FormArray;
  }
  get order_processing_overview_report(): FormArray {
    return this.notificationForm.controls[
      'order_processing_overview_report'
    ] as FormArray;
  }
  get order_operations(): FormArray {
    return this.notificationForm.controls['order_operations'] as FormArray;
  }
  get payment_emails(): FormArray {
    return this.notificationForm.controls['payment_emails'] as FormArray;
  }
  get purchase_order(): FormArray {
    return this.notificationForm.controls['purchase_order'] as FormArray;
  }
  get return_requests(): FormArray {
    return this.notificationForm.controls['return_requests'] as FormArray;
  }
  get returns_overview_report(): FormArray {
    return this.notificationForm.controls[
      'returns_overview_report'
    ] as FormArray;
  }
  get order_invoicing(): FormArray {
    return this.notificationForm.controls['order_invoicing'] as FormArray;
  }
  get selling_coach(): FormArray {
    return this.notificationForm.controls['selling_coach'] as FormArray;
  }
  get carrier_invoice_reco(): FormArray {
    return this.notificationForm.controls['carrier_invoice_reco'] as FormArray;
  }
  get map_overview_report(): FormArray {
    return this.notificationForm.controls['map_overview_report'] as FormArray;
  }
  get calendar_meeting_invites(): FormArray {
    return this.notificationForm.controls[
      'calendar_meeting_invites'
    ] as FormArray;
  }
  get profile_change(): FormArray {
    return this.notificationForm.controls['profile_change'] as FormArray;
  }

  newNotification = (value: string): FormGroup => {
    return this.formBuilder.group({
      email: value,
    });
  };

  findEmailIndexFromList = (emailList: any[], email: string) => {
    let indexTobeReturned = -1;
    emailList.forEach((val, index) => {
      if (val['email'] === email) {
        indexTobeReturned = index;
        return false;
      }
      return true;
    });
    return indexTobeReturned;
  };

  addToAllNotification = () => {
    Object.values(this.notificationForm.value).forEach(
      (val: any, index: number) => {
        this.addNotification(index + 1, this.actionEmail1);
      }
    );
  };

  addNotification(numberOfType: number, value = '') {
    switch (numberOfType) {
      case 1:
        this.catalog_amazon_offer_overview_report.push(
          this.newNotification(value)
        );
        break;
      case 2:
        this.product_promotion_price_changes.push(this.newNotification(value));
        break;
      case 3:
        this.pricing_performance_report.push(this.newNotification(value));
        break;
      case 4:
        this.inventory_feed_errors_warnings.push(this.newNotification(value));
        break;
      case 5:
        this.order_processing_overview_report.push(this.newNotification(value));
        break;
      case 6:
        this.order_operations.push(this.newNotification(value));
        break;
      case 7:
        this.payment_emails.push(this.newNotification(value));
        break;
      case 8:
        this.purchase_order.push(this.newNotification(value));
        break;
      case 9:
        this.return_requests.push(this.newNotification(value));
        break;
      case 10:
        this.returns_overview_report.push(this.newNotification(value));
        break;
      case 11:
        this.order_invoicing.push(this.newNotification(value));
        break;
      case 12:
        this.selling_coach.push(this.newNotification(value));
        break;
      case 13:
        this.carrier_invoice_reco.push(this.newNotification(value));
        break;
      case 14:
        this.map_overview_report.push(this.newNotification(value));
        break;
      case 15:
        this.calendar_meeting_invites.push(this.newNotification(value));
        break;
      default:
        this.profile_change.push(this.newNotification(value));
        break;
    }
  }

  removeNotificationAll = () => {
    Object.values(this.notificationForm.value).forEach(
      (val: any, index: number) => {
        let indexToBeRemoved = this.findEmailIndexFromList(
          val,
          this.actionEmail1
        );
        if (indexToBeRemoved > -1) {
          this.removeNotification(indexToBeRemoved, index + 1);
        }
      }
    );
  };

  removeNotification(i: number, numberOfType: number) {
    switch (numberOfType) {
      case 1:
        this.catalog_amazon_offer_overview_report.removeAt(i);
        break;
      case 2:
        this.product_promotion_price_changes.removeAt(i);
        break;
      case 3:
        this.pricing_performance_report.removeAt(i);
        break;
      case 4:
        this.inventory_feed_errors_warnings.removeAt(i);
        break;
      case 5:
        this.order_processing_overview_report.removeAt(i);
        break;
      case 6:
        this.order_operations.removeAt(i);
        break;
      case 7:
        this.payment_emails.removeAt(i);
        break;
      case 8:
        this.purchase_order.removeAt(i);
        break;
      case 9:
        this.return_requests.removeAt(i);
        break;
      case 10:
        this.returns_overview_report.removeAt(i);
        break;
      case 11:
        this.order_invoicing.removeAt(i);
        break;
      case 12:
        this.selling_coach.removeAt(i);
        break;
      case 13:
        this.carrier_invoice_reco.removeAt(i);
        break;
      case 14:
        this.map_overview_report.removeAt(i);
        break;
      case 15:
        this.calendar_meeting_invites.removeAt(i);
        break;
      default:
        this.profile_change.removeAt(i);
        break;
    }
  }

  replaceNotification(i: number, numberOfType: number, email: string) {
    switch (numberOfType) {
      case 1:
        this.catalog_amazon_offer_overview_report.at(i).patchValue({
          email: email,
        });
        break;
      case 2:
        this.product_promotion_price_changes.at(i).patchValue({
          email: email,
        });
        break;
      case 3:
        this.pricing_performance_report.at(i).patchValue({
          email: email,
        });
        break;
      case 4:
        this.inventory_feed_errors_warnings.at(i).patchValue({
          email: email,
        });
        break;
      case 5:
        this.order_processing_overview_report.at(i).patchValue({
          email: email,
        });
        break;
      case 6:
        this.order_operations.at(i).patchValue({
          email: email,
        });
        break;
      case 7:
        this.payment_emails.at(i).patchValue({
          email: email,
        });
        break;
      case 8:
        this.purchase_order.at(i).patchValue({
          email: email,
        });
        break;
      case 9:
        this.return_requests.at(i).patchValue({
          email: email,
        });
        break;
      case 10:
        this.returns_overview_report.at(i).patchValue({
          email: email,
        });
        break;
      case 11:
        this.order_invoicing.at(i).patchValue({
          email: email,
        });
        break;
      case 12:
        this.selling_coach.at(i).patchValue({
          email: email,
        });
        break;
      case 13:
        this.carrier_invoice_reco.at(i).patchValue({
          email: email,
        });
        break;
      case 14:
        this.map_overview_report.at(i).patchValue({
          email: email,
        });
        break;
      case 15:
        this.calendar_meeting_invites.at(i).patchValue({
          email: email,
        });
        break;
      default:
        this.profile_change.at(i).patchValue({
          email: email,
        });
        break;
    }
  }

  findAndReplaceFromAll = () => {
    Object.values(this.notificationForm.value).forEach(
      (val: any, index: number) => {
        let indexToBeReplaced = this.findEmailIndexFromList(
          val,
          this.actionEmail1
        );
        if (indexToBeReplaced > -1) {
          this.replaceNotification(
            indexToBeReplaced,
            index + 1,
            this.actionEmail2
          );
        }
      }
    );
  };

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
