import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationsRoutingModule } from './communications-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactPreferencesComponent } from './contact-preferences/contact-preferences.component';
import { AddContactPreferenceComponent } from './contact-preferences/add-contact-preference/add-contact-preference.component';
import { NotificationPreferencesComponent } from './notification-preferences/notification-preferences.component';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  declarations: [
    ContactPreferencesComponent,
    AddContactPreferenceComponent,
    NotificationPreferencesComponent,
  ],
  imports: [
    CommonModule,
    CommunicationsRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
  ],
})
export class CommunicationsModule {}
