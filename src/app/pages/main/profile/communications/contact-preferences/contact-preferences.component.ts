import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-preferences',
  templateUrl: './contact-preferences.component.html',
  styleUrls: ['./contact-preferences.component.scss'],
})
export class ContactPreferencesComponent implements OnInit {
  addContactPreferencesVisible: boolean = false;
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];
  modelHeader: string = 'Add';
  editData: any;
  contactPreferencesList = [
    {
      id: 1,
      first_name: 'Jay',
      last_name: 'Roy',
      designation: 'Employ',
      work_phone: '9876543210',
      work_phone_extension: '8529637415',
      mobile: '6985237410',
      email: 'jay@gmail.com',
    },
    {
      id: 2,
      first_name: 'Max',
      last_name: 'Liya',
      designation: 'CEO',
      work_phone: '8529637415',
      work_phone_extension: '6852974155',
      mobile: '9517538642',
      email: 'max@gmail.com',
    },
    {
      id: 3,
      first_name: 'Lax',
      last_name: 'Doy',
      designation: 'CTO',
      work_phone: '6325147892',
      work_phone_extension: '8529637415',
      mobile: '9537846210',
      email: 'lax@gmail.com',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addContactPreferences(type: string, data: any) {
    this.modelHeader = type;
    if (type === 'Add') {
      this.editData = '';
    } else {
      this.editData = data;
    }
    this.addContactPreferencesVisible = true;
  }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }

  handleCancel(): void {
    this.addContactPreferencesVisible = false;
  }
}
